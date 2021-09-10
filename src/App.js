import { useEffect, useState } from 'react';
import './App.css';
import {
    getAuthLink,
    getAuthTokenAsync,
    setAuthTokenByCodeAsync,
    unAuthorizeAsync,
    getUser
} from './services/authService';
import Profile from './components/Profile';
import Activities from './components/Activities';
import { UserContext } from './contexts/userContext';
import Welcome from './components/Welcome';
import FullScreen from './components/FullScreen';
import Loader from './components/Loader';
import localDB from './services/indexedDBService';


function App() {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if(code?.length) {
            const getUserData = async () => {
                setLoading(true);
                try {
                    await setAuthTokenByCodeAsync(code);
                    window.history.pushState({},'', '/');
                    window.location.reload();
                    //window.location.href = window.location.href.replace(window.location.search, '');
                } catch (e) {
                    setErr(e.message)
                    window.location.href = getAuthLink();
                }
                finally {
                    setLoading(false);
                }
            }
            return getUserData();
        } else {
            const getStoredData = async () => {
                setLoading(true);
                try {
                    const token = await getAuthTokenAsync();
                    setToken(token);
                } catch (e) {
                    console.log(e)
                    //window.location.href = getAuthLink();
                } finally {
                    setLoading(false);
                }
            }

            getStoredData();
        }

    }, []);

    if (loading) {
        return <FullScreen><Loader /></FullScreen>;
    }

    const handleLogout = async (e) => {
        e.target.disabled = true;
        await unAuthorizeAsync();
        await localDB.clear();
        window.location.reload();
    }

  return (
    <div className="App">
        {err && <p>{err}</p>}
        {token && <UserContext.Provider value={getUser()}>
            <header className="header">
                <Profile />
                <button onClick={handleLogout}>Выйти</button>
            </header>
            <Activities token={token} />
        </UserContext.Provider>}
        {!token && <Welcome />}
    </div>
  );
}

export default App;

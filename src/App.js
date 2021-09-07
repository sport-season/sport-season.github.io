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


function App() {
    const [token, setToken] = useState(null);
    const [err, setErr] = useState(null);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if(code?.length) {
            const getUserData = async () => {
                try {
                    await setAuthTokenByCodeAsync(code);
                    window.history.pushState({},'', '/');
                    window.location.reload();
                    //window.location.href = window.location.href.replace(window.location.search, '');
                } catch (e) {
                    setErr(e.message)
                    window.location.href = getAuthLink();
                }
            }
            return getUserData();
        } else {
            const getStoredData = async () => {
                try {
                    const token = await getAuthTokenAsync();
                    setToken(token);
                } catch (e) {
                    console.log(e)
                    //window.location.href = getAuthLink();
                }
            }

            getStoredData();
        }

    }, []);

  return (
    <div className="App">
        {err && <p>{err}</p>}
        {token && <UserContext.Provider value={getUser()}>
            <header className="header">
                <Profile />
                <button onClick={() => unAuthorizeAsync().then(() => window.location.reload())}>Выйти</button>
            </header>
            <Activities token={token} />
        </UserContext.Provider>}
        {!token && <section className="hello">
            <p align="center">
                Это приложение покажет<br />
                статистику ваших активностей<br />
                в новом виде 😎
                <br />
                <br />
                Для продолжения нужно
            <br />
            <button  className="bigButton" onClick={() => window.location.href = getAuthLink()}>Войти в Strava</button>
            </p>
            </section>}
    </div>
  );
}

export default App;

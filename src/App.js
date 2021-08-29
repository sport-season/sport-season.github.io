import { useEffect, useState } from 'react';
import './App.css';
import {
    getAuthLink,
    getAuthTokenAsync,
    setAuthTokenByCodeAsync,
    unAuthorizeAsync
} from './services/authService';
import Profile from './components/Profile';
import { getActivitiesAsync } from './services/activitiesService';
import Activities from './components/Activities';


function App() {
    const [token, setToken] = useState(null);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const code = params.get('code');

        if(code?.length) {
            const getUserData = async () => {
                try {
                    await setAuthTokenByCodeAsync(code);
                    window.location.href = window.location.href.replace(window.location.search, '');
                } catch (e) {
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
          {token && <header>
              <Profile />
              <button onClick={() => unAuthorizeAsync().then(() => window.location.reload())}>Выйти</button>
          </header>}
          {!token && <button onClick={() => window.location.href = getAuthLink()}>Войти</button>}
        {token && <Activities token={token} /> }
    </div>
  );
}

export default App;

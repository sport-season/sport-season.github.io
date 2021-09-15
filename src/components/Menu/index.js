import { unAuthorizeAsync } from '../../services/authService';
import localDB from '../../services/indexedDBService';
import styles from './styles.module.css';
import logo from '../../images/long-512_orange.png';

const Menu = ({ onClose }) => {
    const handleLogout = async (e) => {
        if (!window.confirm('Приложение будет разлогинено, сохраненные данные будут удалены. \r\nПродолжить?')) {return;}
        e.target.disabled = true;
        await unAuthorizeAsync();
        await localDB.clear();
        window.location.reload();
    }

    const handleShare = () => {
        navigator.share({
            title: "stravastat",
            text: "Сервис анализа тренировок Strava",
            url: 'https://stravastat.github.io/'
        })
            .then(function () {
                console.log("Shareing successfull")
            })
            .catch(function () {
                console.log("Sharing failed")
            })
    }

    return <div className={styles.menu}>
        <header className={styles.header}>
            <strong>STRAVASTAT</strong>
            <button onClick={onClose}>×</button>
        </header>
        <section className={styles.content}>
            <div>
                <p><b>Сервис анализа тренировок Strava</b></p>
                <p>
                    Может использоваться:
                    <ul>
                        <li>Как веб-сайт <a href="https://stravastat.github.io/" target="_blank">stravastat.github.io</a> на любом устройстве</li>
                        <li>
                            Как прогрессивное веб приложение (PWA) устанавливаемое на устроство (например смартфон на android)
                            <br />
                            <small>Актуальную версию можно установить с сайта <a href="https://stravastat.github.io/" target="_blank">stravastat.github.io</a> предварительно удалив <b>Stravastat</b> из списка приложений </small>
                        </li>
                    </ul>
                </p>
                <p>Сервис использует данные об активностях пользователя <a href="https://www.strava.com/" target="_blank">www.strava.com</a></p>
                <p>
                    Тренировки загружаются в локальное хранилище один раз при инициализации приложения и доступны даже <b>offline</b> <br />
                    <small>наличие на устройстве приложения <a href={"https://osmand.net/ru/"} target="_blank">osmand</a> с установленными картами позволяет просматривать треки тренировок на карте без доступа к интернету</small>
                </p>
                <p>
                Based on API <a href="https://www.strava.com/" target="_blank">strava</a>
                {' and '}
                <a href="https://www.openstreetmap.org/" target="_blank">openstreetmap</a>
            </p>
            </div>
            {window.navigator.share && <button onClick={handleShare}>Поделиться</button>}

        </section>
        <footer className={styles.footer}>
            <button onClick={handleLogout} style={{backgroundColor:'#adadad', borderColor:'#777777'}}>Выйти</button>
            2021 <p>© Created by <a href="https://www.strava.com/athletes/12602406" target="_blank">Fedoseev Nikolay</a></p>
        </footer>
    </div>
}


export default Menu;

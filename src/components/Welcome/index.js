import { getAuthLink } from '../../services/authService';
import FullScreen from '../FullScreen';

const Welcome = () => {
    return <FullScreen>
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
    </FullScreen>;
}

export default Welcome;

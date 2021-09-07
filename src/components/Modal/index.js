import styles from './styles.module.css';
import {useEffect} from "react";
import * as ReactDOM from "react-dom";
const Modal = ({ children, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = '';
    }, []);

    return <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
}

export const showModal = props => {
    const container = document.createElement('div');
    document.body.appendChild(container);

    ReactDOM.render(<Modal {...props} onClose={() => document.body.removeChild(container)} />, container)
}

export default Modal;
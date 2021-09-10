import styles from './styles.module.css';

const FullScreen = ({ children, className }) => {
    return <section className={[styles.fullScreen,className].join(' ')}>
        {children}
    </section>;
}

export default FullScreen;

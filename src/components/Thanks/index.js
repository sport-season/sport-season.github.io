import styles from './styles.module.css';

const Thanks = ({ onClose }) => {
    return <div className={styles.menu}>
        <header className={styles.header}>
            <strong>STRAVASTAT</strong>

        </header>
        <section className={styles.content}>
            <h2>Пасиб 😊</h2>
            <button onClick={() => { window.location.hash = ''; onClose(); }}>К приложению</button>
        </section>
    </div>
}


export default Thanks;

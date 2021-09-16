import styles from './styles.module.css';

const Donate = ({ onClose }) => {
    return <div className={styles.menu}>
        <header className={styles.header}>
            <strong>STRAVASTAT</strong>
            <button onClick={onClose}>×</button>
        </header>
        <section className={styles.content}>
            <iframe src="https://yoomoney.ru/quickpay/shop-widget?writer=seller&targets=%D0%9D%D0%B0%20%D0%BA%D0%BE%D1%84%D0%B5%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83%20%E2%98%95&targets-hint=&default-sum=55&button-text=12&comment=on&hint=%D0%B8%D0%BB%D0%B8%20%D0%B8%D0%B4%D0%B5%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D1%80%D0%B0%D0%B7%D0%B2%D0%B8%D1%82%D0%B8%D1%8F%20%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B0&successURL=https%3A%2F%2Fstravastat.github.io%2F%23thanksForDonation&quickpay=shop&account=410011057543275" width="100%" height="314"
                    frameBorder="0" scrolling="no"></iframe>
        </section>
    </div>
}


export default Donate;

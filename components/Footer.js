import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
        Copywrite &copy;<span className={styles.brand}>Amazon</span>&nbsp;
        {new Date().getFullYear()}
        </footer>
    )
}

export default Footer;
import styles from '../styles/Footer.module.css'

export default function Footer() {
	return <div className={styles.footer}>
        <p>Demo project using NextJS, MaterialUI and NextAuth.</p>
        <p>This site uses your system settings to determine whether to show Light or Dark mode.</p>
    </div>;
}

import Link from "next/link"
import styles from "./header.module.css"
import { redirect } from "next/dist/server/api-utils";

const Header = () => {
    return (
        <header className={styles.header}>
            <section className={styles.logo}>
                <Link href="/" className={styles.logoLink}>MarketFácil</Link>
            </section>
            <nav className={styles.navLinks}>
                <Link href="/sobre" className={styles.navLink}>Sobre</Link>
                <Link href="/pedidos" className={styles.navLink}>Pedidos</Link>
                <Link href="/cadastro" className={styles.navLink}>Log-out</Link>
            </nav>
        </header>
    );
};

export default Header;
"use client";
import Link from "next/link"
import styles from "./header.module.css"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

const Header = () => {
    const router = useRouter();

    const handleLogout = () => {
        const confirmar = confirm("Quer mesmo sair?");
        if (confirmar) {
            router.push("/cadastro");
        }
    };

    return (
        <header className={styles.header}>
            <section className={styles.logo}>
                <Link href="/" className={styles.logoLink}>MarketFácil</Link>
            </section>
            <nav className={styles.navLinks}>
                <Link href="/sobre" className={styles.navLink}>Sobre</Link>
                <Link href="/pedidos" className={styles.navLink}>Pedidos</Link>
                <Link href="/cadastro" className={styles.navLink} onClick={handleLogout}>Log-out</Link>
            </nav>
        </header>
    );
};

export default Header;
// app/layout.js
import Header from './components/Header'
// import Footer from './components/Footer'
import styles from './page.module.css'

export const metadata = {
  title: 'MarketFácil',
  description: 'Projeto migrado para Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Header />
      <body>
        <h1 className={styles.title}>Bom te ver novamente!</h1>
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

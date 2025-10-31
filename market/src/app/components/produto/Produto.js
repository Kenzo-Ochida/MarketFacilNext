import Link from "next/link";
import Image from "next/image";
import styles from "./Produto.module.css";

const Produto = ({ produto }) => {
    return (
        <Link key={produto.id} href={`/produtos/${produto.id}`} className={styles.produtoLink}>
            <article className={styles.cards}>
                <Image alt={produto.nome} src={produto.imagem} width={150} height={140}/>
                <h2>{produto.nome}</h2>
                <p>{produto.seller}</p>
                <article className={styles.quant_btns}>
                    <button className={styles.minus_btn}>-</button>
                    <p className={styles.buy_text}>Comprar</p>
                    <button className={styles.buy_text}>+</button>
                </article>
            </article>
        </Link>
    )
};

export default Produto;
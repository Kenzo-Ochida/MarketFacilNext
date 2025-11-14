'use client';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
// import produtos;
import { useParams } from 'next/navigation';
export default function ProdutoPage() {
    const params = useParams();
    const dataProduto = {
        
    };
    const produto = dataProduto[params.id];

    const [quant, setQuant] = React.useState(0);
    function decrease(){
        if(quant > 0){
            setQuant(quant - 1);
        }
    }
    function increase(){
        if(quant < 10){
            setQuant(quant + 1);
        }
    }
    return(
        <section className={styles.produtoPage}>
            <h1>{produto.product_name}</h1>
            <article className={styles.produtoDetails}>
                <Image alt={produto.product_name} src={produto.image_url} width={300} height={280}/>
                <article className={styles.produtoInfo}>
                    <p><span className={styles.bold_desc}>Vendido por:</span> {produto.seller}</p>
                    <p><span className={styles.bold_desc}>Descrição:</span> {produto.descricao}</p>
                    <p><span className={styles.bold_desc}>Preço: R$</span> {produto.preco.toFixed(2)}</p>
                    <hr/>
                    <article className={styles.quant_btns}>
                        <button className={styles.minus_btn} onClick={decrease}>-</button> {/* Classe preventiva */}
                        <p className={`${styles.buy_text} ${quant > 0 ? styles.active : ""}`}>
                            {quant == 0 ? "Selecione" : ("Comprar " + quant)}
                        </p>
                        <button className={styles.plus_btn} onClick={increase}>+</button> {/* Classe preventiva */}
                    </article>
                </article>
            </article>
        </section>
    )
}
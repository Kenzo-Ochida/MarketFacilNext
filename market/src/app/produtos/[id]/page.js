'use client';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { useParams } from 'next/navigation';
export default function ProdutoPage() {
    const params = useParams();
    const dataProduto = {
        alface: {
            nome: 'Alface',
            imagem: '/images/assets/alface.png',
            preco: 3.50,
            seller: "Zé Quitandas",
            descricao: "Alface fresca e crocante, perfeita para saladas saudáveis e deliciosas. Cultivada localmente para garantir a melhor qualidade."
        },
        sapato: {
            nome: 'Sapato',
            imagem: '/images/assets/sapato.png',
            preco: 54.60,
            seller: "Sapataria Benedito",
            descricao: "Sapato confortável e elegante, ideal para diversas ocasiões. Feito com materiais de alta qualidade para garantir durabilidade e estilo."
        },
        bolo: {
            nome: 'Bolo',
            imagem: '/images/assets/bolo.png',
            preco: 29.99,
            seller: "Doces Carla Maria",
            descricao: "Bolo caseiro delicioso, feito com ingredientes frescos e muito amor. Perfeito para aniversários, festas ou qualquer momento especial."
        },
        cebola: {
            nome: 'Cebola',
            imagem: '/images/assets/cebola.png',
            preco: 4.90,
            seller: "Feira da Vila",
            descricao: "Cebola saborosa e versátil, essencial para realçar o sabor de diversos pratos. Cultivada localmente para garantir frescor e qualidade."
        }
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
            <h1>{produto.nome}</h1>
            <article className={styles.produtoDetails}>
                <Image alt={produto.nome} src={produto.imagem} width={300} height={280}/>
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
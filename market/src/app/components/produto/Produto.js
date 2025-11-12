"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Produto.module.css";

const Produto = ({ produto }) => {
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
    return (
        <article className={styles.cards}>
            <Link key={produto.id} href={`/produtos/${produto.id}`} className={styles.produtoLink}>
                <Image alt={produto.nome} src={produto.imagem} width={150} height={140}/>
                <h2>{produto.nome}</h2>
                <p>{produto.seller}</p>
            </Link>
            {/* Botões fora do Link */}
            <article className={styles.quant_btns}>
                <button className={styles.minus_btn} onClick={decrease}>-</button> {/* Classe preventiva */}
                <p className={styles.buy_text}>
                    {quant == 0 ? "Selecione" : ("Comprar " + quant)}
                </p>
                <button className={styles.plus_btn} onClick={increase}>+</button> {/* Classe preventiva */}
            </article>
        </article>
    );
};

export default Produto;
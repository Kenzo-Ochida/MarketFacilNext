"use client"
import styles from "./page.module.css";
import Produto from "./components/produto/Produto";
import { useState, useEffect } from "react"; 

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const barcodes = [3608580128397, 5000157146298, 80177173, 3606760064350, 29149858, 20229030, 7622300336738, 4014400914696]

  for(let code in barcodes){
    useEffect(() => {
      console.log(barcodes[code])
          fetch(`https://world.openfoodfacts.net/api/v2/product/${barcodes[code]}`)
              .then((res) => res.json())
              .then((dado) => {
                  setProducts([dado.product])
                  setLoading(false)
              })
      }, []);
    }

  if (loading) return <p> Carregando Produtos... </p>

  return (
    <section>
      <h1 className={styles.title}>Bom te ver novamente!</h1>
      <article className={styles.main_content}>
        {products.map(produto => (
          <Produto key={produto.code} produto={produto}/>
        ))}
      </article>
    </section>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Produto from "./components/produto/Produto";
import { redirect } from 'next/navigation';

export default function Home() {
  // redirect('/cadastro');
  
  const produtos = [
    {id: 'alface', nome: 'Alface', imagem: '/images/assets/alface.png', preco: 3.50, seller: "Zé Quitandas"},
    {id: 'sapato', nome: 'Sapato', imagem: '/images/assets/sapato.png', preco: 54.60, seller: "Sapataria Benedito"},
    {id: 'bolo', nome: 'Bolo', imagem: '/images/assets/bolo.png', preco: 29.99, seller: "Doces Carla Maria"},
    {id: 'cebola', nome: 'Cebola', imagem: '/images/assets/cebola.png', preco: 4.90, seller: "Feira da Vila"}
  ];

  return (
    <section className={styles.main_content}>
      {produtos.map(produto => (
        <Produto key={produto.id} produto={produto}/>
      ))}
    </section>
  );
}

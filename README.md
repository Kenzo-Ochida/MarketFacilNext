# MarketFacilNext
# Componentes
## Header
### JS
![código js do header](./market/public/images/image.png)

O código em JS constrói o componente de Header a ser utilizado entre os itens e páginas relacionados à Home do Site. O Header redireciona para as páginas de Sobre, Pedidos e Cadastro (LogOut). O elemento da Logo redireciona para a Home.

### CSS
![código css do header](./market/public/images/image2.png)
![código css da responsividade do header](./market/public/images/image3.png)
O código CSS estiliza os elementos do Header, garantindo também a responsividade em uma tela menor.

## Roteamento
### Produtos e Cadastro

O roteamento da aplicação foi implementado utilizando o Next.js Router, permitindo uma navegação fluida entre as diferentes seções do site (dinâmico para os produtos):

- `/produtos`: Exibe o catálogo completo de produtos disponíveis
- `/produtos/[id]`: Página dinâmica que mostra os detalhes de um produto específico
- `/cadastro`: Formulário de registro para novos usuários (a ser definido como inicial)

O sistema de roteamento dinâmico do Next.js permite:
- Carregamento sob demanda das páginas
- URLs amigáveis e semânticas
- Navegação client-side para melhor performance
- Preservação do estado entre navegações

# Conhecimentos Adquiridos

## Uso de Hooks
## Uso componentes reutilizados (ex: Produto e Header)
## Navegação e uso de rotas com Link
## Não subir alterações na Main, apenas em branch 
## Roteamento Dinâmico
## Uso de API

# Explicações de Código

## src/app

### cadastro/page.js

Código:
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

Explicação:
useState: hook para criar variáveis reativas no React.
useRouter: hook do Next.js para navegar entre páginas.

Código:
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
const [erroEmail, setErroEmail] = useState("");

const router = useRouter();

Explicação: 
nome, email, senha → guardam os dados digitados.
erroEmail → guarda a mensagem de erro caso o email seja inválido.
router → usado para mudar de página depois do cadastro.

Código:
const validarEmail = (valor) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(valor);
};

Explicação:
Esta função recebe um texto e verifica se está no formato de e-mail usando regex.

regex.test(valor) retorna true ou false.

Código:
const handleEmailChange = (e) => {
  const valor = e.target.value;
  setEmail(valor);

  if (validarEmail(valor) || valor === "") {
    setErroEmail("");
  } else {
    setErroEmail("Por favor, insira um e-mail válido.");
  }
};


Explicação:
Dispara quando o usuário digita no campo de email.
Atualiza o estado do email (setEmail).
Valida o email:
Se for válido → remove mensagem de erro.
Se for inválido → mostra mensagem de erro.

Código:

const handleSubmit = (e) => {
  e.preventDefault();

  if (!nome || !email || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  if (erroEmail) {
    alert("Corrija o e-mail antes de continuar.");
    return;
  }

  router.push("/");
};


Explicação:
e.preventDefault(): evita o comportamento padrão do form (recarregar a página).

Verifica:

Se algum campo está vazio.
Se existe erro no e-mail.
Se tudo estiver certo → redireciona o usuário para a página / (home).

Código:
return (
  <div style={styles.container}>
    <h1 style={styles.titulo}>Cadastro</h1>

    <input
      type="text"
      placeholder="Nome"
      value={nome}
      onChange={(e) => setNome(e.target.value)}
      style={styles.input}
    />

Explicação:
Campo de nome controlado pelo estado nome.
Cada digitação altera o estado via setNome.

Código:
<input
  type="email"
  placeholder="Email"
  value={email}
  onChange={handleEmailChange}
  style={{
    ...styles.input,
    borderColor: erroEmail ? "red" : "#ccc",
  }}
/>
{erroEmail && <p style={styles.erro}>{erroEmail}</p>}

Explicação:
Usa o handleEmailChange para validar.
Se houver erro:
borda fica vermelha;
aparece a mensagem de erro.

### components/
### Header.js

Declarações iniciais

"use client";
import Link from "next/link"
import styles from "./header.module.css"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";


Explicação:

"use client" define que o componente será renderizado no lado do cliente.
Link é o componente do Next.js usado para navegação interna.
styles importa o arquivo CSS específico através de CSS Modules.
redirect foi importado, mas não é utilizado no código.
useRouter fornece acesso ao roteador para fazer redirecionamentos.
Definição do componente

const Header = () => {


Explicação:

Inicia a função que define o componente Header.
Configuração do roteador
const router = useRouter();


Explicação:

Cria uma instância do roteador, usada para mudar de página com router.push().
Função de logout

const handleLogout = () => {
    const confirmar = confirm("Quer mesmo sair?");
    if (confirmar) {
        router.push("/cadastro");
    }
};


Explicação:

Abre uma janela de confirmação.
Caso o usuário aceite, o sistema redireciona para a página de cadastro.
Estrutura do JSX

<header className={styles.header}>


Explicação:
O elemento header recebe a classe CSS definida no arquivo header.module.css.

Logo

<section className={styles.logo}>
    <Link href="/" className={styles.logoLink}>MarketFácil</Link>
</section>


Explicação:

O texto MarketFácil funciona como um link para a página inicial.
As classes aplicadas vêm do CSS Module.

Navegação

<nav className={styles.navLinks}>
    <Link href="/sobre" className={styles.navLink}>Sobre</Link>
    <Link href="/pedidos" className={styles.navLink}>Pedidos</Link>
    <Link href="/cadastro" className={styles.navLink} onClick={handleLogout}>Log-out</Link>
</nav>


Explicação:

Cada Link direciona para uma rota diferente.
O link Log-out chama handleLogout, que confirma e redireciona.
Exportação
export default Header;


Explicação:
Disponibiliza o componente para ser importado em outras partes da aplicação.

### produto/
### Proudto.js


Declarações iniciais

"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import styles from "./Produto.module.css";


Explicação: Estas importações preparam o componente para rodar no cliente, permitem navegação interna com Link, carregamento otimizado de imagens com Image, uso de estados com useState e aplicação de estilos com CSS Modules através de styles.

Declaração do componente

const Produto = ({ produto }) => {


Explicação: Define um componente funcional que recebe um objeto produto como propriedade, contendo os dados necessários para exibir o card.

Estado de quantidade

const [quant, setQuant] = React.useState(0);


Explicação: Cria uma variável de estado chamada quant, iniciando em 0, que controla a quantidade escolhida pelo usuário.

Função decrease

function decrease(){
    if(quant > 0){
        setQuant(quant - 1);
    }
}


Explicação: Diminui a quantidade apenas se ela for maior que zero, evitando valores negativos.

Função increase

function increase(){
    if(quant < 10){
        setQuant(quant + 1);
    }
}


Explicação: Aumenta a quantidade até o limite de 10, limitando o máximo selecionável.

Estrutura JSX

return (
    <article className={styles.cards}>


Explicação: O componente começa renderizando um card estilizado pelo CSS Module.

Link do produto

<Link key={produto.id} href={`/produtos/${produto.id}`} className={styles.produtoLink}>
    <Image alt={produto.nome} src={produto.imagem} width={150} height={140}/>
    <h2>{produto.nome}</h2>
    <p>{produto.seller}</p>
</Link>


Explicação: Exibe o produto como um link clicável que leva à página de detalhes. A imagem é otimizada pelo Next.js e os dados nome e seller são mostrados dentro do card.

Botões de quantidade

<article className={styles.quant_btns}>
    <button className={styles.minus_btn} onClick={decrease}>-</button>
    <p className={styles.buy_text}>
        {quant == 0 ? "Selecione" : ("Comprar " + quant)}
    </p>
    <button className={styles.plus_btn} onClick={increase}>+</button>
</article>


Explicação: Esta área fica fora do Link para evitar que botões acionem navegação. O botão de diminuir chama decrease, o de aumentar chama increase, e o texto muda dinamicamente conforme a quantidade selecionada.

Exportação

export default Produto;


Explicação: Torna o componente disponível para uso em outras partes da aplicação.

### produtos/[id]
### page.js

'use client';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { useParams } from 'next/navigation';
Explicação: O componente é executado no cliente, utiliza React, importa estilos via CSS Module, usa Image do Next para otimização de imagens e usa useParams para obter parâmetros da URL.

Definição do componente

js
Copiar código
export default function ProdutoPage() {
Explicação: Define o componente principal da página de produto, que será renderizado quando o usuário acessar a URL correspondente.

Obtendo o parâmetro da URL

js
Copiar código
const params = useParams();
Explicação: Recupera o parâmetro dinâmico da rota, permitindo identificar qual produto deve ser carregado.

Banco de dados interno

js
Copiar código
const dataProduto = {
    alface: {...},
    sapato: {...},
    bolo: {...},
    cebola: {...}
};
Explicação: Simula um banco de dados local contendo os produtos. Cada chave representa o ID usado na rota e contém nome, imagem, preço, vendedor e descrição.

Selecionando o produto

js
Copiar código
const produto = dataProduto[params.id];
Explicação: Busca dentro do objeto dataProduto o item cujo ID corresponde ao parâmetro da URL.

Estado de quantidade

js
Copiar código
const [quant, setQuant] = React.useState(0);
Explicação: Controla a quantidade selecionada pelo usuário para compra, iniciando em zero.

Funções de controle da quantidade

js
Copiar código
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
Explicação: decrease reduz a quantidade até o mínimo de zero e increase aumenta até o máximo de dez, garantindo limites válidos.

Estrutura principal da página

jsx
Copiar código
<section className={styles.produtoPage}>
Explicação: Envolve todo o conteúdo da página, aplicando os estilos principais definidos no CSS Module.

Título

jsx
Copiar código
<h1>{produto.nome}</h1>
Explicação: Exibe o nome do produto selecionado com base na URL.

Área de detalhes

jsx
Copiar código
<article className={styles.produtoDetails}>
Explicação: Agrupa imagem e informações do produto.

Imagem

jsx
Copiar código
<Image alt={produto.nome} src={produto.imagem} width={300} height={280}/>
Explicação: Exibe a imagem do produto usando a tag Image do Next para carregamento otimizado.

Informações do produto

jsx
Copiar código
<article className={styles.produtoInfo}>
    <p><span className={styles.bold_desc}>Vendido por:</span> {produto.seller}</p>
    <p><span className={styles.bold_desc}>Descrição:</span> {produto.descricao}</p>
    <p><span className={styles.bold_desc}>Preço: R$</span> {produto.preco.toFixed(2)}</p>
Explicação: Mostra vendedor, descrição e preço formatado com duas casas decimais.

Divisor

jsx
Copiar código
<hr/>
Explicação: Apenas separa visualmente informações do controle de quantidade.

Botões de quantidade

jsx
Copiar código
<article className={styles.quant_btns}>
    <button className={styles.minus_btn} onClick={decrease}>-</button>
    <p className={`${styles.buy_text} ${quant > 0 ? styles.active : ""}`}>
        {quant == 0 ? "Selecione" : ("Comprar " + quant)}
    </p>
    <button className={styles.plus_btn} onClick={increase}>+</button>
</article>
Explicação: Os botões permitem aumentar ou diminuir a quantidade. O texto muda dinamicamente conforme o valor do estado e recebe uma classe extra quando a quantidade é maior que zero, permitindo estilização diferente.


### Sobre/
### page.js

import Header from '../components/Header';
import styles from './page.module.css';

export default function Sobre() {
    return (
        <section className={styles.sobre}>
            <article>
                <h1>Sobre o MarketFácil</h1>
                <p>.</p><br></br>
            </article>
        </section>
    );
}

Explicação:
A função exporta uma página chamada Sobre.
Ela importa um componente de cabeçalho e uma folha de estilos.
O retorno usa uma tag section com uma classe vinda do módulo CSS.
Dentro da section existe um article.
O article contém um título e três parágrafos explicando o objetivo e a motivação do MarketFácil.
Cada parágrafo está separado com quebras de linha.

###layout.js


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
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}


Explicação:
importa o componente Header e o arquivo de estilos da página.
Também declara o objeto metadata contendo título e descrição usados pelo Next.js.
A função RootLayout recebe o conteúdo das páginas por meio de children.
O retorno monta a estrutura base da aplicação usando tags html e body.
Dentro do body o Header é renderizado antes do conteúdo dinâmico representado por children.

### page.js

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
    <section>
      <h1 className={styles.title}>Bom te ver novamente!</h1>
      <article className={styles.main_content}>
        {produtos.map(produto => (
          <Produto key={produto.id} produto={produto}/>
        ))}
      </article>
    </section>
  );
}



importa Image, Link, estilos e o componente Produto.
Cria o array produtos contendo objetos com id, nome, imagem, preço e vendedor.
A função Home retorna um section com um título estilizado.
Dentro de article o código percorre o array produtos usando map e renderiza um componente Produto para cada item, enviando o objeto produto como propriedade.

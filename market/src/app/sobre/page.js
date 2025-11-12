import Header from '../components/Header';
import styles from './page.module.css';

export default function Sobre() {
    return (
        <section className={styles.sobre}>
            <article>
                <h1>Sobre o MarketFácil</h1>
                <p>
                    O MarketFácil é uma aplicação web que funcionará como um marketplace voltado especificamente para autônomos, microempreendedores, feirantes e comerciantes independentes, como por exemplo, senhoras que vendem bolos caseiros ou produtores artesanais locais.
                </p><br></br>
                <p>A proposta surge da necessidade de democratizar o acesso ao comércio eletrônico, permitindo que pequenos vendedores, que muitas vezes não possuem conhecimento técnico ou recursos para criar sua própria loja online, possam divulgar e vender seus produtos de forma simples, rápida e eficiente. Ao oferecer uma plataforma acessível e intuitiva para pequenos comerciantes e autônomos, o projeto contribui diretamente para a geração de renda, o estímulo ao empreendedorismo e a valorização da economia comunitária. Muitos desses empreendedores dependem exclusivamente das vendas presenciais e enfrentam limitações para alcançar novos públicos. Com o MarketFácil, eles ganham visibilidade digital sem depender de grandes investimentos ou conhecimentos técnicos, promovendo a inclusão digital e ajudando a combater desigualdades sociais.</p><br></br>
                <p>O processo de ideação para o desenvolvimento do MarketFácil teve como ponto de partida a observação direta e o contato próximo com pequenos comerciantes locais, como feirantes e senhoras que vendem bolos caseiros em bairros da comunidade. Essa aproximação permitiu compreender as dificuldades enfrentadas por esses empreendedores, especialmente no que diz respeito à limitação de alcance das vendas. A partir dessa vivência, surgiu a motivação de criar uma solução tecnológica que pudesse auxiliar esses comerciantes a expandirem seus negócios de forma prática e inclusiva, valorizando suas produções e fortalecendo o comércio local.</p><br></br>
            </article>
        </section>
    );
}
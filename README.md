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
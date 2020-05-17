<p align="center">
   <img src="https://avatars3.githubusercontent.com/u/44270804?s=200&v=4" width="200"/>
</p>

# Goomer Lista Rango

---

- [Tecnologias](#Tecnologias)
- [🚀 Desafios](#🚀-Desafios)
- [💡 Melhorias](#💡-Melhorias)
- [📦 Arquitetura](#📦-Arquitetura)
- [👨🏽‍🍳 Instalação](#👨🏽‍🍳-Instalação)

Demo: https://goomer-lista-rango.netlify.app/

# Tecnologias

- Typescript
- React
- Styled Components
- Commitzen (Padronização de commits)

# 🚀 Desafios

- Implementar uma estrutura respeitando os os patterns de services e repositories.
- Tive dificuldade para efetuar as tipagens com as interfaces e uma leve perda de desempenho, mas ao final, obtive um grande auxilio do typescript para passar propriedades para os Componentes.

# 💡 Melhorias

- Acredito que poderia melhorar as funções de manipulaçao de data, utilizando-se mais o date-fns.
- A responsividade pode ser aprimorada.
- Caso implementasse a funcionalidade de adicionar ao carrinho, optaria por utilizar Redux com a Arquitetura Flux.

# 📦 Arquitetura

```shell
src/
|-- assets/ # Contém os arquivos que agregam na interface da aplicação.
|-- components/ # Contém os components globais como Accordion e Header.
|-- config/ # Configurações de conexão a api e serviços externos.
|-- enums/ # Onde ficam todas as listas de constantes.
|-- interfaces/ # Onde são declarados os tipos de dados e funções.
|-- pages/ # Localiza as paginas da aplicação.
|-- repositories/ # Onde é feito a ponte entre a aplicação e a fonte de dados.
|-- routes/ # Todas as rotas da aplicação.
|-- services/ # Onde estão regras de negócio.
|-- styles/ # Diretório dos estilos globais.
|-- utils/ # Onde é abstraido lógicas reutilizaveis.
```

# 👨🏽‍🍳 Instalação

**Você vai necessitar instalar o [Node.js](https://nodejs.org/en/download/) e [Yarn](https://yarnpkg.com/), então clone o repo, utilizando este comando:**

`git clone git@github.com:marcosdissotti/goomer-lista-rango.git`

**Instale as dependências do projeto:**

`yarn`

Para rodar o projeto em ambiente de desenvolvimento, utilize o comando:

`yarn start`

---

Contato: marcosdissotti@gmail.com

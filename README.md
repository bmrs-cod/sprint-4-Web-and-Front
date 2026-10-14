# JOVI — Modo Estudante | Sprint 4

**Challenge JOVI — FIAP**

Projeto desenvolvido para as disciplinas de **Front-End Design e Web Development**, como parte da Sprint 4.

## 1. Sobre o projeto

O JOVI — Modo Estudante é uma solução para ajudar estudantes a organizarem suas fotos de materiais escolares por matéria.

A proposta surgiu da dificuldade de encontrar imagens de quadros, exercícios e anotações que acabam misturadas com outras fotos do celular.

Este projeto é uma evolução da Landing Page desenvolvida na Sprint 3, agora utilizando React e oferecendo uma demonstração funcional da solução.

## 2. Tecnologias utilizadas

- React 18
- Vite 5
- JavaScript e JSX
- HTML5 e CSS3
- Tailwind CSS 3
- React Router DOM 6
- Git e GitHub
- Vercel
- API simulada utilizando JSON e Fetch API

## 3. Funcionalidades

O projeto possui uma Landing Page com apresentação da solução, público-alvo, galeria, equipe e contato.

Também possui uma área demonstrativa com as seguintes funcionalidades:

- Login demonstrativo.
- Rotas públicas e privadas.
- Seleção de matérias escolares.
- Upload de imagens do dispositivo.
- Organização de fotos por matéria.
- Visualização e exclusão de imagens.
- Armazenamento das fotos no navegador.
- Layout responsivo para desktop, tablet e celular.

## 4. Estrutura do projeto

```text
JOVI-Sprint-4/
├── public/
│   └── data/
│       └── materias.json
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── SubjectCard.jsx
│   ├── hooks/
│   │   └── useLocalStorage.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Estudante.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── INTEGRANTES.txt
├── README.md
├── package.json
├── vite.config.js
├── tailwind.config.js
└── vercel.json
```

## 5. Instalação e execução

É necessário ter o Node.js e o npm instalados.

Primeiramente, clone o repositório:

```bash
git clone https://github.com/bmrs-cod/sprint-4-Web-and-Front.git
```

Entre na pasta do projeto:

```bash
cd sprint-4-Web-and-Front
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra o endereço informado pelo terminal, normalmente:

http://localhost:5173/

Para gerar a versão de produção:

```bash
npm run build
```

Para testar a versão de produção localmente:

```bash
npm run preview
```

## 6. Usuário e senha para testes

Para acessar a Área do Estudante, utilize:

**Usuário:** aluno

**Senha:** jovi123

A autenticação é demonstrativa e funciona diretamente no front-end. Não deve ser utilizada para proteger informações sensíveis.

## 7. Rotas do projeto

| Rota | Descrição |
|---|---|
| `/` | Landing Page |
| `/login` | Página de login |
| `/estudante` | Área demonstrativa protegida |

A rota `/estudante` exige que o usuário tenha realizado o login demonstrativo.

## 8. API utilizada

O projeto utiliza uma API simulada local, armazenada no arquivo:

`public/data/materias.json`

Os dados das matérias são carregados utilizando `fetch()` e `useEffect()`.

Não é necessário instalar ou executar um servidor back-end separado. O Vite disponibiliza o arquivo JSON durante o desenvolvimento e a Vercel disponibiliza o mesmo arquivo no site publicado.

Não existem chaves de API ou tokens necessários para executar o projeto.

## 9. Hooks e componentização

O projeto utiliza componentes React para organizar o código e facilitar a manutenção.

O componente `SubjectCard`, por exemplo, recebe informações das matérias através de props.

Também são utilizados:

- **useState:** gerenciamento de estados, formulários e seleção de matérias.
- **useEffect:** carregamento dos dados da API e sincronização do armazenamento.
- **useLocalStorage:** hook personalizado responsável por armazenar e recuperar informações no navegador.

As fotos ficam armazenadas no `localStorage`, permanecendo disponíveis após atualizar a página, desde que os dados do navegador não sejam apagados.

O limite por imagem é de aproximadamente 1,2 MB, e a capacidade total depende do navegador.

## 10. Utilização de inteligência artificial

A inteligência artificial foi utilizada como ferramenta de apoio durante o desenvolvimento do projeto.

O ChatGPT auxiliou na migração do projeto original para React, na organização dos componentes, na implementação das rotas, no desenvolvimento da galeria de imagens e na estruturação da documentação.

O código foi executado e testado durante o desenvolvimento, com verificações de login, upload de imagens, persistência de dados, responsividade e compilação.

A equipe é responsável por compreender, revisar e apresentar o funcionamento da solução.

## 11. Publicação do projeto

O projeto está disponível no GitHub e publicado na Vercel.

**GitHub:**

https://github.com/bmrs-cod/sprint-4-Web-and-Front

**Vercel:**

https://sprint-4-web-and-front.vercel.app/

A publicação utiliza o repositório GitHub conectado à Vercel.

Configurações de compilação:

- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

## 12. Observações

O projeto tem finalidade acadêmica e demonstrativa.

O login não utiliza autenticação por servidor, o formulário de contato não envia mensagens reais e as fotos são armazenadas somente no navegador utilizado.

A solução demonstra o conceito do Modo Estudante e não representa uma integração direta com a câmera nativa de um smartphone.

## 13. Integrantes

**Bruno Marcelo Real e Silva** — RM 569785

**Luiz Ademario** — RM 571182

**Lucas Gaspar** — RM 568616

**Gustavo Noleto** — RM 569592

**Victor Godoy** — RM 571454

## 14. Entrega

Projeto desenvolvido para a Sprint 4 das disciplinas Front-End Design e Web Development da FIAP.

A entrega conjunta inclui o código-fonte, o arquivo README.md, o arquivo INTEGRANTES.txt e os demais arquivos necessários para executar a aplicação.

O projeto também está disponibilizado através do repositório GitHub e do deploy na Vercel.

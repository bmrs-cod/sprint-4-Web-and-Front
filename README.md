# JOVI – Modo Estudante | Sprint 4

Projeto FIAP × JOVI desenvolvido para as disciplinas **Front-End Design** e **Web Development**. É uma evolução da Landing Page da Sprint 3, agora em React, com demonstração da organização de fotos por matéria.

## Tecnologias

- React + Vite
- React Router (rotas públicas e rota privada de demonstração)
- Tailwind CSS (layout responsivo para desktop, tablet e celular)
- JavaScript, JSX, HTML e CSS
- API simulada local em `public/data/materias.json`, consumida usando `fetch`
- `useState`, `useEffect` e hook customizado `useLocalStorage`

## Instalação e execução

1. Instale o Node.js 18 ou superior.
2. Abra o terminal na pasta do projeto (onde está o `package.json`).
3. Execute:

```bash
npm install
npm run dev
```

4. Abra o endereço exibido no terminal (normalmente `http://localhost:5173`).

Para testar a compilação:

```bash
npm run build
npm run preview
```

## Páginas e funcionalidades

- `/` — Landing Page com solução, público-alvo, galeria, equipe e contato (mantidas da Sprint 3).
- `/login` — login **simulado**, sem servidor.
- `/estudante` — rota privada demonstrativa para listar matérias, carregar imagens do computador, filtrar, visualizar e excluir fotos.
- O menu funciona em celulares.
- As matérias vêm de uma API local mockada (`public/data/materias.json`), por requisição `fetch` e `useEffect`.
- Os cartões de matérias são componentes que recebem `props`.
- `useLocalStorage` é o hook personalizado que salva dados no navegador.

## Usuários e senhas para teste

- Usuário: `aluno`
- Senha: `jovi123`

**Importante:** são credenciais de teste fixas no front-end. A rota privada é apenas uma demonstração didática, não oferece segurança real. Não há back-end nem banco de dados. As fotos são armazenadas no `localStorage` do próprio navegador (até 1,2 MB por imagem; o espaço total depende do navegador). Use imagens pequenas. Ao limpar os dados do navegador, as fotos são perdidas. O formulário de contato também é demonstrativo e não envia e-mail.

## Servidor / API

Não é necessário iniciar outro servidor. O Vite serve automaticamente o JSON em `public/data/materias.json` durante desenvolvimento. A Vercel também disponibiliza esse recurso na publicação. Não existem chaves ou tokens.

## Uso de inteligência artificial

Foi utilizada IA como apoio na migração do HTML/CSS/JS da Sprint 3 para React, na divisão em componentes, na implementação de rotas e no desenvolvimento da demonstração de galeria. A equipe é responsável por revisar, compreender e testar o código entregue.

## Deploy — GitHub + Vercel

1. Crie um repositório no GitHub e envie o código (não envie `node_modules`).
2. Na Vercel, escolha **Add New Project** e importe o repositório.
3. Framework: **Vite**. Build Command: `npm run build`. Output Directory: `dist`.
4. Publique e teste os endereços `/`, `/login` e `/estudante`.
5. Preencha os links reais abaixo antes da entrega.

**Repositório Git:** PREENCHER_APOS_PUBLICAR

**Deploy Vercel:** PREENCHER_APOS_PUBLICAR

## Integrantes

Consultar `INTEGRANTES.txt`, obrigatório na raiz do arquivo ZIP.

## Entrega

Entregar um único ZIP com código-fonte, `README.md`, `INTEGRANTES.txt` e demais arquivos. Informar o link do GitHub e o link da Vercel ao professor. Apenas um integrante deve enviar a entrega para ambas as disciplinas.

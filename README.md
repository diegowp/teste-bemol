## Bemol - DBSP

Principais tecnologias e bibliotecas:

- VitesJS
- ReactJS
- Firebase
- Bootstrap
- Axios
- StyledComponents

## Sobre o projeto

O projeto é uma simples autenticação utilizando como provedor de autenticação a API do Google. Consequentemente abre um grande leque de integrações com qualquer serviço Google que permita essa comunicação.
Por exemplo: Google Drive, Google Agenda, YouTube, etc.

Como solicitado, foi inserido um formulário para preenchimento do endereço, utilizando a API disponibilizada pela ViaCep.

Os dados são armazenados no serviço "[Realtime Database](https://firebase.google.com/docs/database?authuser=0&hl=pt)" oferecido de forma gratuita pelo Firebase.
Esse modelo de armazenamento é um Banco de Dados em nuvem NoSQL.

## Instalação

Para instalar:

```bash
git clone https://github.com/diegowp/teste-bemol.git
```

Navegar para a pasta do projeto:

```bash
cd teste-bemol
```

Instalar dependências:

```bash
npm install
```

Executar o projeto:

```bash
npm run dev
```

Deverá receber a seguinte mensagem ou similar:

```bash
> bemol-app@0.0.0 dev
> vite
  VITE v3.2.4  ready in 613 ms
  ➜  Local:   http://127.0.0.1:3000/
```

O projeto poderá ser acessado pelo endereço:

```bash
http://localhost:3000 ou http://127.0.0.1:3000
```

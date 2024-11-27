# **PROPOSTA DE ATIVIDADE - DESENVOLVIMENTO PARA PLATAFORMA WEB**

## **Descrição**
Este é um **sistema de gestão de usuários**, onde os usuários podem **se cadastrar**, **fazer login**, **editar seus dados** e **excluir sua conta**. A aplicação utiliza **MongoDB** para armazenar os dados dos usuários e **JWT (JSON Web Tokens)** para autenticação e autorização.

## **Funcionalidades**

### **Cadastro de Usuário:**
- O usuário pode se cadastrar informando **nome**, **e-mail** e **senha**.

### **Login:**
- Usuários podem fazer login usando **e-mail** e **senha**.
- Após o login, um **token JWT** é gerado e usado para autenticação.

### **Tela Administrativa:**
- O **e-mail** do usuário logado é exibido na tela administrativa.
- O usuário pode acessar e visualizar seus dados.

### **Edição de Dados:**
- O usuário pode **editar seu nome**, **e-mail** e **senha**.
- Após a atualização, o usuário é redirecionado para a **página de login**.

### **Exclusão de Conta:**
- O usuário pode **excluir sua conta**, removendo seus dados do banco de dados.

## **Tecnologias Utilizadas**

- **Frontend**: **HTML**, **CSS**, **JavaScript**
- **Backend**: **Node.js**, **Express**
- **Banco de Dados**: **MongoDB**
- **Autenticação**: **JWT (JSON Web Token)**
- **Bibliotecas**: **Axios** (para requisições HTTP)

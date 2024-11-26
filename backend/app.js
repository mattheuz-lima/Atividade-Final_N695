const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Carrega as variáveis do arquivo .env

// Conectar ao MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado ao MongoDB com sucesso!');
}).catch((err) => {
  console.error('Erro ao conectar ao MongoDB:', err.message);
});

// Inicializa o servidor
const app = express();
app.use(bodyParser.json()); // Permite processar JSON no corpo da requisição
app.use(cors()); // Permite comunicação entre front-end e back-end

// Modelo do Usuário
const User = mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
}));


// ROTA PARA CADASTRAR O USUARIO NO BANCO DE DADOS MONGO DB

app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save(); // Salva no banco de dados
    res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});


/* ROTA PARA VERIFICAR DADOS CADASTRADOS E PERMITIT LOGIN*/

const jwt = require('jsonwebtoken'); // Para gerar o token

// Rota de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Verifica se o usuário existe com o e-mail fornecido
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'E-mail ou senha inválidos' });
    }

    // Compara a senha fornecida com a senha no banco
    if (user.password !== password) {  // Comparando a senha em texto simples
      return res.status(400).json({ message: 'E-mail ou senha inválidos' });
    }

    // Se as senhas coincidirem, gera um token JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Retorna o token para o frontend
    res.json({ message: 'Login bem-sucedido!', token });
  } catch (error) {
    res.status(500).json({ message: 'Erro no login. Tente novamente!' });
  }
});

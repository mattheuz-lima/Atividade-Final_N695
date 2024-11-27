// Função para alternar o menu suspenso
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Função para editar perfil
function editarPerfil() {
    alert("Redirecionando para a edição de perfil...");
    // Redirecionar para página de edição
}

// Função para excluir usuário
function excluirUsuario() {
    if (confirm("Tem certeza que deseja excluir este usuário?")) {
        alert("Usuário excluído com sucesso!");
        // Aqui seria integrado com backend
    }
}

// O login.js deve estar salvando o token JWT no localStorage

//  Decodificar o token JWT e exibir o e-mail do usuário.

// Função para decodificar o token JWT
function decodificarToken(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

function exibirEmailUsuario() {
    const token = localStorage.getItem("authToken");
    if (token) {
        const decoded = decodificarToken(token);
        const email = decoded.email;  // Agora temos o email no token
        const userMenu = document.querySelector('.user-menu');
        const emailDisplay = document.createElement('p');
        emailDisplay.textContent = `Bem-vindo, ${email}!`;
        emailDisplay.classList.add('email-usuario');  // Classe para estilizar
        userMenu.appendChild(emailDisplay);

    }
}


exibirEmailUsuario();

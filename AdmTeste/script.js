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

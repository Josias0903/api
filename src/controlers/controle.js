function listarDados(request, response) {
    response.send('retorno')
}
function gravarDados(request, response){
    response.send('Metodo utilizado para salvar informações')
}
function atualizarDados(request, response) {
    response.send('Metodo utilizado para editar informações')
}
function deletarDados(request, response){
    responde.send('Metodo utilizado para deletar informações')
}
module.exports = {
    listarDados,
    gravarDados, 
    deletarDados, 
    atualizarDados
}
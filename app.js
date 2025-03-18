let listaAmigosSorteados = [];
let amigoDelUsuario = "";
let listaAmigos = document.getElementById("listaAmigos");

function agregarAmigo() {
    //Guarda en una variable el nombre del amigo del usuario
    amigoDelUsuario = document.getElementById('amigo').value;
    if (amigoDelUsuario == "") {
        window.alert("Por favor, inserte un nombre");
            
    } else {
        //Agrega el nombre del amigo del usario a una lista
        listaAmigosSorteados.push(amigoDelUsuario);
        limpiarCaja();
        actualizarLista();    
    }
}

function actualizarLista(){
    listaAmigos.innerHTML = "";   
    //Recorre la lista de amigos sorteados
    for (let i = 0; i < listaAmigosSorteados.length; i++) {
        // Crear un nuevo elemento <li>
        let item = document.createElement("li");
        // Asignar el nombre del amigo como texto al <li>
        item.textContent = listaAmigosSorteados[i];
        // Agregar el <li> a la lista <ul>
        listaAmigos.appendChild(item);    
    }
}

function sortearAmigo () {
    if (listaAmigosSorteados.length > 0 ) {
        let indiceAleatorio = Math.floor(Math.random() * listaAmigosSorteados.length);
        let amigoSorteado = listaAmigosSorteados[indiceAleatorio];
    
        document.getElementById("resultado").innerHTML = amigoSorteado;
    }

}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}
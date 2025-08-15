console.log("Começou");

var names = [];


document.getElementById('buttonAdd').addEventListener('click', verifyName);
document.getElementById('buttonAdd').addEventListener('click', updateList);

document.getElementById('buttonRemove').addEventListener('click', remove);
document.getElementById('buttonRemove').addEventListener('click', updateList);

document.getElementById('buttonDraw').addEventListener('click', draw);
document.getElementById('buttonRemove').addEventListener('click', updateList);


function verifyName() {
    let name = document.getElementById("name").value.trim(); 

    if (name.length > 0) {
        names.push(name);
        limparCampo();
        console.log(names);
    } else {
        alert("Por favor, insira um nome.");
    }
}

function remove() {
    let name = document.getElementById("name").value.trim();

    if (name.length > 0) {
        let index = names.indexOf(name); // procura no array

        if (index !== -1) {
            names.splice(index, 1); // remove pelo índice
            limparCampo();
            updateList();
            console.log(names);
        } else {
            alert(`O nome ${name} não foi encontrado na lista.`); // crases
        }
    } else {
        alert("Por favor, insira um nome.");
    }
}


function limparCampo() {
    document.getElementById('name').value = '';
}

function updateList() {
    var ol = document.getElementById("nameList");
    ol.innerHTML = "";

    for (var i = 0; i < names.length; i++) {
        var li = document.createElement("li");
        li.textContent = names[i];
        ol.appendChild(li);
    }
}

function draw(){
    if (names != ""){
    let chosenName = names[Math.floor(Math.random() * names.length)];
    console.log(chosenName);

}else{
    alert("Digite pelo menos dois nomes.");
}
}

updateList();   
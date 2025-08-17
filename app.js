console.log("Começou");

var names = [];

document.getElementById('buttonAdd').addEventListener('click', verifyName);
document.getElementById('buttonAdd').addEventListener('click', updateList);

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

function limparCampo() {
    document.getElementById('name').value = '';
}

function updateList() {
    var ul = document.getElementById("nameList");
    ul.innerHTML = "";

    for (var i = 0; i < names.length; i++) {
        var li = document.createElement("li");
        li.textContent = names[i];
        ul.appendChild(li);
    }
}

updateList();   
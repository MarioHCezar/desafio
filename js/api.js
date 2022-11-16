const urlGet =
  "http://www.ksamochvalov.com/academia/listarClientes.php?matricula=F6938539";
const urlPost = "http://www.ksamochvalov.com/academia/inserirCliente.php";
const urlDelete = "http://www.ksamochvalov.com/academia/removerCliente.php";
const urlPatch = "http://www.ksamochvalov.com/academia/AtualizarCliente.php";

const getButton = document.querySelector(".get-button");

let xhr = new XMLHttpRequest();

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Some API is going on");

  let json = JSON.stringify({
    nome: form.name.value,
    data_nascimento: form.birthday.value,
    renda: form.income.value,
    cpf: parseInt(form.cpf.value.replace(/\D/g, "")),
    matricula: "F6938539",
  });

  xhr.open("POST", urlPost);
  xhr.send(json);
});

function getData() {
  xhr.open("GET", urlGet);
  xhr.addEventListener("load", () => {
    let response = xhr.responseText;
    let clients = JSON.parse(response);
    clients.forEach((client) => {
      addClient(client);
    });
  });
  xhr.send();
}

getButton.addEventListener("click", getData());

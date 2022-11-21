const urlGet =
  "http://www.ksamochvalov.com/academia/listarClientes.php?matricula=F6938539";
const urlPost = "http://www.ksamochvalov.com/academia/inserirCliente.php";
const urlDelete = "http://www.ksamochvalov.com/academia/removerCliente.php";
const urlPatch = "http://www.ksamochvalov.com/academia/AtualizarCliente.php";

const getButton = document.querySelector(".get-button");

let xhr = new XMLHttpRequest();
let clientArray = [];

//Insere dados no Banco
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

//Busca dados no Banco
function getData() {
  xhr.open("GET", urlGet);
  xhr.send();
  xhr.addEventListener("load", () => {
    let response = xhr.responseText;
    let clients = JSON.parse(response);
    cpfTd = document.createElement("td");
    clients.forEach((client) => {
      addClient(client);
      clientArray.push(client.id);
      clientArray.forEach((client) => {
        cpfTd.classList.add(`"${client.id}"`);
      });
    });
  });
}

getButton.addEventListener("click", getData());

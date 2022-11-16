const tdName = document.querySelector(".name");
const tdCPF = document.querySelector(".cpf");
const tdBirthday = document.querySelector(".birthday");
const submitButton = document.querySelector(".form-button");
const form = document.querySelector("#add-form");
const inputName = document.querySelector("#name");
const newRow = document.querySelector(".new-row");
const date = new Date();
const currentYear = date.getFullYear();

let clients;
let tdIncome;
let minimalIncome = 1212;
let tdTotal = document.querySelector(".total");

function addClient(client) {
  clients = document.querySelectorAll(".client");
  tdIncome = document.querySelectorAll(".income");

  let myYear = client.data_nascimento.substring(0, 4);
  let clientTr = document.createElement("tr");

  const nameTd = document.createElement("td");
  const cpfTd = document.createElement("td");
  const ageTd = document.createElement("td");
  const incomeTd = document.createElement("td");

  nameTd.textContent = client.nome;
  cpfTd.textContent = client.cpf;
  ageTd.innerHTML = parseInt(currentYear) - parseInt(myYear);
  incomeTd.textContent = `R$ ${parseFloat(client.renda).toFixed(2)}`;

  let total = parseFloat(client.renda);
  for (let i = 0; i < tdIncome.length; i++) {
    total += parseFloat(tdIncome[i].innerHTML.replace("R$ ", ""));
  }
  tdTotal.innerHTML = `R$ ${parseFloat(total).toFixed(2)}`;

  clientTr.classList.add("client");
  nameTd.classList.add("name");
  cpfTd.classList.add("cpf");
  ageTd.classList.add("age");
  incomeTd.classList.add("income");

  clientTr.appendChild(nameTd);
  clientTr.appendChild(cpfTd);
  clientTr.appendChild(ageTd);
  clientTr.appendChild(incomeTd);

  if (client.renda < minimalIncome) {
    clientTr.classList.add("slave");
  }

  newRow.appendChild(clientTr);
}

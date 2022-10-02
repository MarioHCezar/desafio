const tdName = document.querySelector('.name');
const tdCPF = document.querySelector('.cpf');
const tdBirthday = document.querySelector('.birthday');
const tdIncome = document.querySelector('.income');
const submitButton = document.querySelector('.form-button');
const form = document.querySelector('#add-form');
const inputName = document.querySelector('#name');
const newRow = document.querySelector('.new-row');
const date = new Date();
const currentYear = date.getFullYear();
let somatorio = document.querySelectorAll(".income");


submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    const name = form.name.value;
    const cpf = form.cpf.value;
    const birthday = form.birthday.value;
    const income = form.income.value;
    const myYear = birthday.substring(0, 4);


    const clientTr = document.createElement('tr');

    const nameTd = document.createElement('td');
    const cpfTd = document.createElement('td');
    const ageTd = document.createElement('td');
    const incomeTd = document.createElement('td');

    nameTd.textContent = name;
    cpfTd.textContent = cpf;
    ageTd.innerHTML = parseInt(currentYear) - parseInt(myYear);
    incomeTd.textContent = `R$ ${income},00`;

    clientTr.appendChild(nameTd);
    clientTr.appendChild(cpfTd);
    clientTr.appendChild(ageTd);
    clientTr.appendChild(incomeTd);

    newRow.appendChild(clientTr);

    document.querySelector(".total").innerHTML = parseInt(income += income);

    console.log(name);
    console.log(cpf);
    console.log(birthday);
    console.log(income);
    console.log(clientTr);

});

// submitButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log(form.name.value);

// });
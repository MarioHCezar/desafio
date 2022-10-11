const tdName = document.querySelector('.name');
const tdCPF = document.querySelector('.cpf');
const tdBirthday = document.querySelector('.birthday');
const submitButton = document.querySelector('.form-button');
const form = document.querySelector('#add-form');
const inputName = document.querySelector('#name');
const newRow = document.querySelector('.new-row');
const date = new Date();
const currentYear = date.getFullYear();

let clients;
let tdIncome;
let minimalIncome = 1212;
let tdTotal = document.querySelector('.total');

console.log(clients);


submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    clients = document.querySelectorAll('.client');
    tdIncome = document.querySelectorAll('.income');

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
    incomeTd.textContent = `R$ ${parseFloat(income).toFixed(2)}`;

    let total = parseFloat(income);
    for (let i = 0; i < tdIncome.length; i++) {
        total += parseFloat(tdIncome[i].innerHTML.replace("R$ ", ""));
    }
    tdTotal.innerHTML = `R$ ${parseFloat(total).toFixed(2)}`;

    clientTr.classList.add('client');
    nameTd.classList.add('name');
    cpfTd.classList.add('cpf');
    ageTd.classList.add('age');
    incomeTd.classList.add('income');

    clientTr.appendChild(nameTd);
    clientTr.appendChild(cpfTd);
    clientTr.appendChild(ageTd);
    clientTr.appendChild(incomeTd);

    newRow.appendChild(clientTr);

    // console.log(name);
    // console.log(cpf);
    // console.log(birthday);
    // console.log(income);
    // console.log(clientTr);

    if (income < minimalIncome) {
        clientTr.classList.add('slave')
    }


});





function mask(o, f) {
    v_obj = o
    v_fun = f
    setTimeout("execmask()", 1)
}

function execmask() {
    v_obj.value = v_fun(v_obj.value)
}

function maskcpf(v) {
    v = v.replace(/\D/g, "");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    return v;
}

function idcss(el) {
    return document.getElementById(el);
}

window.onload = function () {

    idcss('cpf').setAttribute('maxlength', 14);
    idcss('cpf').onkeypress = function () {
        mask(this, maskcpf);
    }


}
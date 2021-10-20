const task3Element = document.getElementById('task-3');

function one() {
    alert('Olá mundo!');
}

function two(name) {
    alert('Olá ' + name);
}

function three(name, lastname, age) {
    return `Ola ${name}  ${lastname} Feliz ${age}  de idade!`;
}

one();
two('Brazil');

task3Element.addEventListener('click', one);
alert(three('Alex', 'Canario', 47));
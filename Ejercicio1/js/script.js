function getRandom(){
    let start = document.getElementById('num1').value;
    let end = document.getElementById('num2').value;
    document.getElementById('number').innerHTML = 'Los numeros random son: ' + getRandomBetween(parseInt(num1), parseInt(num2));
}

function getRandomBetween(num1, num2){
    return Math.floor(Math.random() * (num2 - num1 +1)) + num1;
}
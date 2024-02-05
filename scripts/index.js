
function DeterminateUser() {
    let age = prompt('Enter the age');

    if (age < 0) {
        alert('Wrong value');
        return;
    }

    if (age < 12) {
        alert('Child');
    }
    else if (age < 18) {
        alert('Teenager');
    }
    else if (age < 60) {
        alert('Adult');
    }
    else {
        alert('Pensioner');
    }
}

function KeyboardMapper() {
    let key = prompt('Press the key (1 - 0');

    switch (key) {
        case '1':
            alert('!');
            break;
        case '2':
            alert('@');
            break;
        case '3':
            alert('#');
            break;
        case '4':
            alert('$');
            break;
        case '5':
            alert('%');
            break;
        case '6':
            alert('^');
            break;
        case '7':
            alert('&');
            break;
        case '8':
            alert('*');
            break;
        case '9':
            alert('(');
            break;
        case '0':
            alert(')');
            break;
        default:
            alert('Wrong key!');
            break;
    }
}

function NumChecker() {
    let num = prompt('Enter the three-digit number');

    if (num < 100 || num > 999) {
        alert('Wrong number');
        return;
    }

    let numArr = num.toString().split();

    if (numArr[0] == numArr[1] || numArr[0] == numArr[2] || numArr[1] == numArr[2])
        alert('The number contains the same digits');
}

function LeapYearChecker() {
    let year = prompt('Enter the year');

    if (year < 0) {
        alert('Wrong number');
        return;
    }

    ((year % 400 == 0 || year % 4 == 0) && year % 100 != 0) ?
        alert(year + ' is leap') :
        alert(year + ' isn`t leap');
}

function Palindromator(){
    let num = prompt('Enter the five-digit number');

    if (num < 10000 || num > 99999) {
        alert('Wrong number');
        return;
    }

    if (num == num
        .toString()
        .split("")
        .reverse()
        .join()
        .replaceAll(",", ""))
        {
            alert(num + " is a palindrom");
        }
        else{
            alert(num + " is not a palindrom");
        }
}

document.addEventListener("DOMContentLoaded", () => {

    // 1 
    // DeterminateUser();

    // 2 
    // KeyboardMapper();

    // 3
    // NumChecker();

    // 4
    // LeapYearChecker();

    // 5
    // Palindromator();
})


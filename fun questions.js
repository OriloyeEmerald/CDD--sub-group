       1.
  let userScore = prompt('enter your score');
  userScore = parseFloat(userScore);
  console.log(typeof userScore);

  if(userScore >= 70 && userScore <= 100) {
    alert('A');
}
else if(userScore >= 60 && userScore <= 69) {
    alert('B');
}
else if(userScore >= 50 && userScore <= 59) {
    alert('C');
}
else if(userScore >= 40 && userScore <= 49) {
    alert('D');
}
else if(userScore >= 0 && userScore <= 39) {
    alert('F');
}
else {
    alert('invalid score')
}
 
        2.
    let num = 4;

    if(num > 0) {
        console.log('num is positive');
    }
    if(num < 0) {
        console.log('num is negative');
    }
    if(num === 0) {
        console.log('num is zero');
    }
         
         3.
     let timeInt = 12;

       switch(true) {
          case timeInt >= 0 && timeInt <= 20:
            console.log('red');
            break;

          case timeInt >= 21 && timeInt <= 25:
            console.log('yellow');
            break;

          case timeInt >= 26 && timeInt <= 30:
            console.log('green');
            break;

            default:
                console.log('rainbow');
       }
       
    4.
let val1 = 4;
let val2 = 8

switch('/') {
    case '+':
        console.log(val1 + val2);
        break;
    case '-':
        console.log(val1 - val2);
        break;
    case '*':
        console.log(val1 * val2);
        break;
    case '/':
        console.log(val1 / val2);
        break;
    default:
        console.log('invalid operator');
}

    5.
let month = 6;

switch(0) {
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default:
        console.log('not a month');
}


    6.
let age = 15;

age === 21 
? console.log('You are eligible to vote') 
: console.log(`You've ${21 - age} years left to eligible`);

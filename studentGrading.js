const prompt = require('prompt-sync')();
let marks = parseInt(prompt("Enter Student's Marks:" )) //prompt the user for marks
const grade=grading();

if(marks < 0 || marks > 100){ //checks the value entered by the use if is a number between >=0 and <=100
    console.log('Please enter marks in the range (0 to 100)')
    return;
}
else if (isNaN(marks)){
    console.log('Please enter marks in the range (0-100)')
    return;
}else 
return console.log(grade);
// //Function for grading marks from the user input
function grading() {
    
    if(marks>=80){ 
        return 'Grade: A';
    }
    else if (marks>=60 && marks<80){
        return 'Grade: B';
    }
    else if (marks>=50 && marks<60){
        return 'Grade: C';
    }
    else if (marks>=40 && marks<50){
        return 'Grade: D';
    }
    else if (marks<40){
        return 'Grade: E';
    }
    }
 
    
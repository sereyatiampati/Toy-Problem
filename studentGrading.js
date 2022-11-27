function grading() {
    let marks = parseInt(prompt("Enter Student's Marks:" ))
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
    console.log(grading ());
    
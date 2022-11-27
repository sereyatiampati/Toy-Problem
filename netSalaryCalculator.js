const prompt = require('prompt-sync')();
const salary= parseInt(prompt("Enter your Monthly Basic Salary: "))
const benefits= parseInt(prompt("Enter the total of your Monthly Benefits: "))
const personalRelief= 2400;
const grossIncome= salary + benefits;
const MonthlytaxDeduction = paye();
const MonthlyNhifDeduction= nhif();
const monthlyNssfDeduction= nssf();
const totalDeductions= MonthlytaxDeduction + MonthlyNhifDeduction + monthlyNssfDeduction;
const netSalary= grossIncome- totalDeductions;
console.log('Your monthly Gross Salary is '+ grossIncome);
console.log('Your monthly PAYE is '+ MonthlytaxDeduction);
console.log("Monthly NHIF Deduction is " + MonthlyNhifDeduction)
console.log('Monthly NSSF Deduction is '+ monthlyNssfDeduction);
console.log('Your Net Salary is '+ netSalary);



function paye(){
if (grossIncome> 0 && grossIncome <=24000){
    return ("PAYE is chargeable to person's of employement Income of 24,000 and above. You are exempted!");
}
else if (grossIncome>24000 && grossIncome<=32333){
    let first= parseInt(24000*0.1)
    let next=parseFloat((grossIncome-24000)*0.25)
    let totaltax=first+next-personalRelief;
    return totaltax
}
else if (grossIncome>32333){
    let first= parseInt(24000*0.1)
    let next=parseFloat(8333*0.25) 
    let above= parseFloat((grossIncome-32333)*0.3);
    let totaltax=first+next+above-personalRelief;
    return totaltax
}
}

function nhif(){
    let nhifDeduction;
    if (grossIncome<6000){
        nhifDeduction=150;
        return nhifDeduction
    }
    else if (grossIncome>=6000 && grossIncome<8000){
        nhifDeduction=300;
        return nhifDeduction
    }
    else if (grossIncome>=8000 && grossIncome<12000){
        nhifDeduction=400;
        return nhifDeduction
    }
    else if (grossIncome>=12000 && grossIncome<15000){
        nhifDeduction=500;
        return nhifDeduction
    }
    else if (grossIncome>=15000 && grossIncome<20000){
        nhifDeduction=600;
        return nhifDeduction
    }
    else if (grossIncome>=20000 && grossIncome<25000){
        nhifDeduction=750;
        return nhifDeduction
    }
    else if (grossIncome>=25000 && grossIncome<30000){
        nhifDeduction=850;
        return nhifDeduction
    }
    else if (grossIncome>=30000 && grossIncome<35000){
        nhifDeduction=900;
        return nhifDeduction
    }
    else if (grossIncome>=35000 && grossIncome<40000){
        nhifDeduction=950;
        return nhifDeduction
    }
    else if (grossIncome>=40000 && grossIncome<45000){
        nhifDeduction=1000;
        return nhifDeduction
    }
    else if (grossIncome>=45000 && grossIncome<50000){
        nhifDeduction=1100;
        return nhifDeduction
    }
    else if (grossIncome>=50000 && grossIncome<60000){
        nhifDeduction=1200;
        return nhifDeduction
    }
    else if (grossIncome>=60000 && grossIncome<70000){
        nhifDeduction=1300;
        return nhifDeduction
    }
    else if (grossIncome>=70000 && grossIncome<80000){
        nhifDeduction=1400;
        return nhifDeduction
    }
    else if (grossIncome>=80000 && grossIncome<90000){
        nhifDeduction=1500;
        return nhifDeduction
    }
    else if (grossIncome>=90000 && grossIncome<100000){
        nhifDeduction=1600;
        return nhifDeduction
    }
    else if (grossIncome>=100000 ){
        nhifDeduction=1700;
        return nhifDeduction
    }
}

function nssf(){
    const nssfDeduction= grossIncome*0.06;
    return nssfDeduction
}

const prompt = require('prompt-sync')();
const salary= parseInt(prompt("Enter your Monthly Basic Salary: "))
const benefits= parseInt(prompt("Enter the total of your Monthly Benefits: "))
const personalRelief= 2400;
const grossIncome= salary + benefits

function paye(){
if (grossIncome> 0 && grossIncome <=24000){
    console.log("PAYE is chargeable to person's of employement Income of 24,000 and above. You are exempted!")
}
else if (grossIncome>24000 && grossIncome<=32333){
    let first= parseInt(24000*0.1)
    let next=parseFloat((grossIncome-24000)*0.25)
    let totaltax=first+next-personalRelief;
    console.log(`Tax is ${totaltax}`)
}
else if (grossIncome>32333){
    let first= parseInt(24000*0.1)
    let next=parseFloat(8333*0.25) 
    let above= parseFloat((grossIncome-32333)*0.3);
    let totaltax=first+next+above-personalRelief;
    console.log(`Tax is ${totaltax}`)
}
}
const payetax= paye();
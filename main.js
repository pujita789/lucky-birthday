const dateOfBirthday=document.querySelector("#date-of-birthday");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const displayMessage = document.querySelector(".container");


const calculateSum =  (date)=>{
  let sum = 0 ;
  date = date.replaceAll("-","");
  for (let digit of date){
    sum = sum +Number(digit);
  
  }
  return sum ;
};
 const checkNumIsLucky = (sumOfDateDigit , numToCheck)=>{
  console.log(sumOfDateDigit , numToCheck) ;
   if (sumOfDateDigit % numToCheck === 0){
     return showMessage(`${numToCheck} is a lucky number `);
   }
     return showMessage (`${numToCheck} is not a lucky number`);
   
 };

const showMessage = (message)=>{
  displayMessage.innerText = message;
};

checkNumber.addEventListener("click",()=>{
const date =dateOfBirthday.value;
  const numToCheck = luckyNumber.value;
  if (date&&numToCheck){
    const sum = calculateSum(date);
    checkNumIsLucky(sum , numToCheck);
  }else {
    showMessage("Please enter the both fields");
  } 
})
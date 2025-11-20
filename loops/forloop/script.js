

// const input = prompt("enter any number");

// if (input > 0) {
//     console.log("The value is positive",input);
// } else if (input < 0){
//     console.log("The value is negative",input);
// }else{
//     console.log('The value is zero ',0);
    
// }


// for (let a = 1 ; a < 11 ; a++){
//     if (a%2 === 0) {
//         console.log("Number is Even", a);
//     }else{
//         console.log("Number is Odd" , a);
//     }
// }

// let num = Number(prompt("enter n number for add" ));
// let sum = 0;

// for(let a = 1 ; a <= num ; a++){
//     sum += a;
// }
// console.log("the sum of natural numbers is" , sum);


// let num = Number(prompt("enter number"))

// for(let i = 1; i <= 10 ; i++){
//     console.log(`${num}X${i}=${i*num}`);
    
// }


// let year = Number(prompt("Enter year"))

// if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
//     console.log("The year is leap year",year);
// }else{
//     console.log("The year is not a leap year",year);
// }



// 90–100 → A
// 80–89  → B
// 70–79  → C
// 60–69  → D
// Below 60 → Fail

// const grade = 1000;

// if (grade >= 90 && grade <=100 ) {
//     console.log("grade A");
// }else if (grade >= 80 && grade <=89 ){
//     console.log("grade B");
// }else if (grade >= 70 && grade <=79 ){
//     console.log("grade c");
// }else if (grade >= 60 && grade <=69 ){
//     console.log("grade D");
// }else if (grade < 60){
//     console.log("Failed !");
// }else{
//     console.log('invalid grade');
// }




// for (let i = 1 ; i <= 20; i++){
//     if (i%2 === 0) {
//         console.log(i);
        
//     }
// }



// let i = 10;

// while( i > 0){
//     console.log("num" , i);
//     i--
// }


// for (let i = 10; i> 0 ; i--){
//     console.log(i);
    
// }


// for(let i = 1 ; i< 6 ; i++){
//     console.log("yes");
    
// }


// for(let i = 1; i<11 ; i++){
//     if (i%2 === 0) {
//         console.log("even",i)
//     }else{
//         console.log("Odd",);
        
//     }
// }


// let num = prompt("Enter number");

// if (num > 0) {
//     console.log("Positive number",num);
// }else if(num < 0){
//     console.log('Negative number' ,num);
// }else{
//     console.log("Invalid number");
    
// }


// let age = prompt("Enter age");
// if (age === null) {
//     console.error("you pressed cancel")
// }else if(age.trim() === '' || isNaN(age)){
//     console.log("You have to  Write age  ....",age);
// }else if((Number(age)) >= 18){
//     console.log("Eligible for vote",age);
// }else if (isNaN(age)) {
//     console.log("Characters not allowed !" );
// } else{
//     console.log("Not eligible for vote",age);
// }



// let ask;

// while (true) {
//   ask = prompt("Say yes ... until type stop");
  
//   if (ask.toLowerCase() === "stop") {
//     break;
//   }

//   console.log("yes");
// }
//     console.log(`You typed ${ask.length} times`);


// let num = Number(prompt("enter number"))

// for(let i = 1; i <= 10 ; i++){
//     console.log(`${num}X${i}=${i*num}`);
    
// }

// let count = []

// for (let i = 1; i <16 ; i++){
//  if (i > 8) {
//   count.push(i)
//  } 
// }
// console.log("Geater numbers are",count);


// const password = '12345678'
// let askPass = prompt("Enter password");

// if (password.trim === '') {
//   console.error("Password is required!")
// }else{
//   if (askPass === password) {
//     console.log("You can access the status");
//   }
// }



// const password = "12345678";
// let attempts = 0;
// let flg = false;

// let askPass = prompt("Enter password");

// while (askPass !== password) {
//   attempts++;

//   if (attempts >= 3) {
//     console.log("Account locked");
//     break;
//   }

//   askPass = prompt("Wrong password. Try again:");
// }

// if (askPass === password) {
//   flg = true;
//   console.log("Account logged in!");
// }


// let world = prompt("Ernter world");
// let counter =0

// while(world !== 'stop'){
//   if(world === "yes"){
//     counter++;
//   }
//   world = prompt("Ernter world");
// }

// console.log("Total time of yes" , counter);



// let num = []
// for ( let i = 1; i<=51; i++){
//   if(i%7 === 0){
//     num.push(i);
//     console.log("i" ,i);
    
//   }
// }

// console.log("Number which divisible by 7" , num);

// let sum = 0
// for (let i = 1; i <= 31 ; i++){
//   if (i%2 !== 0) {
//     sum +=i;
//     console.log("These are odd number",i); 
//   }
// }

// console.log("Sum of all odd numbers is",sum);



// let num = Number(prompt("enter number"));

// while(num % 2 !==0 ){
//   num = Number(prompt("enter number"));
//   break;
// }


// let start = Number(prompt("enter starting number"))
// let end = Number(prompt("enter ending number"))


// for (let i = start; i <= end ; i++){
//   console.log(i);
  
// }


// let counter = 0
// let ask = Number(prompt("enter number!"))
// for (let i = 1; i <=5 ;i++){
//   if (i % 2 === 0) {
//     counter++;
//     console.log("Positive number" , i);
    
//   }
//   ask = Number(prompt("enter number!"))
// }

// console.log("Total counter is",counter);



// let counter = 0;
// let balance = 1000;

// while (counter < 3) {
//   let ask = Number(prompt("Enter withdrawal amount:"));
//   counter++;

//   if (counter === 3) {
//     console.log("You have only 3 chances! Account temporarily locked.");
//     break; // successful, so stop
//   }

//   if (ask > balance) {
//     console.log("You don't have this much balance!");
//   } else if (ask <= balance) {
//     balance -= ask;
//     console.log(`Withdrawal successful! Remaining balance is ₹${balance}`);
   
//   }

  
// }



//  recurson
// const abcd = (n) =>{
//   if (n === 0) {
//     return;
//   }
//   console.log("number" , n);
//   abcd(n-1);
// }

// abcd(5)

func()

let func = ()=>{
  console.log("hello")
}
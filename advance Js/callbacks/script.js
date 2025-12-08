// function greetUser(name,cb){
//     console.log(`hello ${name}`);
//     cb('Welcome to js!');
// }


// greetUser('shizuka',function(msg){
//     console.log("good bye");
    
// })



// function waitAndExecute(cb){
//     setTimeout(()=>{
//         console.log("Task complete!");
//         cb({message : "data from callback"})
//     },2000)
// }

// waitAndExecute(function(msg){
//     if (msg) {
//         console.log('Next task is runninng!')
//     }else{
//         console.log('No callback received');
        
//     }

// })



// function fetchUser(id,cb){
//     setTimeout(() => {
//         if (id ===1) {
//             cb({id : 1,name : "shizuka"})
//         } else{
//             cb("User not found" , null)
//         }
//     }, 2000);
// }


// fetchUser(1,function(err,data){
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(data); 
//     }
// })

// fetchUser(3,function(err,data){
//     if (err) {
//         console.log(err);
//     }else{
//         console.log(data); 
//     }
// })



// callback hell example

// function getData(cb1){
//     cb1(
//         console.log("Fetching....")
//     )
// }

// function processData(cb2){
//     cb2(
//         console.log("Processing......")
        
//     )
// }

// function saveData(cb3){
//     cb3(
//         console.log("Data saving....")
//     )
// }



// getData(function(){
//     processData(function(){
//         saveData(function(){
//             console.log('Data saved!');
//         })
//     })
    
// })





function customMap(arr ,cb){ 
    let result = [];
    for(let i = 0 ; i< arr.length ; i++){
        let value = cb(arr[i]);

        if (value !== undefined && value !== null) {
            result.push(value);
        }else{
            result.push("Invalid value");
        }
    }

    return result;
}

const numbers = [1, 2, 3, 4, 5];

let cust1 = customMap(numbers , (num) => num*2); // [2,4,6,8,10]
console.log(cust1);

let cust2 = customMap(numbers , (num) => {
    if (num % 2 ===0) return;
    })
console.log(cust2);

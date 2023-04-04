//create a promise with promise object
//it willl conatin a call function with two parameter resolve and reject
let borrowedMoney = 10000

let promise = new Promise((resolve , reject) => {

    setTimeout(() => {
    resolve(10700); //kept my promise
    // reject(new Error("i lied , you are not getting your money back"))//this will reflect to error message  
    } ,3000  ) // represent two days
});


// promise.then((money)=>{
    
//     console.log("yay! i got my money back");
    
//     return money
// }, error =>{
//     console.error(error.message);
// })


promise.then((money)=>{
    
    console.log("yay! i got my money back");
    
    return money  
}) .then(moneyReceived)
.then(extramoney => {
  if (extramoney){
  console.log("wow my friend is generous and i can buy many thng with this extra money " , extramoney);
}
 console.log("deposit the landed amount back to the bank");
})
.catch(error=>{
 console.error(error.message)
 }).finally(()=>{
    console.log("it will be called irrespective of the outcome");
 })


 function moneyReceived(amountReceived)
{
    return new Promise((resolve , reject) =>
    {
        if (amountReceived > borrowedMoney)
        {
            resolve(amountReceived-borrowedMoney)
        }
        else if(amountReceived < borrowedMoney)
        {
            reject(new Error("wait i have not received the total money"))
        }
        else
        {
            resolve(0)
        }
    })
}
   
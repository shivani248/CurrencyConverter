document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#currency-convertor").addEventListener("submit",(event)=>{
    event.preventDefault();

    const {target:{from , to , amount}} = event;
    let myHeaders = new Headers();
    myHeaders.append("apikey", "UzlatMt4ZWC2YxpmTmQNarjwGmRWmvnF");
    
    const requestOptions={
        method:"GET",
        headers:myHeaders
        } 

    fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
    .then(response => response.json())
    .then(data => {

        // {
        //     "success": true,
        //     "query": {
        //         "from": "EUR",
        //         "to": "INR",
        //         "amount": 2
        //     },
        //     "info": {
        //         "timestamp": 1667321643,
        //         "rate": 81.428158
        //     },
        //     "date": "2022-11-01",
        //     "result": 162.856316
        // }
        let {info , date , query:{to} , result } = data;
        document.querySelector(".output").textContent=`As per the exchange rate : ${info.rate.toFixed(2)} for ${date} => converted value in ${to} is ${result.toFixed(2)}`;}  )
    .catch(error =>console.log(error.message))

    })
})




// document.addEventListener("DOMContentLoaded",()=>{
//     document.querySelector("#currency-convertor").addEventListener("sumbit",(event)=>{
//      event.preventDefault(); //so that website can not refresh on submit
     
//      const {target:{from,to,amount}} = event; //we are destructuring the event and picking the ppty in which we are interested
//      //API key
//      let myHeaders = new Headers();
//      myHeaders.append("apikey", "UzlatMt4ZWC2YxpmTmQNarjwGmRWmvnF");
     
//      const requestOptions=//it is obj that tells us that what we want to do like we want to fetch info
//         { 
//         method:"GET", // TO FETCH http info
//         headers: myHeaders, //api request has a header and we have a api key we need to pass that key in order to access the services of api
//         }
    
//      fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)//using url to call the external convertor function API
//      .then( response => response.json()) // as response converted into obj we can finally get the entire data
//      .then(data => console.log(data))
//      .catch (error =>console.log(error.message));
//      })
//  })    
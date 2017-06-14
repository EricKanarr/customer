// console.log("talking");// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element


(function (){

  'use strict';

  // Your Code Goes Here

  for (let i = 0; i < 12; i++){
    fetch('https://randomuser.me/api/')
    .then(
      function(response){
       if (response.status !== 200){
         console.log('looks like there is a ghost in the machine. status code: ' +
         response.status);
         return;
  }
  response.json().then(function(data){
    
  })
}
)
)

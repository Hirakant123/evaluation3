
var store = [
    {name: "Laptop", price: 75000, rating: 4.5},
    {name: "Tablet", price: 30000, rating: 4.2},
    {name: "Smartphone", price: 60000, rating: 4.7},
    {name: "Smartwatch", price: 20000, rating: 3.9}
];

function storeAnalysis (store){

let storeArray = store.slice();

 storeArray.filter(function(ele,name) {
     return ele===name
 })

  
    
 
}

console.log(storeAnalysis (store))
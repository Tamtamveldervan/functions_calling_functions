const checkAge = function(age) {
    if (age>=18) {console.log ("Hello there")
        
    } else {console.log ("Hey kiddo")};
        
}
 


const checkIfAdult = function (){
   checkAge(7);
}

checkIfAdult()




//VAT Calculations deel 1 - bereken totaalprijs

const vatAmount = function (price, percentage){
    return price*percentage
}


const totalPrice = function () {
    const price = 100
    return vatAmount (100, 0.21)+price
    
}

console.log(totalPrice())

const priceAndVat = function () {
    const percentage = 1.21
    return [totalPrice(100,0.21)/percentage, vatAmount(100,0.21)]
}

console.log(priceAndVat())
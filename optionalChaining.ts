type Customer = {
    birthday : Date
};

function getCustomer(id : number): Customer | null | undefined{
    return id === 0 ? null : { birthday: new Date()};
}

let customer =  getCustomer(1);
// if(customer !== null && customer !== undefined)
//OR
//use Optional property access operator
    console.log(customer?.birthday) 
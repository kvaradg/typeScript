//UNION TYPE (|) -> can be used to set a variable or a parameter of many types(number, string, boolean, enum, etc)

function kgToLbs(weight : number | string | boolean): number | boolean {
   
    //cannot identify whether it is number or string
    //so use concept of narrowing
    if(typeof weight === 'number') 
        return weight * 2.2
    else if(typeof weight === 'string')
        return parseInt(weight) * 2.2
    else
    return true
}

kgToLbs(10);
kgToLbs('10kg');
kgToLbs(true);

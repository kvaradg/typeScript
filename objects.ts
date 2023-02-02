// let employee : {
//     id:number,
//     name?:string
// } = {id:1};

// employee.name = "Mr. abc"

//Setting optional value

// let employee : {
//     id:number,
//     name?:string
// } = {id : 1, name : "Mr. abc"};


//Setting Readonly property -> does not allow to modify particular value

// let employee : {
//     readonly id:number,
//     name?:string
// } = {id : 1, name : "Mr. abc"};

// employee.id = 2


//Functions in Objects

// let employee : {
//     id : number,
//     name : string,
//     retire : (date: Date) => void
// } = {
//     id : 0o1,
//     name : "Mr. XYZ",
//     retire : (date : Date) => {
//         console.log(date)
//     } 
// }
//In order to create different objects we need to write the code again and again 
//To aviod this and follow DRY principle we user "type areas"

//TYPE Areas
type Employee = {
    id : number,
    name : string,
    retire : (date : Date)  => void 
}

let employee : Employee = {
    id : 1,
    name : "Mr. ASD",
    retire : (date : Date) => {
        console.log(date)
    }
}

let employee_1 : Employee = {
    id : 2,
    name : "Mr. ASDF",
    retire : (date : Date) => {
        console.log(date)
    }
}

let employee_2 : Employee = {
    id : 3,
    name : "Mr. ASDFG",
    retire : (date : Date) => {
        console.log(date)
    }
}
function greet(name : string | null | undefined){
    if(name)
        console.log(name.toUpperCase())
    else
        console.log("OMG")
}

greet("Good Morning");
greet(null);
greet(undefined);
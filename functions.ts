function taxCalculator(income : number, taxYear: number): number{
    if(taxYear < 2023)
        return income * 1.2;
            return income * 1.5
}

taxCalculator(50_000,2022)


// function taxCalculator(income : number, taxYear?: number): number{ //? -> will make it optional
//     if((taxYear || 2023) < 2023)
//         return income * 1.2;
//             return income * 1.5
// }

// taxCalculator(50_000)
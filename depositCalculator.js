function depositCalculato (input) {
    let depositsum = Number(input[0]);
    let depositlenght = Number(input[1]);
    let yearlyinterest = Number(input[2]);
    let interestdecimal = yearlyinterest / 100;


    let calc = depositsum + depositlenght * ((depositsum * interestdecimal) / 12)
    console.log (calc)
}

depositCalculato([200, 3, 5.7])
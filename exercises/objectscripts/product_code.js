function generatePartCode(partInformation) {
    return `${partInformation.supplierCode}:${partInformation.productNumber}-${partInformation.size}`;
}


function parsePartCode(partCode) {
    //supplierCode:productNumber-size;
    let colonPostion = partCode.indexOf(':');
    let dashPostion = partCode.indexOf("-");


    let supplierCode = partCode.substring(0, colonPostion);
    //  'XYX:1234-L'
    //  'DAL:3456-S'

    let partNumber = partCode.substring(colonPostion + 1, dashPostion); 
    console.log(partNumber);
    let partSize = partCode.substring(dashPostion + 1)

    let partInformation = {
        supplierCode: supplierCode,
        productNumber: partNumber,
        size: partSize,
    };
    return partInformation;
}

let partCode1 = "XYZ:1234-L";
let partInformation = parsePartCode(partCode1);

console.log(partInformation)
console.log(generatePartCode(partInformation));

// let partCode1 = "XYZ:1234-L";
// let part1 = parsePartCode(partCode1);
// console.log(
//   "Supplier: " +
//     part1.supplierCode +
//     " Product Number: " +
//     part1.productNumber +
//     " Size: " +
//     part1.size
// );
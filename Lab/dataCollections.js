// console.log("hello world")

// let numOfRows = 0;

// console.log(csv.length)

// for (let i = 0; i <= (csv.length-1); i++){

// }

// Part 1

let csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";
const rows=csv.split("\n")
console.log(csv)

// Part 2

const cells=[];
for(let row of rows)
cells.push(row.split(","))

// console.log(cells[0],cells[1],cells[2],cells[3])

let superCell = [cells[0],cells[1],cells[2],cells[3],cells[4]];

console.log(superCell)

// Part 3

let obj1 = {
    id: superCell[1][0],
    name: superCell[1][1],
    occupation: superCell[1][2],
    Age: superCell[1][3]
}

let obj2 = {
    id: superCell[2][0],
    name: superCell[2][1],
    occupation: superCell[2][2],
    Age: superCell[2][3]
}
let obj3 = {
    id: superCell[3][0],
    name: superCell[3][1],
    occupation: superCell[3][2],
    Age: superCell[3][3]
}
let obj4 = {
    id: superCell[4][0],
    name: superCell[4][1],
    occupation: superCell[4][2],
    Age: superCell[4][3]
}

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)
// console.log(obj4)

let arrObject = [obj1,obj2,obj3,obj4]

console.log(arrObject)

// Part 4

arrObject.pop();
// let newObject = {
//     id: "48",
//     name: "Barry",
//     occupation: "Runner",
//     age: "25"
// }

// arrObject.make ={
//     id: "48",
//     name: "Barry",
//     occupation: "Runner",
//     age: "25"
// }


arrObject[1]= { 
    id: "48", 
    name: "Barry", 
    occupation: "Runner", 
    Age: "25" 
}

arrObject.push({ 
    id: "7", 
    name: "Bilbo", 
    occupation: "None", 
    Age: "111" 
})

console.log(arrObject);

let total = 0
for (const obj of arrObject){
    console.log(obj.Age);
    total += Number(obj.Age)

    let average = total / arrObject.length;
}
console.log("total: " + total);

let average = total / arrObject.length;

console.log("average: " + average);

// Part 5

for (const obj of arrObject) {
  csv += `${obj.id},${obj.name},${obj.occupation},${obj.Age}\n`;
}

console.log(csv);



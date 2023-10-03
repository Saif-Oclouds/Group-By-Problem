function groupByKey(arr, key){
    return arr.reduce((acc, currentValue)=>{
        if(!acc[currentValue[key]]){
            acc[currentValue[key]] = []
        }
        acc[currentValue[key]].push(currentValue)
        return acc
    },{})
}

const dataArray = [
    {id:1, name:"Bilal", city:"Lahore"},
    {id:1, name:"Bilal", city:"Lahore"},
    {id:3, name:"Hafsa", city:"Karachi"},
    {id:4, name:"Rehan", city:"Lahore"},
    {id:5, name:"Saqib", city:"Karachi"},
    {id:6, name:"Farhan", city:"Islamabad"}
];

const groupedDataByCity = groupByKey(dataArray, 'city'); // Group by 'city'

console.log(groupedDataByCity);
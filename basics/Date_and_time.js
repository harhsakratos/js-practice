//dates

let myDate = new Date(2023,4,12)


console.log(myDate.toDateString())

myDate.toLocaleString('default',{
    weekday:'long'
})
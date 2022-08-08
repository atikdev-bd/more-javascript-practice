//remove duplicate name of array////

function removeDuplicateName(numbers){
let changeNames = [];
    for(let i = 0; i < numbers.length; i++){
     const name = numbers[i];
     if(changeNames.includes(name) === false){
        changeNames.push(name)
    }

     


    }
    return changeNames;

}
const names =['abul', 'babul', 'sibul', 'kabul', 'siplu','abul', 'babul', 'sibul', 'kabul', 'siplu','abul', 'babul', 'sibul', 'kabul', 'siplu']
const uniqueNames = removeDuplicateName(names)
console.log(uniqueNames);
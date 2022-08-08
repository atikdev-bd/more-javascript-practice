//* 1 to 50 er modhe*///

//1. if the number is divisible by both 3 then instead or the number show 'foo'//
//1. if the number is divisible by both 7 then instead or the number show 'foo'//
//1. if the number is divisible by both 3 and 5  then instead or the number show 'foobar'//

for(let i = 1; i <= 50; i++ ){
    if (i % 3 === 0 && i % 5 ===0){
    console.log('foobar')
    }
    else if (i % 5 === 0){
    console.log('foo')
    }
    else if (i % 3 === 0){
    console.log('foo')
    }
    else{ 
        console.log(i)
    }

}
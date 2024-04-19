/* 
Write a program to print table of 3 like below.

3*1=3=3
3*2=3+3=6
3*3=3+3+3=9
.
.
.
3*10=3+3+3+3+3+3+3+3+3+3=30
*/ 

for(let i=1; i<=10; i++){
    let str_3 = "3";
    let sum = 3;
    for (let j=1; j<i; j++){
        str_3 += " + 3";
    }
    sum *= i;
    console.log(`3 * ${i} = ${str_3} = ${sum}`);
}
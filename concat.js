function concat(n)
{

let arr=[];
let j=1;
while (n>0)

{
    let num=prompt("enter the number of elements in array "+j+":");
    for(var i=0;i<num;i++)
    {
        let input=prompt("enter the element"+(i+1)+":");
        arr.push(input);
        
    }
    n--;
    j++;
}
return arr;
}
let n=prompt("Enter the number of arrays: ");
console.log(concat(n))

function oddeven(n)
{  
   
     let sum=0;
    while(n>0)
    {   
         
        rem=n%10;
         sum=sum+rem;
         n = Math.floor(n / 10);
    }

    if(sum%2==0)
    {
        return "Evenish";
    }
    else
    {
        return "Oddish";
    }
}
let n=prompt("Enter the Number :");
console.log(oddeven(n));

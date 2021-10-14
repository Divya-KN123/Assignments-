let array=[1,2,3,4,5];
var sum1=0;
for(var i=0;i<array.length;i++)
{
    sum1=sum1+array[i];
}
var max1=Math.max(1,2,3,4,5);

function sumandMax()
{
    let find=[
        {Sum: sum1},
        {Max:  max1}];
   return find; 
}
    let results=sumandMax();
    console.log(results);
   

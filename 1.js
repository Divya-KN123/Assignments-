
var n=6;
function buildPyramid(n)
{
  var str='',i,j,k;

  for(i=1;i<=n;i++)
  {
    for(k=1;k<=n-i;k++)
     {
      str= str+"\t";
     }
  for(j=1;j<=i;j++)
     {
    str= str +"*\t\t";
     }
  console.log(str);
   str ="";
  }
}
buildPyramid(n);


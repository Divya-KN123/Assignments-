
let M1=Math.floor(Math.random()*100);
let M2=Math.floor(Math.random()*100);
let M3=Math.floor(Math.random()*100);
let S1=(M1<=50) ?'Fail' : 'Pass';
let S2=(M2<=50) ?'Fail' : 'Pass';
let S3=(M3<=50) ?'Fail' : 'Pass';

function studentRecord()
{
    let arr=[
    { subject : 'Mathematics', marks : M1, status: S1 },
    { subject : 'Physics', marks: M2,status: S2 },
    { subject : 'Chemistry', marks: M3, status: S3 }];
        
      return arr;
    }
        let results1=studentRecord();
        console.table(results1);







var newArray=[];
var a=[{"tm_number":"9724084103","tm_name": "PRADIP BHAI","zsm_number": "9974252013","zsm_name": "Jay Ambe1 Communicati","zbm_number": "1234567890",
"zbm_name": "ARIF MALEK","ceo/sales_head/marketing_head_number": "9898049452","zone_name": "Surat",
"circle_name": "Gujarat","category": "Challenger"},{"tm_number": "9724084103","tm_name": "PRADIP duplicate","zsm_number": "9974252013",
"zsm_name": "Jay Ambe1 Communicati","zbm_number": "1234567890","zbm_name": "ARIF MALEK","ceo/sales_head/marketing_head_number": "9898049452","zone_name": "Surat",
"circle_name": "Gujarat","category": "Challenger"},{"tm_number": "9724084105","tm_name": "PRADIP BHAI",
"zsm_number": "9974252013","zsm_name": "Jay Ambe Communicati","zbm_number": "1234567890","zbm_name": "ARIF MALEK","ceo/sales_head/marketing_head_number": "9898049452","zone_name": "Surat",
"circle_name": "Gujarat","category": "Challenger"},{"tm_number": "972484103","tm_name": "SK BHAI","zsm_number": "9974252013","zsm_name": "Jay Ambe 3 Communicati","zbm_number": "1234567890",
"zbm_name": "ARIF MALEK","ceo/sales_head/marketing_head_number": "9898049452","zone_name": "Surat","circle_name": "Gujarat","category": "Challenger"}, {"tm_number": "972484103",
"tm_name": "SK BHAI","zsm_number": "9974252013","zsm_name": "Jay Ambe 3 Communicati","zbm_number": "1234567890","zbm_name": "ARIF MALEK","ceo/sales_head/marketing_head_number": "9898049452","zone_name": "Surat", "circle_name": "Gujarat", "category": "Challenger"
}];
var b = JSON.parse(JSON.stringify(a));
for(i=0;i<a.length;i++)
{
    if(a[i]["tm_number"])
    {       
        var tnumber_Value=a[i]["tm_number"];
       var values=[];
       var key="tm_number";
        delete b[i][key];
       values.push(Object.assign({},b[i]));
       
          
    } 
    for( j=i+1;j<a.length;j++)
    {
    
        if(a[j]["tm_number"]==tnumber_Value)
        {
            var key="tm_number";
            delete b[i][key];
            values.push(Object.assign(b[j]));         
        }
       
    }
    if(i>0)
    {
        var count=0;
    for(k=0;k<newArray.length;k++)
    {
        var newArrayKey=Object.keys(newArray[k]);
        var newArrayKeyInString=newArrayKey[0];
    if(newArrayKeyInString!=a[i]["tm_number"])
    {
        count++;
    }
    }
    if(count==newArray.length)
    {        
    newArray.push({[a[i]["tm_number"]] : values});
    }
    }
    else{  
        
        newArray.push({[a[i]["tm_number"]]:values});
    }

}

console.log(newArray);
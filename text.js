var compare_dates = function(date1,date2){
    if (date1>date2) return ("Date1 > Date2");

  else if (date1<date2) return ("Date2 > Date1");
  
  else return ("Date1 = Date2"); 
 }

console.log(compare_dates(new Date(), new Date('11/14/2228')));
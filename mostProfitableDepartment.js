function mostProfitableDepartment(salesData1){
    var DeptMap = {};
    for(var i=0; i<salesData1.length; i++){
      var DepProfit = salesData1[i];
      DeptMap[DepProfit.department]=0;
      //console.log(DeptMap);
    }
    for(var i=0; i<salesData1.length; i++){
      var DepProfit = salesData1[i];
      var DeptSales = DeptMap[DepProfit.department];
      DeptSales += DepProfit.sales;
      DeptMap[DepProfit.department] = DeptSales;
       //console.log( DeptMap)
    
    }
    var maxSales = 0;
    var currentSales = '';
    for(var highestSales in  DeptMap) {
      var totalSales = DeptMap[highestSales];
      if(totalSales > maxSales) {
        maxSales = totalSales;
        currentSales = highestSales;
      }
    }
    //console.log(DeptMap)
     return currentSales;  
  }
 
  function mostProfitableDay(salesData2){
    var profitMap = {};
    for(var i=0; i<salesData2.length; i++) {
      var dayProfit = salesData2[i];
      profitMap[dayProfit.day]=0;
      //console.log(profitMap)
    }
    for(var i=0; i<salesData2.length; i++) {
      var dayProfit = salesData2[i];
      var dayMostProfit = profitMap[dayProfit.day];
      dayMostProfit += dayProfit.sales;
      profitMap[dayProfit.day] = dayMostProfit;
      //console.log(profitMap)
    }
    
    var MaxDayProf = 0;
    var currentDay = '';
    for(var highestDayProf in profitMap) {
      var maxDaily = profitMap[highestDayProf];
      if(maxDaily > MaxDayProf) {
        MaxDayProf = maxDaily ;
        currentDay = highestDayProf;
      }
    }
    return currentDay;
  }
 
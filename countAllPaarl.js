function countAllPaarl(paarl) {
    var total = paarl.split(",");
    console.log(total)
    var paarls = [];
    var counter = 0;
    
    
    for(var i = 0; i<total.length; i++) {
     // var totalReg = total[i].trim;
      if(total[i].includes('CJ')) {
        paarls.push(total[i].trim())
            counter ++;
            //return counter
        }
    }
    return  counter;
  
}
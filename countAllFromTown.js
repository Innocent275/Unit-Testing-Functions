function countAllFromTown(reg, string){
    var list = reg.split(",")
    var Towns = [];
     var counter = 0;
    for(var i =0; i<list.length; i++) {
      if(list[i].includes(string)) {
       
        Towns.push(list[i].trim());
         counter ++;
      
      }
    }
    return counter;
  
  }
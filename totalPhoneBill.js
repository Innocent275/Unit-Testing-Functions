function totalPhoneBill(bill){
    let totalCost = 0;
    const billSplit = bill.split(',')
    for(var i=0; i<billSplit.length; i++)
      if(billSplit[i].includes('call')){
           totalCost +=2.75 ;
      
      }else if(billSplit[i].includes('sms')){
         totalCost += 0.65;
      }
    return 'R' + totalCost.toFixed(2);
      
  }
function quickSort(array){
    if(array < 2)
      return array;
    
    let pivot = array[0];
    let less = array.slice(1).filter(element =>{ return element <= pivot }); 
    let greater = array.slice(1).filter(element =>{ return element > pivot }); 
    
    return quickSort(less).concat(pivot, quickSort(greater));
  };
  console.log(quickSort([8, 48, 88, 4, 84, 44]));
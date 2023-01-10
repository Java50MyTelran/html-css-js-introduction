
//HW #15
const array = [20, -10,333,1000, 552, 7, -7, 556, 555];
/************************************************************************************** */
//task sort.1
function evenOddSort(array) {
    
    //sort array of number in the order even numbers go before the odd ones
    //example input array [20, -10,333,1000, 552, 7, -7] => [20, -10, 1000, 552, 333, 7, -7]
    return array.sort(function(n1, n2) {
      return n1 % 2 == 0 ? -1 : 1;
    })
}
//task sort.2
function oddEvenSort(array) {
    
    //sort array of number in the order even numbers go after the odd ones
    //example input array [20, -10,333,1000, 552, 7, -7] => [333, 7, -7, 20, -10, 1000, 552]
    return array.sort(function(n1, n2) {
     return n1 % 2 == 0 ? 1 : -1;
});
}
//task sort.3
function evenAscOddDesc(array) {
    
    //sort array of number in the order even numbers go before the odd ones
    //even numbers should be in the ascending order, odd numbers should be in the descending
    //example input array [20, -10,333,1000, 552, 7, -7] => [-10, 20, 552, 100, 333, 7, -7]
    return array.sort(function(n1, n2) {
      let res = Math.abs(n1 % 2) - Math.abs(n2 % 2);
      if (res === 0) {
        res = n1 % 2 == 0 ? n1 - n2 : n2 - n1;
      }
      return res;
    })
}
/*************************************************************************** */

 
  //HW #15
  //task reduce.1
  function getMin(array) {
    
    //find and returns minimal value of array
    return array.reduce(function(min, cur) {
      return cur < min ? cur : min;
    })
  }
  //task reduce.2
  function getMax(array) {
    //find and returns minimal value of array
    return array.reduce(function(max, cur) {
      return cur > max ? cur : max;
    })
  }
  //task reduce.3
  function getAverage(array) {
    const sum = array.reduce(function(sum, cur){
      return sum + cur
    });
    return sum / array.length;
  }
  //task reduce.4
  function getMinMaxAvg(array) {
   
    const res = array.reduce(function (ar, cur) {
      if (cur < ar[0]) {
        ar[0] = cur;
      } else if (cur > ar[1]) {
        ar[1] = cur;
      }
      ar[2] += cur;
      return ar;
    }, [array[0], array[0], 0]);
    res[2] /= array.length;
    return res;
  }
  console.log(`array: [${array}] evenOddSort => [${evenOddSort(array)}]`);
  console.log(`array: [${array}] oddEvenSort => [${oddEvenSort(array)}]`);
  console.log(`array: [${array}] evenAscOddDescSort => [${evenAscOddDesc(array)}]`);
  console.log(`array: [${array}] getMin => ${getMin(array)}`);
  console.log(`array: [${array}] getMax => ${getMax(array)}`);
  console.log(`array: [${array}] getAverage => ${getAverage(array)}`);
  console.log(`array: [${array}] getMinMaxAvg => [${getMinMaxAvg(array)}]`);
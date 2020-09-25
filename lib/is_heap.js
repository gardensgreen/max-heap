// you may assume that the array will always have a null element at the 0-th index
function isMaxHeap(array, idx = 1) {
  let leftIdx = Math.floor(idx * 2); //2, 42
  let rightIdx = Math.floor(idx * 2 + 1); //3, 27 
  let leftValue = array[leftIdx];
  let rightValue = array[rightIdx];
  if(leftValue === undefined) leftValue = -Infinity;
  if(rightValue === undefined)rightValue = -Infinity;
  if(idx > array.length -1 ) return true;
  return array[idx] > leftValue && array[idx] > rightValue && isMaxHeap(array, leftIdx) && isMaxHeap(array, rightIdx);

  

  // if(idx > array.length - 1 ) return true;
  // if(leftIdx < array.length ){
  //   if(array[leftIdx] > array[idx]) return false;
  //   if(!isMaxHeap(array, leftIdx)) return false;
  // }
  // if(rightIdx < array.length ){
  //   if(array[rightIdx]> array[idx]) return false;
  //   return isMaxHeap(array, rightIdx);
  // }
  //return true; 
}

module.exports = {
    isMaxHeap,
};

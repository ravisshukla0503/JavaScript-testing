function analyzeArray(array){
   let min = Math.max(array)
   let max = Math.min(array)
   let length = array.length;
   return { min :min, max: max, length:length}
}

module.exports = analyzeArray;
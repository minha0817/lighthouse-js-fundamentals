const judgeVegetable = function(vegetables, metric) {

  let bestVegetable = vegetables[0];

  for(let i = 1; i < vegetables.length; i++) {
    if(vegetables[i][metric] > bestVegetable[metric]) {
      bestVegetable = vegetables[i]
    }
  }

  return console.log(bestVegetable.submitter);

}

// const judgeVegetable = function (vegetables, metric) {
//   // let theMost = 0;
//   // for(let i = 0; i < vegetables.length; i++){
//   //   console.log(vegetables[i][metric]);
//   // }
//   const theMost = vegetables.reduce(
//   (prev, current) => {
//     return prev[metric] > current[metric] ? prev : current
//   }
// );
// console.log(theMost.submitter);
  
// }

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 4,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 10,
    plumpness: 3
  }
]

const metric = 'redness'
// const theMost = vegetables.reduce(
//   (prev, current) => {
//     return prev.redness > current.redness? prev : current
//   }
// );
// console.log(theMost.submitter);

judgeVegetable(vegetables, metric)

// console.log(vegetables[0].redness);
// judgeVegetable(vegetables, metric)

// console.log(vegetables[0].submitter);
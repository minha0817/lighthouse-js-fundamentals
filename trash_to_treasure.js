const smartGarbage = function (trash, bins){
  if(trash === 'waste'){
    bins.waste += 1
  }else if(trash === 'recycling'){
    bins.recycling += 1
  } else if(trash === 'compost'){
    bins.compost += 1
  } 
    return bins;
};

smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('recycling', {
  waste: 10,
  recycling: 10,
  compost: 10
});
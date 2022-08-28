const carPassing = function(cars, speed){
  let time = Date.now();
  let newObj = {time: time, speed: speed};
  cars.push(newObj);
  return console.log(cars);

}
//return해야하는게 cars array안에 새로운 object time & speed
//를 만들어서 리턴해야함. 
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

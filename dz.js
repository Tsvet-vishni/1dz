
console.log(addThemAll(2,4)); // 6*
console.log(addThemAll(1,2,3,4)); // 10*
console.log(addThemAll(5,5,10)); // 20*

function addThemAll(...numbers){

    let sum = 0

    for(let number of numbers){
        sum += number
    }
    return sum
}

console.log(multiply(5)(5))		// 25*
console.log(multiply(2)(-2))	        // -4*
console.log(multiply(4)(3))		// 12*

function multiply(a) {

    const myFunction = function(b)
    {
        return a * b;
    }
    return myFunction;

}




const movies = [
  {
      movieName: 'The Thing',
      releaseYear: 1982,
      directedBy: 'Carpenter',
      runningTimeInMinutes: 109,
  },
  {
      movieName: 'Aliens',
      releaseYear: 1986,
      directedBy: 'Cameron',
      runningTimeInMinutes: 137,
  },
  {
      movieName: 'Men in Black',
      releaseYear: 1997,
      directedBy: 'Sonnenfeld',
      runningTimeInMinutes: 98,
  },
  {
      movieName: 'Predator',
      releaseYear: 1987,
      directedBy: 'McTiernan',
      runningTimeInMinutes: 107,
  },
];



function byProperty(property, direction = ">") {

  const copyArr = [...movies]
  let data = null


  if (direction == "<") {
      data = copyArr.sort((a, b) => {

          const key1 = a[property]
          const key2 = b[property]
  
          if (key1 < key2) return -1
          if (key1 > key2) return 1
          
          return 0
      })
  }



  if (direction == ">") {
      data = copyArr.sort((a, b) => {

          const key1 = a[property]
          const key2 = b[property]
  
          if (key1 > key2) return -1
          if (key1 < key2) return 1
          
          return 0
      })
  }
  return data
}
  

console.log(byProperty('releaseYear', '>')); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(byProperty('releaseYear', '<')); // виведе масив фільмів посортованих по року випуску, від старішого до новішого*
console.log(byProperty('runningTimeInMinutes', '>')); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(byProperty('runningTimeInMinutes', '<')); // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого*
console.log(byProperty('movieName', '>')); // виведе масив фільмів посортованих по назві, в алфавітному порядку*
console.log(byProperty('movieName', '<')); // виведе масив фільмів посортованих по назві, в алфавітному порядку*




function detonatorTimer(delay) {
  console.log(delay);
  let timeId = setTimeout(detonatorTimer, 1000, --delay)
  if(delay === 0){
    console.log('Boom!')
    clearTimeout(timeId)
  }
}

detonatorTimer(3);



detonatorTimer(3);

function detonatorTimer(delay) {
  for(let i = delay; i > 0; i--){
    setInterval(function(){
      console.log(delay);
    }, 1000);
  }
  console.log('BOOM!');

}

let me = {
  name: 'Svitlana',
  city: 'Kyiv',
  age: 24, 
  gender: 'male',
  defaultMood: 'lucky',
  currentMood: 'focused',
introduce() {
  console.log(`My name is ${this.name} and I live in ${this.city}`);
},
prognose() {
  console.log(`I hope that next year I'm gonna be ${this.age+1}`);
},
describeMyMood(){
  console.log(`Mostly I'm ${this.defaultMood}, but now I'm ${this.currentMood}`);
}
}

let securedSelfIntroduce = me.introduce.bind(me)
let securedSelfPrognose = me.prognose.bind(me)
let securedSelfDescribeMyMood = me.describeMyMood.bind(me)

setTimeout(securedSelfIntroduce, 1000); 
setTimeout(securedSelfPrognose, 2000); 
setTimeout(securedSelfDescribeMyMood, 3000); 


function someFunction (a, b){
  console.log(a + b);
}

function slower(func, seconds) {
  console.log('"Chill out, you will get you result in 5 seconds"');
  seconds *= 1000;
  return function() {
    setTimeout(() => func.apply(this, arguments), seconds);
  };
}


let slowedSomeFunction = slower(someFunction, 5); 
slowedSomeFunction(4,5);


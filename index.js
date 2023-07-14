// Your code here
class Cat{
    constructor(name,sex){
        this.name = name,
        this.sex = sex
        this.speak = function(){
            return `${this.name} says meow!`
        }
    }
}

const cat = new Cat ('Sasha')
cat.speak();

class Dog{
    constructor(name,sex){
        this.name = name,
        this.sex = sex
        this.speak = function(){
            return `${this.name} says woof!`
        }
    }
}
const dog = new Dog('Rufio')
dog.speak();

class Bird{
    constructor(name,sex){
        this.name = name,
        this.sex = sex
    }
    speak(name,sex){
        if(this.sex === 'male' ){
          return `It's me! ${this.name}, the parrot!`
           
        }else{
           return `${this.name} says squawk!`
           
        }
    }
}


const bird = new Bird ('Pablo', 'male')
const bird2 = new Bird ('Mable', 'female')

console.log(bird.speak())
console.log(bird2.speak())
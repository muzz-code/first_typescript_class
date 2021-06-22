
class Automobile {
    name: string;
    type: string;
    age: number;

    constructor (n: string, t: string, a: number){

        this.name = n;
        this.type = t;
        this.age = a
    }

    speed(){
        return `this ${this.name} sport ${this.type} is moving at a speed of ${this.speed} km`
    }
}
let car = new Automobile("ferrari", "car", 100)

console.log(speed)
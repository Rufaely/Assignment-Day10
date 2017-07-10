class Cars{
    name:String; acceleration:number; 
    constructor(name:String){
        this.name = name;
    }    honk(){
        console.log('${this.name} ia saying: Tooooooooooooooot!');
    }
    accelerator(speed:number){
        this.acceleration = this.acceleration + speed;
    }
}
var cars = new Cars ("BMW");
cars.honk(); 
console.log(cars.acceleration);
cars.accelerator(60);
console.log(cars.acceleration);
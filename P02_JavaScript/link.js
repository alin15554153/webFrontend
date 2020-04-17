function Animal() {
    this.name = 'Animal';
    this.age = '11';
    this.eat = function () {
        console.log(this.name + ' eat');
    };
}
Animal.prototype.run = function () {
    this.age = 5
    console.log('Animal Run ' + this.age);
}
function Dog(name) {
    this.name = name;
    this.eat = function () {
        console.log(this.name + ' eat');
    };
}
// Dog.prototype = new Animal()

var dog = new Dog('小明');
dog.eat()
console.log(dog)

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;

}

Dog.prototype.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " says Wooff!");
        } else {
            alert(this.name + " says wooff!");
        }
};

Dog.prototype.run = function() {
    console.log("Run!");
};

Dog.prototype.wag = function() {
    console.log("Wag!");
};

function DogParam(params) {
    this.name = params.name;
    this.break = params.breed;
    this.weight = params.weight;
    this.bark = function() {
       if (this.weight > 25) {
           alert(this.name + " says Wooff!");
       } else {
           alert(this.name + " says yiiip!");
       }
    };
}

window.onload = init;

function init() {
// Constructing a dog object
    var pochi = new Dog("pochi", "shitzu", 10);
    var browny = new Dog("browny", "german sheperd", 30);

    var dogs = [pochi, browny];

    for (var i = 0; i < dogs.length; i++) {
        dogs[i].bark();
        dogs[i].run();
        dogs[i].wag();
    }
}



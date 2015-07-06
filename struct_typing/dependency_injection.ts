
class Animal {
  name : string;
  legs : number;
  lifeExpectancy : number;
}

class Dog {
  tail : boolean;
}

class Cat {
  tail : boolean;
}

class Fish extends Animal {
  gills : boolean;
}


var cat = new Cat();
var dog : Dog = cat; // <- dog is a cat ... structurally!
// var fish : Fish : cat; // <- compile error


// f : (number, string) => { x: number, y: string }
var f = (x, y) => { return { x: x + 3, y: y + 'world'} };

// animals : Animal[];
var animals = [ new Dog(), new Cat(), new Fish() ];


window.onmousedown = function(mouseEvent) {
  console.log(mouseEvent.buton);  //<- Error
};


animals,f;
//-----------------

class Context {
  dog  = new Dog();
  cat  = new Cat();
  fish = new Fish();
}


//-----------------

interface Processor<T extends Animal> {
  processDependencies();
  process(...animals : T[]);
}

module Western {

  interface Dependencies {
    fish;
  }

  export class FoodProcessor implements Processor<Fish> {
    constructor(private $ : Dependencies) {
    }

    process(...fishes : Fish[]) {
      console.log(`Some tasty ${ fishes.map(fish => fish.name) } tartar! Haaarr...`);
    }

    processDependencies() {
      console.log(`Some tasty ${this.$.fish} tartar! Haaarr...`);
    }
  }

}


module Chinese {
  interface Dependencies {
    dog;
    cat;
  }

  export class FoodProcessor implements Processor<Animal> {
    constructor(private $ : Dependencies) { }

    process(...animals : Animal[]) {
      console.log(`${ !!animals && animals.map(a => a.name)  } 个饱!`);
    }

    processDependencies() {
      console.log(`${this.$.dog} 和 ${this.$.cat} 个饱!`);
    }
  }

}


//--------------------

var context = new Context();
new Western.FoodProcessor(context);
new Chinese.FoodProcessor(context);

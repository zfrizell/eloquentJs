let ages = {
    'zack': 24,
    'jj': 27
}

console.log('zack' in ages);

let symb = Symbol('anothername');
let sym = Symbol('name');

console.log(sym);

class VecOld {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }
    plus(vector) {
       const vectorArr = this._toArr(vector); 
       return (vectorArr[0] + this.x , vectorArr[1] + this.y);
    }
    minus(vector) {
        const vectorArr = this._toArr(vector); 
        return (vectorArr[0] - this.x , vectorArr[1] - this.y);
    }
    _toArr(vector) {
        return vector.split(',');
    }
}

const vecObj = new VecOld(12, 20);

// console.log(( 5, 89).toString().split(','));

class Matrix {
    constructor(width, height, element = (x, y) => undefined) {
      this.width = width;
      this.height = height;
      this.content = [];
  
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          this.content[y * width + x] = element(x, y);
        }
      }
    }
  
    get(x, y) {
      return this.content[y * this.width + x];
    }
    set(x, y, value) {
      this.content[y * this.width + x] = value;
    }
  }

  class MatrixIterator {
    constructor(matrix) {
      this.x = 0;
      this.y = 0;
      this.matrix = matrix;
    }
  
    next() {
      if (this.y == this.matrix.height) return {done: true};
  
      let value = {x: this.x,
                   y: this.y,
                   value: this.matrix.get(this.x, this.y)};
      this.x++;
      if (this.x == this.matrix.width) {
        this.x = 0;
        this.y++;
      }
      return {value, done: false};
    }
  }

  Matrix.prototype[Symbol.iterator] = function() {
    return new MatrixIterator(this);
  };

  let matrix = new Matrix(2, 2, (x, y) => `value ${x},${y}`);
  
    for (let x of matrix) {
        console.log(x);
    }

    console.log(matrix)
  

    class Temperature {
        constructor(celsius) {
          this.celsius = celsius;
          this.someVal = 12;
          this.fahrenheitLike = this.fahrenheitFunc()
        }
        get fahrenheit() {
          return this.celsius * 1.8 + 32;
        }
         fahrenheitFunc() {
          return this.celsius * 1.8 + 32;
        }
        set fahrenheit(value) {
          this.celsius = (value - 32) / 1.8;
        }
      
        static fromFahrenheit(value) {
          return new Temperature((value - 32) / 1.8);
        }
      }
      
    //   let temp = new Temperature(98);
    //   console.log(Temperature.fromFahrenheit(37));

      // → 71.6
    //   temp.fahrenheit = 86;
    //   console.log(temp.celsius);
      // → 30
//   const matrix = new Matrix(4, 5)
//   matrix.set(2, 3, 'hello')
//   console.log(matrix)


class SymmetricMatrix extends Matrix {
    constructor(size, element = (x, y) => undefined) {
      super(size, size, (x, y) => {
        if (x < y) return element(y, x);
        else return element(x, y);
      });
    }
  
    set(x, y, value) {
      super.set(x, y, value);
      if (x != y) {
        super.set(y, x, value);
      }
    }
  }
  
  let matrix2 = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
  console.log(matrix.get(2, 3));

  for (let x in matrix2) {

      console.log(x)
  } 



class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;

    }
    plus(x, y) {
        return [this.x + x, this.y + y]
    }
    minus(x, y) {
        return [this.x - x, this.y - y]
    }
    get length() {
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

const vector = new Vec(4, 5)

// console.log(vector.plus(1, 2))
// console.log(vector.length)



class Group {
    constructor() {
        this.group = [];

       
    }
     add(val) {
        if (!this.group.includes(val)) {
            this.group.push(val);
        }
    }
     delete(val) {
        const index = this.group.indexOf(val)
        if (index !== -1) {
            this.group.splice(index, 1);
        }
        
    }
     has(val) {
        const index = this.group.indexOf(val)
        if (index !== -1) {
            return true
        }
        return false;

    }

    static from(obj) {
      const group = new Group
        for (let val of obj) {
            console.log(val)
            group.add(val)
        }
        return group
    }

}

const myGroup = new Group();

myGroup.add(4)
myGroup.add(2)
myGroup.add(7)
myGroup.add(7)
myGroup.add(7)
// myGroup.delete(4)

// console.log(Group.from([2, 4, 6, 8]));

// console.log(myGroup.has(4));



class GroupIterator {
  constructor(obj) {
    this.obj = obj;
    this.el = 0;
  }
  
  next() {
    // console.log('actually got here')
    // console.log(this.obj.group.length)
    if (this.el === this.obj.group.length) return {done: true}
    
    let value = this.obj.group[this.el];
    this.el++;
    return {value, done: false};
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}

console.log(myGroup)

for (let val of myGroup) {
  console.log(val)
}


let obj = {
  hasOwnProperty: 4
}

obj.prototype[]

console.log(obj.hasOwnProperty(hasOwnProperty));
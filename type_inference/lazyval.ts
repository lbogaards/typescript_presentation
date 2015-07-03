class LazyVal<T> {
  private _val: T;

  constructor(private create: () => T) { }

  get val(): T {
    if (!this._val) {
      this._val = this.create();
    }
    return this._val;
  }
}


var x = new LazyVal(() => 5);
var y = new LazyVal(() => 'hello');

//x === y; // <- compile error
// x.val = 10; // <- compile error

x instanceof LazyVal; // true
var x2 = x.val * 2; // 10
var yWorld = y.val.concat(' world'); // 'hello world'

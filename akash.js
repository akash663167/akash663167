console.log("this is static method");
function MyClass() {
  var private = "this is private variable";

  this.public = "this is public variable";

  this.publicMethod = function () {
    return private;
  };
}

let cls = new MyClass();

console.log(cls.publicMethod());

console.log(c);

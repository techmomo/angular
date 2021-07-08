console.log('Home');
// data types
// number
// string
// boolean
// complex
// arrays
var i = 10;
var j = 11;
console.log(i + j);
var nums = [1, 2, 4, 5];
nums.forEach(function (n) { return console.log(n); });
var u = {
    userId: 1,
    userName: 'user 1'
};
var usrs;
usrs = [
    {
        userName: 'user 1',
        userId: 1
    },
    {
        userName: 'user 2',
        userId: 2
    }
];
usrs.forEach(function (u) { return console.log(u.userId + " --- " + u.userName); });
var google = {
    id: 1,
    pName: 'Google Inc',
    getName: function () {
        console.log("P name Project Namee");
    }
};
google.getName();
var A = /** @class */ (function () {
    // initialise 
    function A(id, index) {
        console.log('A ()');
        this.id = id;
        this.index = index;
    }
    A.prototype.sayHello = function () {
        console.log('say Hello');
    };
    return A;
}());
// create object
var aa = new A(1, "1010");
console.log(aa.id);
aa.sayHello();

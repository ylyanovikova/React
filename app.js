// 1) создать интерфейс на основе этого объекта:
;
;
;
var user = {
    name: "Max",
    age: 18,
    gender: 'male'
};
//2
function sum(a, b) {
    return a + b;
}
;
function showSum(a, b) {
    console.log(a + b);
}
//3
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
;
console.log(sum(1, 2));
showSum(2, 3);
console.log(incAge(user, 2));

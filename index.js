// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name = "Mr. Meow"){
    cats.push(name);
}
function destructivelyPrependCat(name = "Mr. Meow"){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
const newArray = [...cats];
function appendCat(name) {
    newArray.push(name);
    return newArray;
}
const newArray2 = [...cats];
function prependCat(name) {
    newArray2.unshift(name);
    return newArray2;
}
const newArray3 = [...cats];
function removeLastCat() {
    newArray3.pop();
    return newArray3;
}
const newArray4 = [...cats];
function removeFirstCat() {
    newArray4.shift();
    return newArray4;
}
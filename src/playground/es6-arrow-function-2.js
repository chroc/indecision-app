// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a+b;
}
//console.log(add(10, 20, 101));

// this keyword - no longer bound

const user = {
    name: 'Sergio',
    cities: ['Medellin', 'Melbourne', 'Miami', 'Los Angeles'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
//console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};
console.log(multiplier.multiply());
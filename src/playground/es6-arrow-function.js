console.log('Arrow function');

function square(x){
    //
    return x*x;
};
console.log(square(3));

// const squareArrow = (x) => {
//     //
//     return x*x;
// };
const squareArrow = (x) => x*x;
console.log(squareArrow(10));


//let fullName = 'Mike Smith';
// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }
//console.log('First arrow f: ',getFirstName(fullName));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Sergio Rojas'));
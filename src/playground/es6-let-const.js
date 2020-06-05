var nameVar = 'Sergio';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jane';
nameLet = 'July';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

// Block level scoping

const fullName = 'Yan Rojas';
let firstName;
if(fullName){
    firstName = fullName.split(' ')[0];
    console.log('in',firstName);
}

console.log('out', firstName);
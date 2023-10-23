const people = ['John', 'Doe', 'Jane', 'Doe'];
const ages = [20, 25, 30, 35];

console.log(people);

// the value of 'xyz' from modules.js
// module.exports = {
    // adding a property called people(value of people)
//     people: people,
// }

// But when the key and value are the same, you can just use the key
module.exports = {
    people,
    ages
};

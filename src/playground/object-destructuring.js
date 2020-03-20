// const book = {
//   name: 'Ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher : {
//     name: 'penguin'
//   }
// };

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);

const array = ['Cofee (cold)', '$2.00', '$3.75', '$5.00'];

const [item, , cost] = array;

console.log(`A Medium ${item} costs around ${cost}`);
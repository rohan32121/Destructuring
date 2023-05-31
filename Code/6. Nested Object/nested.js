// 6. Nested Objects.

// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties.

function extractNameAndStreet(person) {
    const { name, address: { street } } = person;
    return { name, street };
  }
  const person = {
    name: 'Rohan',
    address: {
      street: '123 Main St',
      city: 'Exampleville',
      country: 'Exampleland'
    }
  };
  
  const result = extractNameAndStreet(person);
  console.log(result);
    
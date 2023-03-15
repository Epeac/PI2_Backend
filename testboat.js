const encodedData = btoa("ON");
console.log(encodedData) // encode a string
const decodedData = atob(encodedData);
console.log(decodedData)
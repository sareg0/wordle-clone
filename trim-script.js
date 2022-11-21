var fs = require("fs");

var data = fs.readFileSync("./wordlist.json");

const thing = Object.entries(JSON.parse(data));

// [[ 'aaronite', 1 ], []]
// console.log('thing', thing)

const compareFunction = (a, b) => {
  if (a[0].length > b[0].length) {
    return 1;
  }
  if (a[0].length < b[0].length) {
    return -1;
  }
  return 0;
};

const isFiveCharsLong = (word) => {
	return word[0].length === 5;
}

const sortedThingz = thing.sort(compareFunction).filter(isFiveCharsLong);


//turn it back into objects

console.log(sortedThingz);

const backToObjectPlz = Object.fromEntries(sortedThingz)

console.log('backToObjectPlz', backToObjectPlz)

try {
	fs.writeFileSync('./sorted-trimmed-wordlist.json', JSON.stringify(backToObjectPlz))
} catch (error) {
	console.log('error', error)
}


// data
// test data

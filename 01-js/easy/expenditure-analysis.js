/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  let mapCategoryToAmountSpent = new Map();

  // Creating the required data in a map
  transactions.forEach( transaction => {
    let key = transaction.category;
    let amount = transaction.price
    if (mapCategoryToAmountSpent.has(key)) {
      mapCategoryToAmountSpent.set(key, mapCategoryToAmountSpent.get(key) + amount);
    } else {
      mapCategoryToAmountSpent.set(key,amount)
    }
  })

  let listOfObj = [];

  mapCategoryToAmountSpent.forEach((value, key) => {
    listOfObj.push(createObject(key, value));
  })

  return listOfObj;
}

function createObject(key, value) {
  let obj = {"category" : key, "totalSpent" : value};
  return obj;
}

module.exports = calculateTotalSpentByCategory;

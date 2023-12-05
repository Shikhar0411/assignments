/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
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

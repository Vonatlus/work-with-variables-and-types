const bread = 15.678;
const meat = 123.965;
const butter = 90.2345;

const maxPrice = Math.max(bread, meat, butter);
console.log(`Max price: ` + maxPrice);
document.writeln(`<b>Max price:</b> ` + maxPrice + `<br>`);

const minPrice = Math.min(bread, meat, butter);
console.log(`Min price: ` + minPrice);
document.writeln(`<b>Min price:</b> ` + minPrice + `<br>`);

const sadnwich = bread + meat + butter;
console.log(`Sadnwich: ` + sadnwich);
document.writeln(`<b>Sadnwich:</b> ` + sadnwich + `<br>`);

const priceWithoutPenny =
  Math.floor(bread) + Math.floor(meat) + Math.floor(butter);
console.log(`Price without penny: ` + priceWithoutPenny);
document.writeln(`<b>Price without penny:</b> ` + priceWithoutPenny + `<br>`);

const priceWithoutConscience = Math.ceil(priceWithoutPenny / 100) * 100;
console.log(`Price without conscience: ` + priceWithoutConscience);
document.writeln(
  `<b>Price without conscience:</b> ` + priceWithoutConscience + `<br>`
);

const isPriceEven = priceWithoutPenny % 2 == 0;
console.log(`Is price even?: ` + isPriceEven);
document.writeln(`<b>Is price even?:</b> ` + isPriceEven + `<br>`);

const payment = 500;
const change = payment - sadnwich;
console.log(`Change: ` + change);
document.writeln(`<b>Change:</b> ` + change + `<br>`);

const averagePrice = Math.round(((bread + meat + butter) / 3) * 100) / 100;
console.log(`Avarage price: ` + averagePrice);
document.writeln(`<b>Avarage price:</b> ` + averagePrice + `<br>`);

const discount = Math.random();
console.log(`Discount: ` + discount);
document.writeln(`<b>Discount:</b> ` + discount + `<br>`);

const breadWithDiscount = Math.round((bread - discount) * 100) / 100;
console.log(`Bread with discount: ` + breadWithDiscount);
document.writeln(`<b>Bread with discount:</b> ` + breadWithDiscount + `<br>`);

const meatWithDiscount = Math.round((meat - discount) * 100) / 100;
console.log(`Meat with discount: ` + meatWithDiscount);
document.writeln(`<b>Meat with discount:</b> ` + meatWithDiscount + `<br>`);

const butterWithDiscount = Math.round((butter - discount) * 100) / 100;
console.log(`Butter with discount: ` + butterWithDiscount);
document.writeln(`<b>Butter with discount:</b> ` + butterWithDiscount + `<br>`);

const profitFromBread = Math.round((bread / 2 - discount) * 100) / 100;
console.log(`Profit from bread with discount: ` + profitFromBread);
document.writeln(
  `<b>Profit from bread with discount:</b> ` + profitFromBread + `<br>`
);

const profitFromMeat = Math.round((meat / 2 - discount) * 100) / 100;
console.log(`Profit from meat with discount: ` + profitFromMeat);
document.writeln(
  `<b>Profit from meat with discount:</b> ` + profitFromMeat + `<br>`
);

const profitFromButter = Math.round((butter / 2 - discount) * 100) / 100;
console.log(`<b>Profit from butter with discount:</b> ` + profitFromButter);
document.writeln(
  `<b>Profit from butter with discount:</b> ` + profitFromButter + `<br>`
);

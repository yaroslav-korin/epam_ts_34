/// <reference path="utility-functions.ts" />
const result1 = Utility.maxBooksAllowed(1);
console.log(result1);

import util = Utility.Fees;

// const result2 = Utility.Fees.calculateLateFee(100);
const result2 = util.calculateLateFee(100);
console.log(result2);


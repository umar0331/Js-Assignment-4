// here we use logical operator (use &&)

let age = Number(prompt("enter your age"));
if (age >= 18 && age <= 60) {
  console.log("Allowed");
} else if (age >= 0 && age < 18) {
  console.log("Not Allowed");
} else {
  console.log("check input");
}

// Now use logical OR ||
let emailCorrect = true;
let phoneCorrect = false;
let canLogin = emailCorrect || phoneCorrect;
console.log(canLogin); // here show  true bec || or if one condtion is true then true

// now use !not
let isBlocked = false;
if (!isBlocked) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}

// cobine logecal operator
// User is logged in AND has a coupon
let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;
let specialDiscount = isLoggedIn && (isPremium || hasCoupon);
console.log(specialDiscount); // true because user is logged in and has a coupon

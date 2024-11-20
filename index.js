// chapter NO 33 Specifying a date and time

// valid date
// const futureDate = new Date("june 16 2030");
// console.log(futureDate);


// invailed  Date
// const futureDate = new Date("june 40, 2033");
// console.log(futureDate);

// Day to election 

// const right = new Date();
// const election = new Date("April 8, 2025")
// const timeToElectionInMilliSeconds = election - right;
// // console.log(right, election, timeToElectionInMilliSeconds);
// const dayToElection =  timeToElectionInMilliSeconds / (1000 * 60 * 60 * 24)
// console.log(Math.floor(dayToElection));

// hour to election remaining

// const right = new Date();
// const election = new Date("April 8, 2025");
// const timeToElectionInMilliSeconds = election - right;
// const hourToElection = timeToElectionInMilliSeconds / (1000 * 60 * 60)
// console.log(Math.floor(hourToElection));


// chapter no 34 changing of elements of data and time

// old stuff
// const now = new Date();
// console.log(now);

//setFullYear
// const now = new Date();
// // console.log({now});
// console.log(`before `, now.getFullYear());

// now.setFullYear("2035");
// console.log(now);
// console.log("After", now.getFullYear());

// setting hours

const now = new Date();
console.log("Getting hours", now.getHours());

// before setting
now.setHours(3);

// after setting hours

console.log("After setting hours", now.getHours());



















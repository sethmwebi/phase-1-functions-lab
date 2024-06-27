// Code your solution in this file!
const distanceFromHqInBlocks = (location) => {
  return Math.abs(location - 42);
};

const distanceFromHqInFeet = (location) => {
  return Math.abs(location - 42) * 264;
};

const distanceTravelledInFeet = (start, destination) => {
  return Math.abs(destination - start) * 264;
};

const centsToDollars = (cents) => {
  const dollars = Math.floor(cents / 100);
  const remainingCents = cents % 100;
  const formattedCents = remainingCents.toString().padStart(2, "0");
  return parseFloat(`${dollars}.${formattedCents}`);
};

const calculatesFarePrice = (start, destination) => {
  const distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return centsToDollars((distance - 400) * 2);
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
};

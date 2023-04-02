// Code your solution here

const findMatching = (driversNamesArray, string) => driversNamesArray.filter(driverName => driverName.toUpperCase() === string.toUpperCase());

const fuzzyMatch = (driversNamesArray, string) => driversNamesArray.filter(beginningLetters => beginningLetters.startsWith(string));

const matchName = (arrayOfDriverObjects, string) => arrayOfDriverObjects.filter(drivers => drivers.name === string);

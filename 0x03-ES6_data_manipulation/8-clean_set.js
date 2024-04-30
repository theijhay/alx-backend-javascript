function cleanSet(set, startString) {
  const cleanedValues = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }

  return cleanedValues.join('-');
}

export default cleanSet;

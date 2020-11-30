const dateFormatter = (date) => {
  let splitDate = date.split('-');
  if (splitDate[1][0] === '0') {
    splitDate[1] = splitDate[1][1];
  }
  [splitDate[0], splitDate[1]] = [splitDate[1], splitDate[0]];
  [splitDate[2], splitDate[1]] = [splitDate[1], splitDate[2]];
  return splitDate.join('/');
};

module.exports = dateFormatter;
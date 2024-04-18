export default function orderByProps(obj, array = []) {
  let elementsNotInArray = [];
  for (const item in obj) {
    if (!array.includes(item)) {
      elementsNotInArray.push(item);
    }
  }
  let sortArray = [...array, ...elementsNotInArray.sort()];
  let doneArray = [];
  for (const item of sortArray) {
    doneArray.push({ item, value: obj[item] });
  }
  return doneArray;
}


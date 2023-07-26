export default function appendToEachArrayValue(array, appendString) {
  let value = "";
  for (let value of array) {
    value = appendString + value;
  }

  return array;
}

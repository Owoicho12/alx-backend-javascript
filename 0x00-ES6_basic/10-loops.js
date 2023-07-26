export default function appendToEachArrayValue(array, appendString) {
  let text = "";
  for (let x of array) {
    text += appendString + x;
  }

  return array;
}

export default function boughtOrNot(buyers, _id) {
  const arr = [];

  for (const [keys, values] of Object.entries(buyers)) {
    arr.push(values._id);
  }
 

  return !arr.includes(_id);
}

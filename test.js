function formatData(arr) {
  const copy = [...arr];
  const output = [];

  let buff = [];

  let times = Math.ceil(copy.length / 4);

  while (times > 0) {
    for (let i = 0; i < copy.length; i++) {
      buff.push(copy[i]);

      if (i === 3) {
        output.push(buff);
        buff = [];

        copy.splice(0, 4);
        break;
      }

      if (buff.length === copy.length) {
        output.push(buff);
        break;
      }

      if (copy.length === 1) {
        output.push(buff);
        buff = [];
        break;
      }
    }

    times--;
  }
  console.log("===");

  return output;
}

console.log(formatData([1, 2, 3, 4, 5 ,6 ,7]));

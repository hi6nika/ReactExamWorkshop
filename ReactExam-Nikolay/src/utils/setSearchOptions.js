export default function setSearchOptions(carsArr) {
  const output = {
    year: [],

    make: [],

    model: [],

    body: [],

    condition: [],

    price: [],
  };

  carsArr.map((x) => {
    for (const [keys, values] of Object.entries(x)) {
      if (output.hasOwnProperty(keys)) {
        if (!output[keys].includes(values)) {
          output[keys].push(values);
        }
      }
    }
  });

  return output;
}

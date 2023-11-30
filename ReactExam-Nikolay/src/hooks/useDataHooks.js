const BaseURL = `http://localhost:3000/`;
const paths = {
  Cars: "cars/catalog",
};

export const useGetData = async function (method, path, options) {
  if (method === "GET") {
    const req = await fetch(`${BaseURL}${paths[path]}`);
    const res = await req.json();
 
    return res;
  }
};

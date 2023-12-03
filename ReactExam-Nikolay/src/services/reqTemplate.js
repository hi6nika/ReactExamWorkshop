const BaseUrL = "http://localhost:3000";

const reqTemplate = async (method, URL, data) => {
  const options = { method, headers: {} };

  if (data) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(data);
  }


  const res = await fetch(BaseUrL + URL, options);
  const result = await res.json();

  return result;
};

export const requests = {
  get: reqTemplate.bind(null, "GET"),
  post: reqTemplate.bind(null, "POST"),
  put: reqTemplate.bind(null, "PUT"),
};

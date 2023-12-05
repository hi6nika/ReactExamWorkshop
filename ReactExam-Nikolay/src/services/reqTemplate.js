const BaseUrL = "http://localhost:3000";

const reqTemplate = async (method, URL, data) => {
  const options = { method, headers: {} };

  if (data) {
    options.headers = {
      "Content-Type": "application/json",
    };
    options.body = JSON.stringify(data);
  }

  const AUTH = JSON.parse(localStorage.getItem("auth"));
  if (AUTH !== null && Object.keys(AUTH).length > 0) {
    options.headers["X-Authorization"] = AUTH.token;
  }

  const res = await fetch(BaseUrL + URL, options);
  const result = await res.json();

  return result;
};

export const requests = {
  get: reqTemplate.bind(null, "GET"),
  post: reqTemplate.bind(null, "POST"),
  put: reqTemplate.bind(null, "PUT"),
  delete: reqTemplate.bind(null, "DELETE"),
};

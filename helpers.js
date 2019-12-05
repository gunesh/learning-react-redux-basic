// Convert time to hours and minutes
export const calcTime = time => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};

export const log = (title, obj) => {
  console.log("--------------------");
  console.log(title);
  console.log(obj);
};

// Convert a number to money formatting
export const convertMoney = money => {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0
  });
  return formatter.format(money);
};

export const fetchApi = (endpoint, returnFunc = result => result) => {
  return fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      return returnFunc(result);
    })
    .catch(error => console.error("Error:", error));
};

export const getResult = (endpoint, returnFunc = result => result) => {
  return fetch(endpoint)
    .then(result => result.json())
    .then(result => {
      return returnFunc(result);
    })
    .catch(error => console.error("Error:", error));
};

export const createResult = (
  newUserObj,
  endpoint,
  returnFunc = result => result
) => {
  return fetch("https://reqres.in/api/users", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserObj)
  })
    .then(response => {
      response.json();
      console.log("CREATE SUCCESS");
      console.log(response.json());
      return returnFunc(response);
    })
    .catch(error => console.error("Error:", error));
};

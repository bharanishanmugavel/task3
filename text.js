const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function () {
  const obj = JSON.parse(this.response);
  for (let i = 0; i < obj.length; i++) {
    const name = obj[i].name.common;
    const region = obj[i].region;
    const subregion = obj[i].subregion;
    const population = obj[i].population;
    console.log({ name, region, subregion, population });
  }
};

// obj1.name === obj2.name && obj1.age === obj2.age

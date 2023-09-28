function createTowns(input) {
    const towns = input.reduce((acc, curr) => {
    const [town, latitude, longitude] = curr.split(" | ");
    acc['town'] = town;
    acc['latitude'] = Number(latitude).toFixed(2);
    acc['longitude'] = Number(longitude).toFixed(2);
    console.log(acc);
    return acc;
    }, {})
  };
  
  createTowns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
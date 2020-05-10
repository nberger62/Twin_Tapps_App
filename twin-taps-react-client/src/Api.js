export const getBeers = async () => {
  const response = await fetch(`/api/beers`);
  const json = await response.json();
  return json.data.beers;
};

export const getFood = async () => {
  const response = await fetch(`/api/food`);
  const json = await response.json();
  return json.data.food;
};

export default { getFood, getBeers };
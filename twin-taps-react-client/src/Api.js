export const getBeers = async () => {
  const response = await fetch(`/api/beers`);
  const json = await response.json();
  return json.data.beers;
};

export default { getBeers };
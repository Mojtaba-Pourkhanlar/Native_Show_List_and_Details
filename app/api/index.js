import axios from "axios";

const currencyID = "https://api.coingecko.com/api/v3/coins";

export const getAllCoins = () => {
  return axios.get(currencyID);
};

export const getCoinID = (id) => {
  return axios.get(`${currencyID}/${id}`);
};

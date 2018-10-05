export const getHeaders = function () {
  const headers = {
    'Accept': 'text/json',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/json'
  };
  return headers
};

export const urlIcon = function () {
  return 'https://www.metaweather.com/static/img/weather/';
};

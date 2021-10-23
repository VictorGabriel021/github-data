import axios, { Method } from 'axios';

type RequestParams = {
  method?: Method;
  url: string;
  data?: object;
  params?: object;
}

export const makeRequest = ({ method = 'GET', url, data, params }: RequestParams) => {
  return axios({
    method,
    url,
    data,
    params,
  });
}
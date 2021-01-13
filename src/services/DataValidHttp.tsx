import axios from 'axios';

const dataValidApi = axios.create({
  baseURL: 'https://gateway.apiserpro.serpro.gov.br/token',
});


export default dataValidApi;
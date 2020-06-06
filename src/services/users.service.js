import axios from 'axios';

export function getUsers() {
  console.info('entrou aqui');
  return axios.get('https://jsonplaceholder.typicode.com/users').then(res => res.data);
  console.info('passou');
}

import axios from 'axios';

export const getAllTasks = async () => {
  return await axios.get('https://jsonplaceholder.typicode.com/todos');
};

import './style.css';
import './App.css';
import { Card } from './Card.js';
import { apiUsers } from './apiUsers.js';
import { data as users } from './responseUsers.json'

const root = document.querySelector('#app');
const arrUsers = [...users];

const getuser = async () => {
  const newUser = await apiUsers();
  arrUsers.push(newUser);
  console.log(arrUsers)
  showUsersList();
}

const showUsersList = () => {
  root.innerHTML = '';
  root.innerHTML += `<button>Get Users</button>`;
  if (arrUsers.length > 0) {
    arrUsers.map(user => {
      root.innerHTML += Card(user);
    });
    const button = document.querySelector('button');
    button.addEventListener('click', getuser);
  }
}

showUsersList(arrUsers);

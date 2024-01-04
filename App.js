import './Card.css'
import { data as users } from './responseUsers.json'

export const App = () => {

  return users.map( user =>
    `
    <div class='card'>
    <img class='card-img' src=${user.avatar} />
    <p class='card-name'>${user.first_name} ${user.last_name}</p>
    </div>
    `
  ).join('')
}
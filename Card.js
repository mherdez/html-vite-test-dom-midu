import './Card.css'

export const Card = ( user ) => {
  if( !user ) return ''
  return `
    <div class='card'>
    <img class='card-img' src=${user.avatar} />
    <p class='card-name'>${user.first_name} ${user.last_name}</p>
    </div>
    `
}
const API_KEY = 'tGQiWES66+PV6xFeLzT/2g==xDRBuMKdvh5Bg0bD';
const API_URL = 'https://api.api-ninjas.com/v1/randomuser';

export const apiUsers = async () => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'X-Api-Key': API_KEY,
    },
    contentType: 'application/json',
  });

  const data = await response.json();
  return {
    first_name: data.name.split(' ')[0],
    last_name: data.name.split(' ')[1],
    avatar: picsumPhotos(),
  }
};

const picsumPhotos = () => {
  return 'https://picsum.photos/200?random='+Math.random();

}

import axios from 'axios';

function searchGit(add){
  let address=`https://api.github.com/users/${add}`
  return axios.get(address)
    .then((res) => (
    { data:res.data }
  ))
    .catch(function (error) {
      alert(error);
    });
}
export {searchGit};

import axios from 'axios';
const instance =axios.create({

    baseURL:"https://burger-10ace-default-rtdb.firebaseio.com/"
});
export default instance
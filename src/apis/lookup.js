import axios from 'axios';

export default axios.create({
    baseURL:'https://ep-thor-frontend.extrapreneursindia.com/zuul',
    headers:{
        buId: 1,
        Applicationid: 11101,
        subbuid: 0,
        environment:'dev',
        userlogin:'mayur@gmail.com',
        userId:1
    }
});
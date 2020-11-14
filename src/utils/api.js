import axios from "axios";
const url = 'https://randomuser.me/api/?results=200&nat=us';

export default {
    ApiSearch: function () {
        return axios.get(url)
    }
}
import axios from "axios";

export default function getEmployees (){
    return axios.get('https://randomuser.me/api/?results=20');
};
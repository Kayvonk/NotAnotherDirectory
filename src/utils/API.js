import axios from "axios";

export const getPeople = () => axios.get("https://randomuser.me/api/")
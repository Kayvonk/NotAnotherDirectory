import axios from "axios";

export const getPeople = (count = 20) => axios.get("https://randomuser.me/api/?nat=us&results=" + count)
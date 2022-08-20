import fetch from "unfetch";
import axios from "axios";

const checkStatus = response => {
    if (response.ok) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllStudents = () => {
    return axios.get("api/v1/students");
}
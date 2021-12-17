import axios from "axios";

const { REACT_APP_BASE_URL } = process.env;
const token ='5336d9f8d87dea49f7bacb41762fe2cd0dcf0fd02d8001259fc9a2a9585c8136'

const instance = axios.create({
    baseURL: REACT_APP_BASE_URL,
    headers: {"Authorization" : `Bearer ${token}`}
});
export default instance;
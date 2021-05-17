import APIKit from '../APIKit';
import axios from 'axios';

const cancelTokenSource = axios.CancelToken.source();

export default {
    getAllProduct: (payload) => APIKit.get("/user/getAllProduct", {
        cancelToken: cancelTokenSource.token
    }, payload)
}
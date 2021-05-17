import APIKit from '../APIKit';

export default {
  login: payload => APIKit.post('/user/login', payload),
};

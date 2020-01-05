import httpService from '../utils/httpService';

const getPoem = () =>
    httpService.request({
        method: 'GET',
        path: '/api/poem',
    });

const userRegister = (username, password) => {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ username, password });

    return httpService.request({
        method: 'POST',
        path: '/api/users/register',
        headers,
        body,
    });
};

export { getPoem, userRegister };

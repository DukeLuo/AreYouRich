import httpService from '../utils/httpService';

const getPoem = () => {
    return httpService.request({
        method: 'GET',
        path: '/api/poem',
    });
}

export {
    getPoem,
};
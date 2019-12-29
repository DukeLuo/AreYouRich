import httpService from '../utils/httpService';

const getPoem = () =>
    httpService.request({
        method: 'GET',
        path: '/api/poem',
    });

export { getPoem };

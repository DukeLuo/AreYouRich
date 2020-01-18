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

const userLogin = (username, password) => {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify({ username, password });

    return httpService.request({
        method: 'POST',
        path: '/api/users/login',
        headers,
        body,
    });
};

const getEmergencyLevel = (asset, expense, tokenId) =>
    httpService.request({
        method: 'GET',
        path: '/api/finance/emergency-ability',
        query: {
            liquidAsset: asset,
            dailyNecessaryExpenses: expense,
            tokenId,
        },
    });

const getInterestLevel = (invest, asset, tokenId) =>
    httpService.request({
        method: 'GET',
        path: '/api/finance/interest-bearing-assets-ability',
        query: {
            investAsset: invest,
            totalAsset: asset,
            tokenId,
        },
    });

const getSavingLevel = (saving, salary, tokenId) =>
    httpService.request({
        method: 'GET',
        path: '/api/finance/saving-ability',
        query: {
            monthlySalary: salary,
            monthlySaving: saving,
            tokenId,
        },
    });

export {
    getPoem,
    userRegister,
    userLogin,
    getEmergencyLevel,
    getInterestLevel,
    getSavingLevel,
};

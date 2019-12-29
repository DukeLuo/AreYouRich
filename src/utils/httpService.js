/* eslint-disable no-console */
const apiError = (status, message) => {
    console.error('API Error: ', status, message);

    return Promise.reject({ status, message });
};

const isJson = (response) => {
    const contentType = response.headers.get('content-type');

    return contentType && /^application\/.*json.*/.test(contentType);
};

const isText = (response) => {
    const contentType = response.headers.get('content-type');

    return contentType && /^text\/.*plain.*/.test(contentType);
};

const getErrorMessage = (response) =>
    response
        .text()
        .then((text) => (text ? Promise.resolve(text) : Promise.resolve()));

const handleResponse = (response) => {
    if (!response.ok) {
        return getErrorMessage(response).then((errorMessage) =>
            apiError(response.status, errorMessage)
        );
    }
    if (isJson(response)) {
        return response.json();
    }
    if (isText(response)) {
        return response.text();
    }

    return response.blob();
};

const request = ({ method, headers, body, path, query }) => {
    const options = {};
    let url = path;

    if (method) {
        options.method = method;
    }
    if (headers) {
        options.headers = headers;
    }
    if (body) {
        options.body = body;
    }
    if (query) {
        const params = Object.keys(query)
            .map((k) => `${k}=${query[k]}`)
            .join('&');

        url = url.concat(`?${params}`);
    }

    return fetch(url, { ...options }).then(handleResponse);
};

export default {
    request,
};

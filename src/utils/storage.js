const KEY = 'ARE_YOU_RICH_STORE';

const getData = () => JSON.parse(window.sessionStorage.getItem(KEY)) || {};
const setData = (data) =>
    window.sessionStorage.setItem(KEY, JSON.stringify(data));

export const setStorage = (id, value) => {
    const database = getData();
    database[id] = value;
    setData(database);
};

export const getStorage = (id) => {
    const database = getData();
    if (database[id]) {
        return database[id];
    }
    return null;
};

export const removeStorage = (id) => {
    const database = getData();
    delete database[id];
    setData(database);
};

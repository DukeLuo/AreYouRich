/* eslint-disable no-console */
const ParcelProxyServer = require('parcel-proxy-server');

const server = new ParcelProxyServer({
    entryPoint: 'index.html',
    proxies: {
        '/api/poem': {
            target: 'https://v1.jinrishici.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api/poem': '/all.json',
            },
        },
        '/api': {
            target: 'https://example.com/api',
        },
    },
});

server.bundler.on('buildEnd', () => {
    console.log('Build completed!');
});

server.listen(1234, () => {
    console.log(
        'Parcel proxy server has started, Server running at http://localhost:1234'
    );
});

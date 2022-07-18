const gateway = require('fast-gateway');

const server = gateway({
    routes: [
        {
            prefix: '/cake-catalog',
            target: 'http://localhost:3001'
        },
        {
            prefix: '/cart',
            target: 'http://localhost:3002',
        },
        {
            prefix: '/rating',
            target: 'http://localhost:3003',
        }
    ]
})

server.get('/', (req, res) => res.send({ message: 'api-gateway is requested and working fine' }));

server.start(8080, () => console.log('api-gateway is running on port 8080'));
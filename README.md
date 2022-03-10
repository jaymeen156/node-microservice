Node Micriservice Demo

Main Module
- api-gateway

Sub Module :
- order
- payment

Main Module
Step 1 : cd api-gateway/
Step 2 : npm i
Step 3 : npm start


Order Module
Step 1 : cd order/
Step 2 : npm i
Step 3 : npm start

Payment Module
Step 1 : cd payment/
Step 2 : npm i
Step 3 : npm start


main url run  : http://localhost:8000/

order url :  http://localhost:8000/order/
payment url :  http://localhost:8000/pmt/

set manual in main module: 
<!-- const server = gateway({
    routes: [
        {
            prefix: '/order',
            target: 'http://localhost:8001/',
            hooks: {}
        },
        {
            prefix: '/pmt',
            target: 'http://localhost:8002/',
            hooks: {}
        },
    ]
}) -->
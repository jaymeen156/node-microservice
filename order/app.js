const express = require('express');
const app = express();
const port = 8001;


app.get('/', (req, res) => {

    res.send('order is runing')
});

app.get('/order-list', (req, res) => {
    let response = {
        data: {
            item: [{
                    id: 1,
                    name: 'order 1'
                },
                {
                    id: 2,
                    name: 'order 2'
                }
            ]
        }
    }
    res.status(200).json(response);
});



app.get('/', (req, res) => {
    res.status(200).json({ msg: `orderc aalled` });
});

app.listen(port, () => {
    console.log(`order service is listening ${port}`);
})
const express = require('express');
const { listProducts, getCustomers, createTicket } = require('./odoo');


const app = express();
app.use(express.json());

// serve static files from public folder
app.use(express.static('public'));

// server index.html on the route '/'
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});


app.get('/users', async(req, res) => {
    const customers = await getCustomers();
    res.json(customers); 
});

app.post('/ticket', async(req, res) => {
    await createTicket('Test ticket', 6);
    res.send('Ticket created');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
    }
);

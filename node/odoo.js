const Odoo = require('odoo-api');

const odoo = new Odoo({
    host: process.env.ODOO_HOST,
    port: process.env.ODOO_PORT || 443,
});

let client = null;
async function connect() {
    if (!client) {
        client = await odoo.connect({
            database: process.env.ODOO_DB,
            username: process.env.ODOO_USERNAME,
            password: process.env.ODOO_PASSWORD,
            protocol: process.env.ODOO_PROTOCOL || 'https',
        });
    }
}

async function listProducts() {
    await connect();
    
    const products = await client.searchRead('product.template', [['sale_ok', '=', true]], ['name', 'list_price']);
    return products;
}

async function getCustomers() {
    await connect();
    const customers = await client.searchRead('res.partner', [], {select: ['user_id', 'name', 'email']});
    return customers;
}

async function createTicket(title, userId) {
    await connect();
    await client.create('helpdesk.ticket', {name: title, user_id: userId});
}


module.exports = {
    createTicket,
    listProducts,
    getCustomers,
};
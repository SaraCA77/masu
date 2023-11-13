'use strict';

import bodyParser from 'body-parser';
import express from 'express';
import productsRoute from './route/productsRouter.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '60mb' }));
app.use(bodyParser.urlencoded({ limit: '60mb', extended: false }));

app.use("/get-products", productsRoute);

app.get('/develop/health', (req, res) => res.status(200).send({
    message: 'Service Working.'
}));

app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});
export default app;
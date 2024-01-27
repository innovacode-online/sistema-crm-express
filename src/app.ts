import express from 'express';
import dotenv from 'dotenv';


import AppRoutes from './routes/routes';

const app = express();

dotenv.config();


app.use('/api', AppRoutes);

app.listen( process.env.PORT , () => {
    console.log('Server listening on port ' + process.env.PORT);
});


import express from 'express';

import AppRoutes from './routes/routes';

const app = express();


app.use('/api', AppRoutes);

app.listen(8000, () => {
    console.log('Server listening on port 8000');
});


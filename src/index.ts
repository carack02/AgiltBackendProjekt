import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

import userRoutes from './routes/userRoutes.ts';
app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.');
});

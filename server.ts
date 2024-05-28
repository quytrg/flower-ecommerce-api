import app from './src/app';

const PORT: (number | string) = 3055;

const server = app.listen(PORT, () => {
    console.log(`WSV eCommerce is listening on port ${PORT}`);
})

process.on('SIGINT', () => {
    server.close(() => console.log('Server process exited'));
    // notify.send(ping...)
})
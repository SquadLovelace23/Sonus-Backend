import app from './server';
import config from './config/config';

app.listen(config.app.PORT, () => {
    console.log(`The server is running in port: ${config.app.PORT}`);
});

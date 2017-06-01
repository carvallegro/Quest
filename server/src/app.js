import express from 'express'
import config from 'config'
import cors from 'cors'
import http from 'http'
import post from './routes/post'
import textOverlay from './routes/text_overlay'

console.log('NODE_ENV: ' + config.util.getEnv('NODE_ENV'));
console.log(config.server.port)

const app = express();

var corsOptions = {
    origin: config.front.url
};
app.use(cors(corsOptions));

app.get('/', (req, res) => res.send('Hello World ! Welcome to the  Quest backend :)'));

// Routes settings
const apiRoute = express.Router();

apiRoute.use('/post', post);
apiRoute.use('/text-overlay', textOverlay);

app.use('/api', apiRoute);

let server = http.createServer(app);
server.listen(config.server.port, () => console.log('Quest backend app listening on port ' + config.server.port));

export default app;
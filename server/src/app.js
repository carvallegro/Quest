import express from 'express'
import cors from 'cors'
import http from 'http'
import post from './routes/post'
import textOverlay from './routes/text_overlay'

const app = express();
app.use(cors());

app.get('/', (req, res) => res.send('Hello World ! Welcome to Quest backend :)'));

// Routes settings
const apiRoute = express.Router();
apiRoute.use('/post', post);
apiRoute.use('/text-overlay', textOverlay);

app.use('/api', apiRoute);

let server = http.createServer(app);
server.listen(3100, () => console.log('Quest backend app listening on port 3100!'));

export default app;
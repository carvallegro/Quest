/**
 * Created by vcarmignac on 23/5/17.
 */
import express from 'express'

import data from './data_post.json';

const postRoute = express.Router();

postRoute.get('/', (req, res) => {
    res.json(data);
});

export default postRoute;
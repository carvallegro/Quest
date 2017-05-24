/**
 * Created by vcarmignac on 24/5/17.
 */
import express from "express";

import data from './data_text_overlay.json';

const textOverlayRoute = express.Router();

textOverlayRoute.get('/', (req, res) => {
    res.json(data);
});

export default textOverlayRoute;
import express from "express";
import ReactDOM from 'react-dom/server';
import ReactDOMServer from 'react-dom/server';
import { App } from "../App";
import { indexTemplate } from "./indexTemplate";
import axios from "axios";
import compression from 'compression';



const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

const app=express();

if (!IS_DEV) {
    app.use(compression());
  }

app.use('/static', express.static('./dist/client'));


app.get('*', (req, res) => {
    res.send(
        indexTemplate(ReactDOMServer.renderToNodeStream(App())),

    );
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
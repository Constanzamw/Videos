import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import config from './config'
import videosRoutes from "./routes/videos.routes"


const app = express()


app.set("PORT", config.PORT);


app.use(morgan("dev"));
app.use(cors({
  origin: 'https://videos-beige-alpha.vercel.app/'
}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use(videosRoutes);




export default app;
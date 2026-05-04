    import express from 'express';
    import cors from 'cors';
    import 'dotenv/config';
    import connectDB from './config/mongodb.js';
    import connectCloudinary from './config/cloudinary.js'
    import userRouter from './routes/userRoute.js'
    import productRouter from './routes/productRoute.js';
    import { listProducts } from './controllers/productController.js';

    //App config

    const app = express();
    const port = process.env.PORT || 4000;
    connectDB();
    connectCloudinary();

    //Middlewares   
    app.use(cors());
    app.use(express.json());

    //api endpoints

    app.use('/api/user', userRouter)
    // Public catalog: must stay unauthenticated for the storefront (register before router to avoid accidental auth middleware on the router).
    app.get('/api/product/list', listProducts)
    app.use('/api/product', productRouter)
    app.get('/', (req, res) => {
        res.send('api working')
    })

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
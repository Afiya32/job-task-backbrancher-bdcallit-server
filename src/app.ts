import express,{ Application, Request, Response } from "express";
import cors from "cors"
import notFoundHandler from "./middleware/notFound.middleware";
import errorHandler from "./middleware/error.middleware";
import UserRouter from "./modules/Users.modules/user.routes";




const app:Application = express();
app.use(cors());
app.use(express.json());


// Routes
app.use('/api/users', UserRouter);
// app.use('/api/products', productRouter);
// app.use('/api/carts', cartRouter);

// // Error Handler Middleware


app.get("/",(req:Request,res:Response)=>{
    res.send("welcome to Back Branch server ")
})

// Error Handler Middleware

app.use(notFoundHandler); // Handle 404 Not Found errors  
app.use(errorHandler)

export default app;



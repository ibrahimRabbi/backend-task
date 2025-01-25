import express from 'express';
import cors from 'cors';
import envData from './app/config/config';
import mongoose from 'mongoose'

import { globalError } from './app/middleware/globalError';
import notFounds from './app/middleware/notFound';
import { userRoute } from './app/module/users/user.route';


const app = express();


app.use(cors());
app.use(express.json());



app.use('/user',  userRoute)


app.use(globalError)
app.use(notFounds)

async function main() {
  await mongoose.connect(envData.MONGO_URI as string);
   
  app.listen(envData.PORT, () => {
    console.log('Server is running on port 5000');
  });
}

main()



import mongoose , { ConnectOptions}from 'mongoose'
import config from './src/config'

(async () => {
  try {
      console.time("MongoDB Connection");
      const db = await mongoose.connect(config.MONGO_URI);
      console.timeEnd("MongoDB Connection");
      console.log('Connected to MongoDB:', db.connection.name);
  } catch (error) {
      console.error(error)
  }
})();



// (async ()=>{
//   try {
//     const db =  await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,) 
//     console.log ('database is connected to:', db.connection.name)
//   } catch (error) {
//     console.error(error)
//   }
// })()


import mongoose , { ConnectOptions}from 'mongoose'
import config from './config'


// (async ()=>{
//   try {
//     const db =  await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`,) 
//     console.log ('database is connected to:', db.connection.name)
//   } catch (error) {
//     console.error(error)
//   }
// })()
(async () => {
  try {
    await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Puedes agregar más opciones según tus necesidades
    } as ConnectOptions);
    console.log('Database is connected to:', mongoose.connection.name);
  } catch (error) {
    console.error(error);
  }
})();

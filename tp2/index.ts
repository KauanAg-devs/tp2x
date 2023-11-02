import express from 'express'
import mongoose from 'mongoose'
import routes from './controllers/routesControllers';


const app = express();
const routesControllers = new routes()
app.use(express.json());



mongoose.connect('mongodb://127.0.0.1:27017/mongo')
 .then(()=>{
  app.post('/getUser', routesControllers.getRoute)
  app.post('/post', routesControllers.postRoute)
  app.put('/put', routesControllers.updateRoute)
  app.delete('/delete', routesControllers.deleteRoute)  

app.use((req,res)=>{
    res.status(404).json(`route doesn't exists.`)
})

app.listen(3000, ()=>console.log(`server listening at PORT ${3000}`))

})
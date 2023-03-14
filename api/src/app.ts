import Express from 'express'
import cors from 'cors'
import foodRouter from './routes/food'

const app = Express()
app.use(Express.json())
app.use(cors())

app.use("/food", foodRouter)

export default app
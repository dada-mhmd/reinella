import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middlewares/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
const port = process.env.PORT || 5000

// connect database
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use(express.json())
app.use('/api/products', productRoutes)

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))

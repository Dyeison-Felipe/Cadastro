import  'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { AppDataSource } from './database/data-source'
import routers from './app/routes/routes'

const app =express()

app.use(cors())

const PORT = 3333

app.use(express.json())

// quando chega uma requisição entra nessa parte de rotas
app.use(routers)

AppDataSource.initialize().then(async () => { // verifica se ha inicialização com banco de dados
  console.log("Sucessfull connect to database")
  app.listen( PORT , () => { // se tiver conexão com banco de dados, inicia na port 3333
    console.log(`Server is running in the port ${PORT}`)
  })
})
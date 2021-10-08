const functions = require("firebase-functions");
const admin= require('firebase-admin')
const serviceAccount = require("./credentials.json")
const express= require('express')

const app = express()
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
app.get('/hello-world',(req,res) =>{
    return res.status(200).json({message:'hello world'})
})
app.use(require('./routes/products.routes'))

exports.app = functions.https.onRequest(app);


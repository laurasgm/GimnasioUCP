import { Router } from 'express'
import {
  createUserGym,
  listUsers,
  updateUser,
  deleteUser,
  getUser,
  payMonth
} from '../contoller/user-gym'
import { userExist } from '../middlewares/user-gym'
const router = Router()
const multer  = require('multer');
const path = require('path')
const fs = require('fs')

// Rutas disponibles para la administración de usuarios
router.post('/user', userExist, createUserGym)
router.get('/users', listUsers)
router.put('/user', updateUser)
router.delete('/user/:dni', deleteUser)
router.get('/user/:dni', getUser)
router.post('/pay/months/:dni', payMonth)


//subir recibo de pago 
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    let pathImage = path.join(__dirname, '..', '..', 'uploads', file.originalname + '.png')
    console.log(pathImage)
    if(fs.existsSync(pathImage))
    {
      console.log("hola");
      fs.unlink(pathImage);
    }
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

router.post('/reciboPago', upload.single('file'), (req, res) => {
  res.status(200).send({ message : 'File upload' })
});


export default router

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
    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage });

router.post('/reciboPago', upload.single('file'), (req, res) => {
  res.status(200).send({ message : 'File upload' })
});


router.get('/pathRecibo/:dni', 
  function getPathImage (req, res){
    let { dni } = req.params
    let pathImage = path.join(__dirname, '..', '..', 'uploads', dni + '.png')
    return res.status(200).send({
      path: pathImage,
    })
  });


export default router

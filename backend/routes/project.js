const express =require('express')
const router = express.Router()

const Project= require('../controllers/Project')

router.post('/project',Project.project)

module.exports = router
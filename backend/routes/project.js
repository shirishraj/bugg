const express =require('express')
const router = express.Router()

const Project= require('../controllers/Project')

router.post('/project',Project.project)
router.get('/projects', Project.getProjects)

module.exports = router;
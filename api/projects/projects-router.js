// Write your "projects" router here!
const route = require('express').Router();

const Projects = require('./projects-model');

router.get('/', (req, res) => {
    Projects.get()
    .then()
    .catch()
})

router.get('/:id', (req, res) => {
    res.json()
})

router.post('/', (req, res) => {
    Projects.insert()
    .then()
    .catch()
})

router.put('/:id', (req, res) => {
    Projects.update()
    .then()
    .catch()
})

router.delete('/:id', (res, req) => {
    Projects.remove()
    .then()
    .catch()
})

router.get('/:id/actions', (req, res) => {
    Projects.getProjectActions()
    .then()
    .catch()
})

module.exports = router
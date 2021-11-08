// Write your "projects" router here!
const express = require('express')

const { validateProjectId, validateProject} = require('./projects-middleware')

const Projects = require('./projects-model');

const router = express.Router()

router.get('/', (req, res) => {
    Projects.get(req.query)
    .then(projects => {
        res.status(200).send(projects || [])
    })
    .catch(err => res.status(500).send(err))
})

router.get('/:id', validateProjectId, (req, res) => {
    Projects.get(req.params.id)
    .then(project => {
        res.status(200).send(project)
    })
    .catch(err => res.status(500).send(err))
})

router.post('/', validateProjectId, validateProject, (req, res) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).send(project)
    })
    .catch(err => res.status(500).send(err))
})

router.put('/:id', validateProjectId, validateProject, (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(project => {
        res.status(200).send(project)
    })
    .catch(err => res.status(500).send(err))
})

router.delete('/:id', validateProjectId, (res, req) => {
    Projects.remove(req.params.id)
    .then(() => {
        res.status(200).end();
    })
    .catch(err => res.status(500).send(err))
})

router.get('/:id/actions', validateProjectId, (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
        rea.status(200).send(actions  || [])
    })
    .catch(err => res.status(500).send(err))
})

module.exports = router
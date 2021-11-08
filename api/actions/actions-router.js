// Write your "actions" router here!
// Write your "projects" router here!
const route = require('express').Router();

const Actions = require('./actions-model');

router.get('/', (req, res) => {
    Actions.get()
    .then()
    .catch()
})

router.get('/:id', (req, res) => {
    res.json()
})

router.post('/', (req, res) => {
    Actions.insert()
    .then()
    .catch()
})

router.put('/:id', (req, res) => {
    Actions.update()
    .then()
    .catch()
})

router.delete('/:id', (res, req) => {
    Actions.remove()
    .then()
    .catch()
})

module.exports = router
// Write your "actions" router here!
const express = require('express');

const { validateActionId, validateAction } = require('./actions-middlware');
const { validateProjectId } = require('../projects/projects-middleware')

const Actions = require('./actions-model');

const router = express.Router();

router.get('/', (req, res) => {
    Actions.get()
    .then(actions => {
        res.status(200).send(actions || []);
    })
    .catch(() => {
        res.status(500).send({ message: 'cannot get actions' });
    });
})

router.get('/:id', validateActionId, (req, res) => {
    Actions.get(req.params.id)
    .then(action => {
        res.status(200).send(action);
    })
    .catch(() => {
        res.status(500).send({ message: 'cannot get actions' });
    });
})

router.post('/', validateAction, validateActionId, (req, res) => {
    Actions.insert(req.body)
    .then(({id}) => {
        Actions.get(id);
    })
    .then((action) => {
        res.status(201).send(action)
    })
    .catch((err) => {
        res.status(500).send(err);
    });
})

router.put('/:id', validateProjectId, validateActionId, validateAction, (req, res) => {
    Actions.update(req.params.id, req.body)
        .then(updatedAction => {
            res.status(200).json(updatedAction)
        })
        .catch(() => {
            res.status(500).send({ message: 'cannot get action' });
        });
})

router.delete('/:id', validateActionId, (res, req) => {
    Actions.remove(req.params.id)
    .then(() => {
        res.status(204).send({ message: 'action removed' });
    })
    .catch(() => {
        res.status(500).send({ message: 'cannot get action' });
    });
})

module.exports = router
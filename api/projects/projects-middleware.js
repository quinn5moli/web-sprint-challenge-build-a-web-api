// add middlewares here related to projects
const Projects = require('./projects-model')

function logger(req, res, next) {
    console.log(`[${req.method}] ${req.url} `, Date())
    next()
}

function validateProjectId(req, res, next) {
    Projects.get(req.params.id)
        .then(project => {
            if(!project) {
                res.status(404).json({message: "project not found"})
            } else {
                req.project = project
                next()
            }
        })
        .catch(() => {
            res.status(500).json({ message: "error getting project"})
        })
}

function validateProject(req, res, next) {
    if(!req.body.name || !req.body.description || !Object.keys(req.body).includes('completed')) {
        res.status(400).json({message: "project missing name, description, or completed"})
    } else {
        next()
    }
}

module.exports = { validateProjectId, validateProject}
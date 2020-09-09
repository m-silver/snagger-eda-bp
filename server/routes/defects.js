const express = require('express')
const router = express.Router()

const db = require('../db')

// api/v1/defects
router.get('/', (req, res) => {
  db.getDefects()
    .then(defects => {
      res.json(widgets)
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

router.post('/', (req, res) => {
  db.addDefect(req.body)
    .then(ids => {
      res.status(201).json({
        msg: `Defect id ${ids[0]} was added. `
      })
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
})

module.exports = router
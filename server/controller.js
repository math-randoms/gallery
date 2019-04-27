// const db = require('../database/index.js'); //mongodb
const db = require('../database/Model.js'); //postgress

const controller = {
  getByPhotoId: (req, res) => {
    db.findAll({
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => res.status(404).send(err));
  },

  getAll: (req, res) => {
    db.findAll()
      .then(data => res.status(200).send(data))
      .catch(err => res.status(404).send(err));
  },

  post: (req, res) => {
    db.create(req.body)
      .then(() => res.status(201).send('posted'))
      .catch(err => console.error(err));
  },

  deleteByPhotoId: (req, res) => {
    let { id } = req.params;
    db.destroy({ where: { id } })
      .then(() => res.status(203).send('deletedID'))
      .catch(err => console.error(err));
  },

  deleteByAllPropId: (req, res) => {
    let { prop_id } = req.params;
    db.destroy({ where: { prop_id } })
      .then(() => res.status(203).send('deletedProp'))
      .catch(err => console.error(err));
  },

  update: (req, res) => {
    let { id } = req.params;
    db.update(req.body, { where: { id } })
      .then(() => res.status(202).send('updated'))
      .catch(err => console.error(err));
  },

  getPropId: (req, res) => {
    let { prop_id } = req.params;
    db.findAll({ where: { prop_id: prop_id } })
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  }
};

module.exports = controller;

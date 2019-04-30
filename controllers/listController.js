const db = require("../models");

// Defining methods for the listController
module.exports = {
  findAll: function(req, res) {
    db.List
      .find(req.query)
      .sort({ date: -1 })
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.List
      .findById(req.params.id)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.List
      .create(req.body)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.List
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.List
      .findById({ _id: req.params.id })
      .then(dbResult => dbResult.remove())
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  }
};
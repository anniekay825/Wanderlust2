const db = require("../models");

// Defining methods for the travelerController
module.exports = {
  findAll: function(req, res) {
    db.Traveler
      .find(req.query)
      .sort({ date: -1 })
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Traveler
      .findById(req.params.id)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Traveler
      .create(req.body)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Traveler
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Traveler
      .findById({ _id: req.params.id })
      .then(dbResult => dbResult.remove())
      .then(dbResult => res.json(dbResult))
      .catch(err => res.status(422).json(err));
  }
};

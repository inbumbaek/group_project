const Plant = require("../models/plant.model");

const createNew = (request, response) => {
  Plant.create(request.body)
    .then((newPlant) => {
      response.json({ newPlant });
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};

const getAll = (request, response) => {
  Plant.find()
    .then((all) => {
      response.json(all);
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};

const getOne = (request, response) => {
  Plant.findOne({ _id: request.params.id })
    .then((queriedPlant) => {
      response.json(queriedPlant);
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};

const update = (request, response) => {
  Plant.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
    runValidators: true,
  })
    .then((updated) => {
      response.json({ updated });
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};
const destroy = (request, response) => {
  Plant.deleteOne({ _id: request.params.id })
    .then((destroy) => {
      response.json({ destroy });
    })
    .catch((err) => {
      response.status(400).json({ err });
    });
};

module.exports = { createNew, getAll, getOne, update, destroy };

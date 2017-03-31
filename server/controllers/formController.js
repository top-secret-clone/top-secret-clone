//NOTE Convert backend code to es6 if possible.

var Form = require('../models/formModel');

module.exports = {
  postForm: function(req, res, next){
    Form.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      newForm = result.toObject();
      res.status(200).json(newForm);
    });
  }
};

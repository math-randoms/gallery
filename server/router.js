const controller = require('./controller');
const express = require('express');
const router = express.Router();

router
  .route('/photos/:id')
  .get(controller.get)
  .delete(controller.delete)
  .put(controller.update);

router
  .route('/')
  .get(controller.getAll)
  .post(controller.post);

router
  .route('/property/:prop_id')
  .get(controller.getPropId)
  .delete(controller.deleteByPropId)
  .put(controller.updatePropId);
module.exports = router;

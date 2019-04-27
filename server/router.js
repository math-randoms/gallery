const controller = require('./controller');
const express = require('express');
const router = express.Router();

router
  .route('/photos/:id')
  .get(controller.getByPhotoId)
  .delete(controller.deleteByPhotoId)
  .put(controller.update);

router
  .route('/')
  .get(controller.getAll)
  .post(controller.post);

router
  .route('/property/:prop_id')
  .get(controller.getPropId)
  .delete(controller.deleteByAllPropId);

module.exports = router;

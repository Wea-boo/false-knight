const express = require('express');
const router = express.Router();
const characterController = require('../controllers/charController');
const { validateCharacter, validateCharacterUpdate } = require('../middlewares/validation');

router.use((req, res, next) => {
    console.log('Request Body at start:', req.body);
    next();
  });

router.get('/', characterController.getCharacters);
router.get('/:id', characterController.getCharacter);
router.post('/', validateCharacter, characterController.createCharacter); // validation middleware
router.put('/:id', validateCharacterUpdate, characterController.updateCharacter); // validation middleware
router.delete('/:id', characterController.deleteCharacter);

module.exports = router;
const characterService = require('../services/charServices');

exports.getCharacters = async (req, res, next) => {
  try {
    const { limit = 10, cursor } = req.query;
    const charactersData = await characterService.getCharacters(parseInt(limit), cursor);
    res.status(200).json(charactersData);
  } catch (error) {
    next(error);
  }
};

exports.getCharacter = async (req, res, next) => {
  try {
    const character = await characterService.getCharacter(req.params.id);
    if (!character) {
        const error = new Error('Character not found');
        error.status = 404;
        throw error;
    }
    res.status(200).json(character);
  } catch (error) {
    next(error);
  }
};

exports.createCharacter = async (req, res, next) => {
  try {
    
    const character = await characterService.createCharacter(req.body);
    res.status(201).json(character);
    // no need to verify if the character already exists, we can easily have two characters that are identical but in a way "different"
  } catch (error) {
    console.log(req.body);
    next(error);
  }
};

exports.updateCharacter = async (req, res, next) => {
  try {
    const character = await characterService.updateCharacter(req.params.id, req.body);
    if (!character) {
        const error = new Error('Character not found');
        error.status = 404;
        throw error;
    }
    // Send response back to client
    res.status(200).json(character);
  } catch (error) {
    next(error);
  }
};

exports.deleteCharacter = async (req, res, next) => {
  try {
    const character = await characterService.deleteCharacter(req.params.id);
    if (!character) {
        const error = new Error('Character not found');
        error.status = 404;
        throw error;
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};


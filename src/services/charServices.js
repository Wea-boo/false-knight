const Character = require('../models/characters');

// charServices.js: explanation...
// cursor-based pagination is a technique that allows you to retrieve a large number of records in smaller chunks (Scalable solution)
// The cursor counts as a reference to the last record in the previous chunk and a starting point for the next chunk. Limit is the number of records to retrieve in each chunk.
async function getCharacters(limit, cursor) {
    const query = cursor ? { _id: { $gt: cursor } } : {};
    const characters = await Character.find(query)
        .sort({ _id: 1 }) // 1 means ascending order
        .limit(limit) // limit is the number of records to retrieve in each chunk
        .exec();

    const nextCursor = characters.length > 0 ? characters[characters.length - 1]._id : null; // next cursor = last element of the list, and will be the first element of the next list

    return {
        characters,
        nextCursor,
    };
}

async function getCharacter(characterId) {
    return await Character.findById(characterId);
}

async function createCharacter(characterData) {
    const newCharacter = new Character(characterData);
    return await newCharacter.save();
}

async function updateCharacter(characterId, characterData) {
    return await Character.findByIdAndUpdate(characterId, characterData, { new: true });
}

async function deleteCharacter(characterId) {
    return await Character.findByIdAndDelete(characterId);
}

module.exports = {
    getCharacters,
    getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter,
};
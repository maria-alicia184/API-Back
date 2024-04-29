const {getVocabularioN4} = require('../../controllers/vocabulario/vocabularioN4.controller');

exports.vocabularioN4Routes = (app) => {
    app.get('/vocabularioN4', getVocabularioN4)
}
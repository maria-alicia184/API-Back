const {getKanjiN4} = require('../../controllers/kanjis/kanjiN4.controller');

exports.kanjiN4Routes = (app) => {
    app.get('/kanjiN4', getKanjiN4)
}
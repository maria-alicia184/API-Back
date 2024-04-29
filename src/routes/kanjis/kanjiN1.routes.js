const {getKanjiN1} = require('../../controllers/kanjis/kanjiN1.controller');

exports.kanjiN1Routes = (app) => {
    app.get('/kanjiN1', getKanjiN1)
}
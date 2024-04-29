const {getKanjiN3} = require('../../controllers/kanjis/kanjiN3.controller');

exports.kanjiN3Routes = (app) => {
    app.get('/kanjiN3', getKanjiN3)
}
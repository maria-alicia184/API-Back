const {getKanjiN2} = require('../../controllers/kanjis/kanjiN2.controller');

exports.kanjiN2Routes = (app) => {
    app.get('/kanjiN2', getKanjiN2)
}
const {getKanjiN5} = require('../../controllers/kanjis/kanjiN5.controller');

exports.kanjiN5Routes = (app) => {
    app.get('/kanjiN5', getKanjiN5)
}

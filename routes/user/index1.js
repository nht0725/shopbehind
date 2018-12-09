var query = require('./query');
var fn = function(req, res, next) {
    query('select * from shop', function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err });
        }
        res.json({ code: 1, data: result });
    })
}

module.exports = {
    fn: fn
}
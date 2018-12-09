var query = require('./query');
var fn = function(req, res, next) {
    var pagenum = req.query.pagenum;
    var num = req.query.num;
    var total = 0;
    query('select count(*) from shop', function(err, result) {
        if (err) {
            return res.json({ code: 0, msg: err });
        }
        total = Math.ceil((result[0]['count(*)']) / num);
        // res.json({ code: 1, data: result });
        queryUserlist(total);
    })

    function queryUserlist() {
        var start = (pagenum - 1) * num;
        var sqlStr = `select * from shop order by id limit ${start},${num}`;
        query(sqlStr, function(err, result) {
            if (err) {
                res.json({ code: 0, msg: err });
            } else {
                // console.log(result);
                res.json({ code: 1, data: result, total: total });
            }
        })
    }
}

module.exports = {
    fn: fn
}
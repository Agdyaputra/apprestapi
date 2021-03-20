'use strich';

exports.ok = function(value, res){
    var data = {
        'status': 200,
        'value': values
    };

     res.json(data);
     res.end();
}
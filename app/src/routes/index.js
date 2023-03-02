/*
* Aggregates all the route modules in the 'routes' directory.
*/

var fs = require('fs');

module.exports = function(app, opts){
    fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "index.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app, opts);
    });
}

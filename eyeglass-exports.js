var simplysass = require('./index');

module.exports = function(eyeglass, sass){
    return {
        sassDir: simplysass.includePaths[0]
    }
}

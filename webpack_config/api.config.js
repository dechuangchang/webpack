const path = require('path');
let type = null;
if(process.env.npm_lifecycle_script.indexOf('development')>1){
    console.log('development---api-->');
    type = 'development';
}else if(process.env.npm_lifecycle_script.indexOf('production')>1){
    console.log('production---api-->')
    type = 'production';
}

const apiConfig = {
    devtool: type == 'production' ? 'eval':'source-map',
    entry: {
        index: './app/js/index.js'
        
    },
    outputFilename: type == 'production' ? './js/[name][hash].min.js':'./js/[name].js',
    target: 'http://112.126.91.237:8888',
    host: '127.0.0.1',
    port: '8002',
    disableHostCheck: type == 'production' ? false : true
};
module.exports = apiConfig;

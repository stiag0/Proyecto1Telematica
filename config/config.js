var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'test';

var config = {
  development: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'articulos'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/articulosem-development'
  },

  test: {
//    baseUrl: "/nodeArticulos/",
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'articulos'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://mongo-server/articulosem-test'
  },

  production: {
    baseUrl: "/",
    root: rootPath,
    app: {
      name: 'articulos'
    },
    port: process.env.PORT || 3000,
    //db: 'mongodb://emontoya:*******@ds163397.mlab.com:63397/emontoya'
     db: 'mongodb://stiago:2computador*@ds143461.mlab.com:43461/gps-tracker-proyecto1'
  }
};

module.exports = config[env];

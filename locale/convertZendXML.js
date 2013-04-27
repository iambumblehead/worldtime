var DOMParser = require('xmldom').DOMParser,
    simpleConvertXML = require('./simpleconvert-xml/simpleConvertXML'),
    fs = require('fs'),
    path = require('path');


var XMLDir = './ZendXML';
var JSONDir = './ZendXML';

var converter = {
  parseFile : function (file, fn) {
    fs.readFile(input, 'ascii', function (err, fd) {
    });    
  },

  // read the xml directory...
  parseFileArr : function (fileArr, fn) {


  },

  convertFilename : function (filename, outputDir, fn) {
    var xmlNode, obj;

    fs.readFile(filename, 'utf8', function (err, fd) {
      if (err) return fn(err);

      console.log('[...] converting: ' + filename);
      xmlNode = new DOMParser().parseFromString(fd);
      obj = simpleConvertXML.getXMLAsObj(xmlNode);

      fn(err, obj);
    });        
  },

  convertFilenameArr : function (filenameArr, outputDir, fn) {
    var that = this;
    (function next(x, filename) {
      if (!x--) return fn(null, 'success');
      filename = filenameArr[x];

      that.convertFilename(filename, outputDir, function (err, res) {
        if (err) return fn(err);

        
        next(x);
      });
    }(filenameArr.length));
  },

  // get base locale files, such as 'en.xml' and 'es.xml'
  getBaseFilenameArr : function (fn) {
    fs.readdir(XMLDir, function(err, filenameArr) {
      if (err) return fn(err);    
      
      filenameArr = filenameArr.filter(function (filename) {
        return (filename.match(/^\w\w\.xml/)) ? true : false;
      });      

      filenameArr = filenameArr.map(function (filename) {
        return path.join(XMLDir, filename);
      });
      
      fn(null, filenameArr);
    });    
  },

  getFilenameArr : function (fn) {
    fs.readdir(XMLDir, function(err, filenameArr) {
      if (err) return fn(err);    
      filenameArr = filenameArr.map(function (filename) {
        return path.join(XMLDir, filename);
      });
      
      fn(null, filenameArr);
    });  
  },

  convertXML : function (fn) {
    var that = this, 
        baseFilenameArr;
    that.getBaseFilenameArr(function (err, baseFilenameArr) {
      if (err) return fn(err);

      that.convertFilenameArr(baseFilenameArr, JSONDir, function (err, res) {
        console.log('done');        
      });
        /*
      baseFilenameArr = filenameArr.filter(function (filename) {
        return (filename.match(/^\w\w\.xml/)) ? true : false;
      });

      console.log(baseFilenameArr);
      
      that.convertFiles()
      (function next(x, filename) {
        if (!x--) return fn(null, 'success');
        filename = filenameArr[x];
        
        
        
        next(x);
      }(filenameArr.length));
         */
    });
  }  
};


converter.convertXML(function (err, res) {
  if (err) return console.log(err);
  console.log('[...] finished.');
});



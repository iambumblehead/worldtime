// Filename: worldtime.js  
// Timestamp: 2013.04.10-19:13:10 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: simpletime.js

var SimpleTime = require('simpletime');

var WorldTime = module.exports = (function () {

  var simpleTime = Object.create(SimpleTime), 
      worldTime, worldTimeFn;

  worldTime = {
    localeMap : null,
    localeMethods : {
      map : {},
      setMap : function (lang, map, fn) {
        this.localeMap = map;
        fn(null, this);        
      }
    },
    isTest : function () { return true; },
    setLang : function () { },
    worldTimeFn : function () {

    }
  };

  worldTimeFn = function (lang) {
    var that = Object.create(worldTime);
    that.setLang(lang);
    that.map = {};
    return that;
  };

  for (var o in worldTime) {
    if (worldTime.hasOwnProperty(o)) {
      worldTimeFn[o] = worldTime[o];
    }
  }

  return worldTimeFn;

}());

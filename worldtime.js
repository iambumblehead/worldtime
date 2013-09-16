// Filename: worldtime.js  
// Timestamp: 2013.09.15-18:59:01 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: simpletime.js

var simpletime = require('simpletime');

var worldtime = 
  ((typeof module === 'object') ? module : {}).exports = (function () {

  var worldTime = Object.create(simpletime);

  worldTime.langCache = {};
  worldTime.localeObj = {};

  worldTime.set = function (langObj, langId) {
    var that = this;
    that.langCache[langId] = langObj;
    return that.worldTime;
  };

  // the following calendars are supported
  //    "buddhist", 
  //    "chinese", 
  //    "coptic", 
  //    "dangi",
  //    "ethiopic", 
  //    "ethiopicAmeteAlem",
  //    "gregorian",
  //    "hebrew", 
  //    "indian",
  //    "islamic", 
  //    "islamicCivil", 
  //    "japanese",
  //    "persian", 
  //    "roc"
  worldTime.getCalendarObj = function (calType) {
    var formats = this.localeObj.dates.calendars;
    calType = calType || formats['default'];
    if (calType) {
      return this.localeObj.dates.calendars[calType];
    }
  };

  // the following calendar units are supported (for each calendar)
  //    "months",
  //    "days",
  //    "quarters",
  //    "eras",
  //    "dateFormats",
  //    "timeFormats",
  //    "dateTimeFormats",
  //    "fields"      
  worldTime.getCalendarUnit = function (unit) {
    var calendarObj = this.getCalendarObj('gregorian');
    return calendarObj[unit];
  };

  // months
  worldTime.getMonthNameFormatObj = function(type) {
    return this.getCalendarUnit('months').format[type];
  };
  // month, abbreviated
  worldTime.getNumericMonthNameAbbrev = function(monthNum) {
    return this.getMonthNameFormatObj('abbreviated')[monthNum];  
  };
  // month, wide
  worldTime.getNumericMonthNameWide = function(monthNum) {
    return this.getMonthNameFormatObj('wide')[monthNum];
  };  

  // days
  worldTime.getDayNameFormatObj = function(type) {
    return this.getCalendarUnit('days').format[type];
  };
  // day, abbreviated
  worldTime.getStrDayNameAbbrev = function(dayNum) {
    return this.getDayNameFormatObj('abbreviated')[dayNum];  
  };
  // day, wide
  worldTime.getStrDayNameWide = function(dayNum) {
    return this.getDayNameFormatObj('wide')[dayNum];
  };  

  // get month 'name' from date
  worldTime.getDateMonthNameAbbrev = function (d) {
    var dateObj = this.isDateObj(d) ? d : new Date(),
        monthNum = dateObj.getMonth() + 1;
    return this.getNumericMonthNameAbbrev(monthNum);  
  };
  worldTime.getDateMonthNameWide = function (d) {
    var dateObj = this.isDateObj(d) ? d : new Date(),
        monthNum = dateObj.getMonth() + 1;
    return this.getNumericMonthNameWide(monthNum);  
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if no format is specified, locale provided default is used
  worldTime.getDateFormat = function (defaultFormat) {
    var formats = this.getCalendarObj('gregorian').dateFormats;
    defaultFormat = defaultFormat || formats['default'];
    if (defaultFormat) {
      return formats[defaultFormat].dateFormat.pattern;
    }
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if no format is specified, locale provided default is used
  worldTime.getTimeFormat = function (defaultFormat) {
    var formats = this.getCalendarObj('gregorian').timeFormats;
    defaultFormat = defaultFormat || formats['default'];
    if (defaultFormat) {
      return formats[defaultFormat].timeFormat.pattern;
    }
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if !format, locale provided default is used
  worldTime.getFormattedDate = function (date, format) {
    var that = this,
        dateFormat = that.getDateFormat(format);

    return that.applyFormatDate(date, dateFormat);
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if !format, locale provided default is used
  worldTime.getFormattedTime = function (date, format) {
    var that = this,
        dateFormat = that.getTimeFormat(format);

    return that.applyFormatDate(date, dateFormat);  
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if !format, locale provided default is used
  worldTime.extractFormattedDate = function (date, format) {
    var that = this,
        dateFormat = that.getDateFormat(format);

    return that.extractDateFormatted(date, dateFormat);
  };


  // get abbreviated months array, useful for calendar applications
  worldTime.getBaseMonthsArr = function (type) {
    var m = this.getMonthNameFormatObj(type);
    return [m['1'], m['2'], m['3'], m['4'],
            m['5'], m['6'], m['7'], m['8'],
            m['9'], m['10'], m['11'], m['12']];
  };

  // get abbreviated days array, useful for calendar applications  
  worldTime.getBaseDaysArr = function (type) {
    var d = this.getDayNameFormatObj(type);
    return [d['sun'], d['mon'], d['tue'], d['wed'], 
            d['thu'], d['fri'], d['sat']];
  };


  return (function () {
    var fn = function (langObj, langId) {
      var that = Object.create(worldTime);
      worldTime.set(langObj, langId);
      that.langCache[langId] = langObj;
      that.localeObj = langObj;
      return that;
    };

    fn.prototype = worldTime;

    return function (langObj, langId) {
      return new fn(langObj, langId);
    };
  }());

}());

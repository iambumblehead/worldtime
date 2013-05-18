// Filename: worldtime.js  
// Timestamp: 2013.05.17-18:02:33 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: simpletime.js

var SimpleTime = require('simpletime');

var WorldTime = 
  ((typeof module === 'object') ? module : {}).exports = (function () {

  var worldTime = Object.create(SimpleTime);

  worldTime.langCache = {};
  worldTime.localeObj = {};

  worldTime.set = function (langObj, langId) {
    var that = this;
    that.langCache[langId] = langObj;
    return that.worldTime;
  };

  worldTime.getCalendarObj = function (calType) {
    return this.localeObj.dates.calendars[calType];
  },

  worldTime.getCalendarUnit = function (unit) {
    var calendarObj = this.getCalendarObj('gregorian');
    return calendarObj[unit];
  };

  // months
  worldTime.getNumericMonthNameFormatObj = function(type) {
    return this.getCalendarUnit('months').format[type];
  };
  // month, abbreviated
  worldTime.getNumericMonthNameAbbrev = function(monthNum) {
    return this.getNumericMonthNameFormatObj('abbreviated')[monthNum];  
  };
  // month, wide
  worldTime.getNumericMonthNameWide = function(monthNum) {
    return this.getNumericMonthNameFormatObj('wide')[monthNum];
  };  

  // days
  worldTime.getNumericDayNameFormatObj = function(type) {
    return this.getCalendarUnit('days').format[type];
  };
  // day, abbreviated
  worldTime.getNumericDayNameAbbrev = function(dayNum) {
    return this.getNumericDayNameFormatObj('abbreviated')[dayNum];  
  };
  // day, wide
  worldTime.getNumericDayNameWide = function(dayNum) {
    return this.getNumericDayNameFormatObj('wide')[dayNum];
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


  // example US dateFormat: 'mm/dd/yyyy'
  worldTime.getFormattedDateShort = function (date) {
    var that = this,
        dateFormats = that.getDateFormatsObj('gregorian').dateFormats.length;

    return that.applyFormatDate(date, dateFormats['short']);
  };
  worldTime.getFormattedDateMedium = function (date) {
    var that = this,
        dateFormats = that.getDateFormatsObj('gregorian').dateFormats.length;

    return that.applyFormatDate(date, dateFormats['medium']);
  };
  worldTime.getFormattedTimeShort = function (date) {
    var that = this,
        timeFormats = that.getDateFormatsObj('gregorian').timeFomrats.length;

    return that.applyFormatDate(date || new Date(), timeFormats['short']);
  };
    
  worldTime.getBaseMonthsArr = function (spec) {
    var type = (spec && spec.type) ? spec.type : 'abbreviated',
        gregorian = this.getDateFormatsObj('gregorian'),
        m = gregorian.months.format[type];

    return [m['1'], m['2'], m['3'], m['4'],
            m['5'], m['6'], m['7'], m['8'],
            m['9'], m['10'], m['11'], m['12']];
  };
  
  worldTime.getBaseDaysArr = function (spec) {
    var type = (spec && spec.type) ? spec.type : 'abbreviated',
        gregorian = this.getDateFormatsObj('gregorian'),
        d = gregorian.days.format[type];

    return [d['sun'], d['mon'], d['tue'], d['wed'], 
            d['thu'], d['fri'], d['sat']];
  };

  // redefine simple time methods to return locale specific data
  worldTime.localeMethods = {
    getDateSymbolsMonthAbbrev : function () {    
      return worldTime.getNumericMonthNameFormatObj('abbreviated');
    },
    getDateSymbolsMonthWide : function () {
      return worldTime.getNumericMonthNameFormatObj('wide');
    },
    getDateSymbolsMonthNarrow : function () {
      return worldTime.getNumericMonthNameFormatObj('narrow');
    },

    getDateSymbolsDayAbbrev : function () {
      return worldTime.getNumericDayNameFormatObj('abbrev');
    },
    getDateSymbolsDayWide : function () {
      return worldTime.getNumericDayNameFormatObj('wide');
    }
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

// Filename: worldtime.js  
// Timestamp: 2013.09.28-16:48:15 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  
// Requires: simpletime.js

var simpletime = require('simpletime');

var worldtime = module.exports = (function () {

  var wtime = Object.create(simpletime);

  wtime.prototype = simpletime;

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
  wtime.getCalendarObj = function (localeObj, calType) {
    var calendars = localeObj.dates.calendars,
        type = (typeof calType === 'string') ? calType : 'default';

    return calendars[calType];
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
  wtime.getCalendarUnit = function (localeObj, unit) {
    var calendarObj = wtime.getCalendarObj(localeObj, 'gregorian');
    return calendarObj[unit];
  };

  // months
  wtime.getMonthNameFormatObj = function(localeObj, type) {
    return wtime.getCalendarUnit(localeObj, 'months').format[type];
  };
  // month, abbreviated
  wtime.getNumericMonthNameAbbrev = function(localeObj, monthNum) {
    return wtime.getMonthNameFormatObj(localeObj, 'abbreviated')[monthNum];  
  };
  // month, wide
  wtime.getNumericMonthNameWide = function(localeObj, monthNum) {
    return wtime.getMonthNameFormatObj(localeObj, 'wide')[monthNum];
  };  

  // days
  wtime.getDayNameFormatObj = function(localeObj, type) {
    return wtime.getCalendarUnit(localeObj, 'days').format[type];
  };
  // day, abbreviated
  wtime.getStrDayNameAbbrev = function(localeObj, dayNum) {
    return wtime.getDayNameFormatObj(localeObj, 'abbreviated')[dayNum];  
  };
  // day, wide
  wtime.getStrDayNameWide = function(localeObj, dayNum) {
    return wtime.getDayNameFormatObj(localeObj, 'wide')[dayNum];
  };  

  // get month 'name' from date
  wtime.getDateMonthNameAbbrev = function (localeObj, d) {
    var dateObj = wtime.isDateObj(d) ? d : new Date(),
        monthNum = dateObj.getMonth() + 1;
    return wtime.getNumericMonthNameAbbrev(localeObj, monthNum);  
  };
  wtime.getDateMonthNameWide = function (localeObj, d) {
    var dateObj = wtime.isDateObj(d) ? d : new Date(),
        monthNum = dateObj.getMonth() + 1;
    return wtime.getNumericMonthNameWide(localeObj, monthNum);  
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if no format is specified, locale provided default is used
  wtime.getDateFormat = function (localeObj, defaultFormat) {
    var formats = wtime.getCalendarObj(localeObj, 'gregorian').dateFormats;

    defaultFormat = defaultFormat || formats['default'];
    if (defaultFormat) {
      return formats[defaultFormat].dateFormat.pattern;
    }
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if no format is specified, locale provided default is used
  wtime.getTimeFormat = function (localeObj, defaultFormat) {
    var formats = wtime.getCalendarObj(localeObj, 'gregorian').timeFormats;

    defaultFormat = defaultFormat || formats['default'];
    if (defaultFormat) {
      return formats[defaultFormat].timeFormat.pattern;
    }
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if !format, locale provided default is used
  wtime.getFormattedDate = function (localeObj, date, format) {
    var dateFormat = wtime.getDateFormat(localeObj, format);

    return wtime.applyFormatDate(date, dateFormat);
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if !format, locale provided default is used
  wtime.getFormattedTime = function (localeObj, date, format) {
    var dateFormat = wtime.getTimeFormat(localeObj, format);

    return wtime.applyFormatDate(date, dateFormat);  
  };

  // available formats are `full`, `long`, `medium` and `short`
  // if !format, locale provided default is used
  wtime.extractFormattedDate = function (localeObj, date, format) {
    var dateFormat = wtime.getDateFormat(localeObj, format);

    return wtime.extractDateFormatted(date, dateFormat);
  };


  // get abbreviated months array, useful for calendar applications
  wtime.getBaseMonthsArr = function (localeObj, type) {
    var m = wtime.getMonthNameFormatObj(localeObj, type);
    return [m['1'], m['2'], m['3'], m['4'],
            m['5'], m['6'], m['7'], m['8'],
            m['9'], m['10'], m['11'], m['12']];
  };

  // get abbreviated days array, useful for calendar applications  
  wtime.getBaseDaysArr = function (localeObj, type) {
    var d = wtime.getDayNameFormatObj(localeObj, type);
    return [d['sun'], d['mon'], d['tue'], d['wed'], 
            d['thu'], d['fri'], d['sat']];
  };

  return wtime;

}());

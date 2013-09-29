var WorldTime = require('../worldtime');
var CompareObj = require('compareobj');

var en_USObj = require('./locale/en_US.json');
var es_ESObj = require('./locale/es_ES.json');
var es_CLObj = require('./locale/es_CL.json');


///////////////////// methods unique to world time (not found in simple time)
///////////////////////////////////////////////////////////////////////////////

/*
describe("WorldTime", function () {
  it("should return a world time object", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');

    expect( typeof worldTimeObj === 'object' ).toBe( true );
  });

  it("should set lang object", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');

    expect( worldTimeObj.localeObj ).toBe( en_USObj );
  });

});
*/

describe("WorldTime.getCalendarObj", function () {
  it("should return a calndar object of the correct type, gregorian", function () {
      var result = WorldTime.getCalendarObj(en_USObj, 'gregorian');
      var resultExpected = en_USObj.dates.calendars.gregorian;

      expect( result ).toBe( resultExpected );
  });

  it("should return a calndar object of the correct type, coptic", function () {
      var result = WorldTime.getCalendarObj(en_USObj, 'coptic');
      var resultExpected = en_USObj.dates.calendars.coptic;

      expect( result ).toBe( resultExpected );
  });
});

describe("WorldTime.getMonthNameFormatObj", function () {

  it("should return a month names, abbreviated", function () {
      var result = WorldTime.getMonthNameFormatObj(en_USObj, 'abbreviated');
      var resultExpected = en_USObj.dates.calendars.gregorian.months.format.abbreviated;
      expect( result ).toBe( resultExpected );
  });

  it("should return a month names, wide", function () {
      var result = WorldTime.getMonthNameFormatObj(en_USObj, 'wide');
      var resultExpected = en_USObj.dates.calendars.gregorian.months.format.wide;
      expect( result ).toBe( resultExpected );
  });

  it("should return a month names, narrow", function () {
      var result = WorldTime.getMonthNameFormatObj(en_USObj, 'narrow');
      var resultExpected = en_USObj.dates.calendars.gregorian.months.format.narrow;
      expect( result ).toBe( resultExpected );
  });

});

describe("WorldTime.getNumericMonthNameAbbrev", function () {
  it("en_US instance w/ parameter `4` should return `Apr`", function () {
      var result = WorldTime.getNumericMonthNameAbbrev(en_USObj, 4);
      var resultExpected = 'Apr';

      expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ parameter `4` should return `abr`", function () {
      var result = WorldTime.getNumericMonthNameAbbrev(es_CLObj, 4);
      var resultExpected = 'abr';

      expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getNumericMonthNameWide", function () {
  it("en_US instance w/ parameter `4` should return `April`", function () {
      var result = WorldTime.getNumericMonthNameWide(en_USObj, 4);
      var resultExpected = 'April';

      expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ parameter `4` should return `abril`", function () {
      var result = WorldTime.getNumericMonthNameWide(es_CLObj, 4);
      var resultExpected = 'abril';

      expect( result ).toBe( resultExpected );
  });
});





describe("WorldTime.getDayNameFormatObj", function () {

  it("should return a month names, abbreviated", function () {
      var result = WorldTime.getDayNameFormatObj(en_USObj, 'abbreviated');
      var resultExpected = en_USObj.dates.calendars.gregorian.days.format.abbreviated;
      expect( result ).toBe( resultExpected );
  });

  it("should return a day names, wide", function () {
      var result = WorldTime.getDayNameFormatObj(en_USObj, 'wide');
      var resultExpected = en_USObj.dates.calendars.gregorian.days.format.wide;
      expect( result ).toBe( resultExpected );
  });

  it("should return a day names, narrow", function () {
      var result = WorldTime.getDayNameFormatObj(en_USObj, 'narrow');
      var resultExpected = en_USObj.dates.calendars.gregorian.days.format.narrow;
      expect( result ).toBe( resultExpected );
  });

});


describe("WorldTime.getNumericDayNameAbbrev", function () {
  it("en_US instance w/ parameter `tue` should return `Tue`", function () {
      var result = WorldTime.getStrDayNameAbbrev(en_USObj, 'tue');
      var resultExpected = 'Tue';

      expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ parameter `tue` should return `mar`", function () {
      var result = WorldTime.getStrDayNameAbbrev(es_CLObj, 'tue');
      var resultExpected = 'mar';

      expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getNumericDayNameWide", function () {
  it("en_US instance w/ parameter `tue` should return `Tuesday`", function () {
      var result = WorldTime.getStrDayNameWide(en_USObj, 'tue');
      var resultExpected = 'Tuesday';

      expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ parameter `tue` should return `martes`", function () {
      var result = WorldTime.getStrDayNameWide(es_CLObj, 'tue');
      var resultExpected = 'martes';

      expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getDateMonthNameAbbrev", function () {
  it("en_US instance w/ date param defined `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `Apr`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getDateMonthNameAbbrev(en_USObj, date);
    var resultExpected = 'Apr';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ date param defined `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `abr`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getDateMonthNameAbbrev(es_CLObj, date);
    var resultExpected = 'abr';

    expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getDateMonthNameWide", function () {
  it("en_US instance w/ date param defined `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `April`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getDateMonthNameWide(en_USObj, date);
    var resultExpected = 'April';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ date param defined `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `abril`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getDateMonthNameWide(es_CLObj, date);
    var resultExpected = 'abril';

    expect( result ).toBe( resultExpected );
  });
});



describe("WorldTime.getDateFormat", function () {

  it("en_US instance w/ no params should return default date format, `MMM d, y`", function () {
    var result = WorldTime.getDateFormat(en_USObj);
    var resultExpected = 'MMM d, y';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ no params should return default date format, `dd-MM-yyyy`", function () {
    var result = WorldTime.getDateFormat(es_CLObj);
    var resultExpected = 'dd-MM-yyyy';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ param `full` should return date format, `EEEE, MMMM d, y`", function () {
    var result = WorldTime.getDateFormat(en_USObj, 'full');
    var resultExpected = 'EEEE, MMMM d, y';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param `full` should return date format, `EEEE, d 'de' MMMM 'de' y`", function () {
    var result = WorldTime.getDateFormat(es_CLObj, 'full');
    var resultExpected = "EEEE, d 'de' MMMM 'de' y";

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ param `long` should return date format, `MMMM d, y`", function () {
    var result = WorldTime.getDateFormat(en_USObj, 'long');
    var resultExpected = 'MMMM d, y';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param `long` should return date format, `d 'de' MMMM 'de' y`", function () {
    var result = WorldTime.getDateFormat(es_CLObj, 'long');
    var resultExpected = "d 'de' MMMM 'de' y";

    expect( result ).toBe( resultExpected );
  });


  it("en_US instance w/ param `medium` should return date format, `MMM d, y`", function () {
    var result = WorldTime.getDateFormat(en_USObj, 'medium');
    var resultExpected = 'MMM d, y';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param `medium` should return date format, `dd-MM-yyyy`", function () {
    var result = WorldTime.getDateFormat(es_CLObj, 'medium');
    var resultExpected = "dd-MM-yyyy";

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ param `short` should return date format, `M/d/yy`", function () {
    var result = WorldTime.getDateFormat(en_USObj, 'short');
    var resultExpected = 'M/d/yy';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param `short` should return date format, `dd-MM-yy`", function () {
    var result = WorldTime.getDateFormat(es_CLObj, 'short');
    var resultExpected = "dd-MM-yy";

    expect( result ).toBe( resultExpected );
  });

});


describe("WorldTime.getFormattedDate", function () {
  it("en_US instance w/ param date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `Apr 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(en_USObj, date);
    var resultExpected = 'Apr 5, 2013';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `05-04-2013'", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(es_CLObj, date);
    var resultExpected = '05-04-2013';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `full` should return `EEEE, April 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(en_USObj, date, 'full');
    var resultExpected = 'Friday, April 5, 2013';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `full` should return `EEEE, April 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(es_CLObj, date, 'full');
    var resultExpected = "Friday, 5 'de' April 'de' 2013";

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `long` should return `EEEE, April 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(en_USObj, date, 'long');
    var resultExpected = 'April 5, 2013';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `long` should return `5 '5e' April '5e' 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(es_CLObj, date, 'long');
    var resultExpected = "5 'de' April 'de' 2013";

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `medium` should return `EEEE, Apr 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(en_USObj, date, 'medium');
    var resultExpected = 'Apr 5, 2013';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `medium` should return `05-04-2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(es_CLObj, date, 'medium');
    var resultExpected = '05-04-2013';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `short` should return `4/5/13`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(en_USObj, date, 'short');
    var resultExpected = '4/5/13';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `short` should return `05-04-13`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedDate(es_CLObj, date, 'short');
    var resultExpected = '05-04-13';

    expect( result ).toBe( resultExpected );
  });

});

describe("WorldTime.getFormattedTime", function () {

  it("en_US instance w/ param date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `9:23:41 pm`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(en_USObj, date);
    var resultExpected = '9:23:41 pm';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `21:23:41`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(es_CLObj, date);
    var resultExpected = '21:23:41';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `full` should return `9:23:41 pm 0420`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(en_USObj, date, 'full');
    var resultExpected = '9:23:41 pm 0420';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `full` should return `21:23:41 0420`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(es_CLObj, date, 'full');
    var resultExpected = '21:23:41 0420';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `long` should return `9:23:41 pm 420`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(en_USObj, date, 'long');
    var resultExpected = '9:23:41 pm 420';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `long` should return `21:23:41 420`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(es_CLObj, date, 'long');
    var resultExpected = '21:23:41 420';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `medium` should return `9:23:41 pm`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(en_USObj, date, 'medium');
    var resultExpected = '9:23:41 pm';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `medium` should return `21:23:41`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(es_CLObj, date, 'medium');
    var resultExpected = '21:23:41';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `short` should return `9:23 pm`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(en_USObj, date, 'short');
    var resultExpected = '9:23 pm';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `short` should return `21:23`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var result = WorldTime.getFormattedTime(es_CLObj, date, 'short');
    var resultExpected = '21:23';

    expect( result ).toBe( resultExpected );
  });

});

describe("WorldTime.getBaseMonthsArr", function () {
  it("en_US instance w/ param date `abbreviated` should return array of abbreviated month labels", function () {
    var result = WorldTime.getBaseMonthsArr(en_USObj, 'abbreviated');  
    var resultExpected = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    expect( CompareObj.isSameMembersDefinedArrSame(result, resultExpected) ).toBe( true );
  });
});

describe("WorldTime.getBaseDaysArr", function () {
  it("en_US instance w/ param date `abbreviated` should return array of abbreviated day labels", function () {
    var result = WorldTime.getBaseDaysArr(en_USObj, 'abbreviated');  
    var resultExpected = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    expect( CompareObj.isSameMembersDefinedArrSame(result, resultExpected) ).toBe( true );
  });
});


///////////////////////////////////// altered methods defined in simple time
///////////////////////////////////////////////////////////////////////////////
describe("WorldTime.extractDateFormatted", function () {
  var result, resultExpected;

  it("en_US instance should extract a correct date object from `full` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        dateFormatted = 'Friday, April 5, 2013',
        resultExpected = date;
        // 'EEEE, MMMM d, y'

    var result = WorldTime.extractFormattedDate(en_USObj, dateFormatted, 'full');

    expect( CompareObj.isSameMembersDefinedArrSame(
      WorldTime.getDateYMDNumArr(result), 
      WorldTime.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("es_CL instance should extract a correct date object from `full` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        dateFormatted = "Friday, 5 'de' April 'de' 2013",
        resultExpected = date;
        // "EEEE, d 'de' MMMM 'de' y"

    var result = WorldTime.extractFormattedDate(es_CLObj, dateFormatted, 'full');

    expect( CompareObj.isSameMembersDefinedArrSame(
      WorldTime.getDateYMDNumArr(result), 
      WorldTime.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("en_US instance should extract a correct date object from `long` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        dateFormatted = 'April 5, 2013',
        resultExpected = date;
        // 'MMMM d, y'
        // 'April 5, 2013'

    var result = WorldTime.extractFormattedDate(en_USObj, dateFormatted, 'long');

    expect( CompareObj.isSameMembersDefinedArrSame(
      WorldTime.getDateYMDNumArr(result), 
      WorldTime.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("es_CL instance should extract a correct date object from `long` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        dateFormatted = "5 'de' April 'de' 2013",
        resultExpected = date;
        // d 'de' MMMM 'de' y
        // 5 'de' April 'de' 2013

    var result = WorldTime.extractFormattedDate(es_CLObj, dateFormatted, 'long');

    expect( CompareObj.isSameMembersDefinedArrSame(
      WorldTime.getDateYMDNumArr(result), 
      WorldTime.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("en_US instance should extract a correct date object from `medium` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        dateFormatted = 'Apr 5, 2013',
        resultExpected = date;
        // MMM d, y
        // Apr 5, 2013

    var result = WorldTime.extractFormattedDate(en_USObj, dateFormatted, 'medium');

    expect( CompareObj.isSameMembersDefinedArrSame(
      WorldTime.getDateYMDNumArr(result), 
      WorldTime.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("es_CL instance should extract a correct date object from `medium` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        dateFormatted = '05-04-2013',
        resultExpected = date;
        // dd-MM-yyyy
        // 05-04-2013

    var result = WorldTime.extractFormattedDate(es_CLObj, dateFormatted, 'medium');

    expect( CompareObj.isSameMembersDefinedArrSame(
      WorldTime.getDateYMDNumArr(result), 
      WorldTime.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("en_US instance should extract a correct date object from `short` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        dateFormatted = '4/5/13',
        resultExpected = date;
        // M/d/yy
        // 4/5/13

    var result = WorldTime.extractFormattedDate(en_USObj, dateFormatted, 'short');

    expect( CompareObj.isSameMembersDefinedArrSame(
      WorldTime.getDateYMDNumArr(result), 
      WorldTime.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("es_CL instance should extract a correct date object from `short` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        dateFormatted = '05-04-13',
        resultExpected = date;
        // dd-MM-yy
        // 05-04-13

    var result = WorldTime.extractFormattedDate(es_CLObj, dateFormatted, 'short');

    expect( CompareObj.isSameMembersDefinedArrSame(
      WorldTime.getDateYMDNumArr(result), 
      WorldTime.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

});



  

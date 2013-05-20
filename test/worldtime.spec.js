var WorldTime = require('../worldtime');
var CompareObj = require('compareobj');

var en_USObj = require('./locale/en_US.json');
var es_ESObj = require('./locale/es_ES.json');
var es_CLObj = require('./locale/es_CL.json');


///////////////////// methods unique to world time (not found in simple time)
///////////////////////////////////////////////////////////////////////////////

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


describe("WorldTime.getCalendarObj", function () {
  it("should return a calndar object of the correct type, gregorian", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getCalendarObj('gregorian');
      var resultExpected = en_USObj.dates.calendars.gregorian;

      expect( result ).toBe( resultExpected );
  });

  it("should return a calndar object of the correct type, coptic", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getCalendarObj('coptic');
      var resultExpected = en_USObj.dates.calendars.coptic;

      expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getNumericMonthNameFormatObj", function () {

  it("should return a month names, abbreviated", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericMonthNameFormatObj('abbreviated');
      var resultExpected = en_USObj.dates.calendars.gregorian.months.format.abbreviated;
      expect( result ).toBe( resultExpected );
  });

  it("should return a month names, wide", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericMonthNameFormatObj('wide');
      var resultExpected = en_USObj.dates.calendars.gregorian.months.format.wide;
      expect( result ).toBe( resultExpected );
  });

  it("should return a month names, narrow", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericMonthNameFormatObj('narrow');
      var resultExpected = en_USObj.dates.calendars.gregorian.months.format.narrow;
      expect( result ).toBe( resultExpected );
  });

});


describe("WorldTime.getNumericMonthNameAbbrev", function () {
  it("en_US instance w/ parameter `4` should return `Apr`", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericMonthNameAbbrev(4);
      var resultExpected = 'Apr';

      expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ parameter `4` should return `abr`", function () {
      var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
      var result = worldTimeObj.getNumericMonthNameAbbrev(4);
      var resultExpected = 'abr';

      expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getNumericMonthNameWide", function () {
  it("en_US instance w/ parameter `4` should return `April`", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericMonthNameWide(4);
      var resultExpected = 'April';

      expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ parameter `4` should return `abril`", function () {
      var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
      var result = worldTimeObj.getNumericMonthNameWide(4);
      var resultExpected = 'abril';

      expect( result ).toBe( resultExpected );
  });
});





describe("WorldTime.getNumericDayNameFormatObj", function () {

  it("should return a month names, abbreviated", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericDayNameFormatObj('abbreviated');
      var resultExpected = en_USObj.dates.calendars.gregorian.days.format.abbreviated;
      expect( result ).toBe( resultExpected );
  });

  it("should return a day names, wide", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericDayNameFormatObj('wide');
      var resultExpected = en_USObj.dates.calendars.gregorian.days.format.wide;
      expect( result ).toBe( resultExpected );
  });

  it("should return a day names, narrow", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericDayNameFormatObj('narrow');
      var resultExpected = en_USObj.dates.calendars.gregorian.days.format.narrow;
      expect( result ).toBe( resultExpected );
  });

});


describe("WorldTime.getNumericDayNameAbbrev", function () {
  it("en_US instance w/ parameter `tue` should return `Tue`", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericDayNameAbbrev('tue');
      var resultExpected = 'Tue';

      expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ parameter `tue` should return `mar`", function () {
      var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
      var result = worldTimeObj.getNumericDayNameAbbrev('tue');
      var resultExpected = 'mar';

      expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getNumericDayNameWide", function () {
  it("en_US instance w/ parameter `tue` should return `Tuesday`", function () {
      var worldTimeObj = WorldTime(en_USObj, 'en_US');  
      var result = worldTimeObj.getNumericDayNameWide('tue');
      var resultExpected = 'Tuesday';

      expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ parameter `tue` should return `martes`", function () {
      var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
      var result = worldTimeObj.getNumericDayNameWide('tue');
      var resultExpected = 'martes';

      expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getDateMonthNameAbbrev", function () {
  it("en_US instance w/ date param defined `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `Apr`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getDateMonthNameAbbrev(date);
    var resultExpected = 'Apr';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ date param defined `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `abr`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getDateMonthNameAbbrev(date);
    var resultExpected = 'abr';

    expect( result ).toBe( resultExpected );
  });
});


describe("WorldTime.getDateMonthNameWide", function () {
  it("en_US instance w/ date param defined `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `April`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getDateMonthNameWide(date);
    var resultExpected = 'April';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ date param defined `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `abril`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getDateMonthNameWide(date);
    var resultExpected = 'abril';

    expect( result ).toBe( resultExpected );
  });
});



describe("WorldTime.getDateFormat", function () {

  it("en_US instance w/ no params should return default date format, `MMM d, y`", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getDateFormat();
    var resultExpected = 'MMM d, y';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ no params should return default date format, `dd-MM-yyyy`", function () {
    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getDateFormat();
    var resultExpected = 'dd-MM-yyyy';

    expect( result ).toBe( resultExpected );
  });


  it("en_US instance w/ param `full` should return date format, `EEEE, MMMM d, y`", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getDateFormat('full');
    var resultExpected = 'EEEE, MMMM d, y';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param `full` should return date format, `EEEE, d 'de' MMMM 'de' y`", function () {
    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getDateFormat('full');
    var resultExpected = "EEEE, d 'de' MMMM 'de' y";

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ param `long` should return date format, `MMMM d, y`", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getDateFormat('long');
    var resultExpected = 'MMMM d, y';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param `long` should return date format, `d 'de' MMMM 'de' y`", function () {
    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getDateFormat('long');
    var resultExpected = "d 'de' MMMM 'de' y";

    expect( result ).toBe( resultExpected );
  });


  it("en_US instance w/ param `medium` should return date format, `MMM d, y`", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getDateFormat('medium');
    var resultExpected = 'MMM d, y';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param `medium` should return date format, `dd-MM-yyyy`", function () {
    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getDateFormat('medium');
    var resultExpected = "dd-MM-yyyy";

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ param `short` should return date format, `M/d/yy`", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getDateFormat('short');
    var resultExpected = 'M/d/yy';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param `short` should return date format, `dd-MM-yy`", function () {
    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getDateFormat('short');
    var resultExpected = "dd-MM-yy";

    expect( result ).toBe( resultExpected );
  });


});


describe("WorldTime.getFormattedDate", function () {
  it("en_US instance w/ param date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `Apr 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedDate(date);
    var resultExpected = 'Apr 5, 2013';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `05-04-2013'", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedDate(date);
    var resultExpected = '05-04-2013';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `full` should return `EEEE, April 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedDate(date, 'full');
    var resultExpected = 'Friday, April 5, 2013';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `full` should return `EEEE, April 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedDate(date, 'full');
    var resultExpected = "Friday, 5 'de' April 'de' 2013";

    expect( result ).toBe( resultExpected );
  });


  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `long` should return `EEEE, April 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedDate(date, 'long');
    var resultExpected = 'April 5, 2013';

    expect( result ).toBe( resultExpected );
  });


  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `long` should return `5 '5e' April '5e' 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedDate(date, 'long');
    var resultExpected = "5 'de' April 'de' 2013";

    expect( result ).toBe( resultExpected );
  });


  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `medium` should return `EEEE, Apr 5, 2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedDate(date, 'medium');
    var resultExpected = 'Apr 5, 2013';

    expect( result ).toBe( resultExpected );
  });


  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `medium` should return `05-04-2013`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedDate(date, 'medium');
    var resultExpected = '05-04-2013';

    expect( result ).toBe( resultExpected );
  });


  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `short` should return `4/5/13`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedDate(date, 'short');
    var resultExpected = '4/5/13';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `short` should return `05-04-13`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedDate(date, 'short');
    var resultExpected = '05-04-13';

    expect( result ).toBe( resultExpected );
  });

});

describe("WorldTime.getFormattedTime", function () {

  it("en_US instance w/ param date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `9:23:41 pm`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedTime(date);
    var resultExpected = '9:23:41 pm';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ param date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` should return `21:23:41`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedTime(date);
    var resultExpected = '21:23:41';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `full` should return `9:23:41 pm 0420`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedTime(date, 'full');
    var resultExpected = '9:23:41 pm 0420';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `full` should return `21:23:41 0420`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedTime(date, 'full');
    var resultExpected = '21:23:41 0420';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `long` should return `9:23:41 pm 420`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedTime(date, 'long');
    var resultExpected = '9:23:41 pm 420';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `long` should return `21:23:41 420`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedTime(date, 'long');
    var resultExpected = '21:23:41 420';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `medium` should return `9:23:41 pm`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedTime(date, 'medium');
    var resultExpected = '9:23:41 pm';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `medium` should return `21:23:41`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedTime(date, 'medium');
    var resultExpected = '21:23:41';

    expect( result ).toBe( resultExpected );
  });

  it("en_US instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `short` should return `9:23 pm`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getFormattedTime(date, 'short');
    var resultExpected = '9:23 pm';

    expect( result ).toBe( resultExpected );
  });

  it("es_CL instance w/ params date `Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)` and `short` should return `21:23`", function () {

    //Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485);

    var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
    var result = worldTimeObj.getFormattedTime(date, 'short');
    var resultExpected = '21:23';

    expect( result ).toBe( resultExpected );
  });
});

describe("WorldTime.getBaseMonthsArr", function () {
  it("en_US instance w/ param date `abbreviated` should return array of abbreviated month labels", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getBaseMonthsArr('abbreviated');  
    var resultExpected = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    expect( CompareObj.isSameMembersDefinedArrSame(result, resultExpected) ).toBe( true );
  });
});


describe("WorldTime.getBaseDaysArr", function () {
  it("en_US instance w/ param date `abbreviated` should return array of abbreviated day labels", function () {
    var worldTimeObj = WorldTime(en_USObj, 'en_US');  
    var result = worldTimeObj.getBaseDaysArr('abbreviated');  
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
        worldTimeObj = WorldTime(en_USObj, 'en_US'),
        dateFormatted = 'Friday, April 5, 2013',
        resultExpected = date;
        // 'EEEE, MMMM d, y'

    var result = worldTimeObj.extractFormattedDate(dateFormatted, 'full');

    expect( CompareObj.isSameMembersDefinedArrSame(
      worldTimeObj.getDateYMDNumArr(result), 
      worldTimeObj.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("es_CL instance should extract a correct date object from `full` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        worldTimeObj = WorldTime(es_CLObj, 'es_CL'),
        dateFormatted = "Friday, 5 'de' April 'de' 2013",
        resultExpected = date;
        // "EEEE, d 'de' MMMM 'de' y"

    var result = worldTimeObj.extractFormattedDate(dateFormatted, 'full');

    expect( CompareObj.isSameMembersDefinedArrSame(
      worldTimeObj.getDateYMDNumArr(result), 
      worldTimeObj.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("en_US instance should extract a correct date object from `long` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        worldTimeObj = WorldTime(en_USObj, 'en_US'),
        dateFormatted = 'April 5, 2013',
        resultExpected = date;
        // 'MMMM d, y'
        // 'April 5, 2013'

    var result = worldTimeObj.extractFormattedDate(dateFormatted, 'long');

    expect( CompareObj.isSameMembersDefinedArrSame(
      worldTimeObj.getDateYMDNumArr(result), 
      worldTimeObj.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("es_CL instance should extract a correct date object from `long` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        worldTimeObj = WorldTime(es_CLObj, 'es_CL'),
        dateFormatted = "5 'de' April 'de' 2013",
        resultExpected = date;
        // d 'de' MMMM 'de' y
        // 5 'de' April 'de' 2013

    var result = worldTimeObj.extractFormattedDate(dateFormatted, 'long');

    expect( CompareObj.isSameMembersDefinedArrSame(
      worldTimeObj.getDateYMDNumArr(result), 
      worldTimeObj.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("en_US instance should extract a correct date object from `medium` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        worldTimeObj = WorldTime(en_USObj, 'en_US'),
        dateFormatted = 'Apr 5, 2013',
        resultExpected = date;
        // MMM d, y
        // Apr 5, 2013

    var result = worldTimeObj.extractFormattedDate(dateFormatted, 'medium');

    expect( CompareObj.isSameMembersDefinedArrSame(
      worldTimeObj.getDateYMDNumArr(result), 
      worldTimeObj.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("es_CL instance should extract a correct date object from `medium` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        worldTimeObj = WorldTime(es_CLObj, 'es_CL'),
        dateFormatted = '05-04-2013',
        resultExpected = date;
        // dd-MM-yyyy
        // 05-04-2013

    var result = worldTimeObj.extractFormattedDate(dateFormatted, 'medium');

    expect( CompareObj.isSameMembersDefinedArrSame(
      worldTimeObj.getDateYMDNumArr(result), 
      worldTimeObj.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("en_US instance should extract a correct date object from `short` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        worldTimeObj = WorldTime(en_USObj, 'en_US'),
        dateFormatted = '4/5/13',
        resultExpected = date;
        // M/d/yy
        // 4/5/13

    var result = worldTimeObj.extractFormattedDate(dateFormatted, 'short');

    expect( CompareObj.isSameMembersDefinedArrSame(
      worldTimeObj.getDateYMDNumArr(result), 
      worldTimeObj.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

  it("es_CL instance should extract a correct date object from `short` formatted date", function () {  
    // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
    var date = new Date(1365222221485),
        worldTimeObj = WorldTime(es_CLObj, 'es_CL'),
        dateFormatted = '05-04-13',
        resultExpected = date;
        // dd-MM-yy
        // 05-04-13

    var result = worldTimeObj.extractFormattedDate(dateFormatted, 'short');

    expect( CompareObj.isSameMembersDefinedArrSame(
      worldTimeObj.getDateYMDNumArr(result), 
      worldTimeObj.getDateYMDNumArr(resultExpected)) 
    ).toBe( true );
  });

});



  

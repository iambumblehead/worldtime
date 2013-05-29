worldtime
=========
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

NOTE:
**This software is a work in progress and may be unusable at this time.**

worldtime provides methods for manipulating international dates, converting dates to and from unicode format.

worldtime uses the [official Unicode ldml-JSON files][2] for formatting and parsing international dates and times. Use [json-locale][3] to get these files and to optimise them.

worldtime extends [simpletime][4]. no libraries are required. just simpletime, worldtime and unicode JSON files.

because worldtime extends [simpletime][4], constructed worldtime objects will have the same methods and properties that are defined on simpletime objects. 

what's good about this script:

  - format and unformat international time using unicode [forms][5]
  - create and use `YMDArr` objects to simplify time manipulation
  - it may be used in a browser or node.js ecmascipt environment

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: http://github.com/iambumblehead/worldTime             "worldTime"
[2]: http://cldr.unicode.org/index/cldr-spec/json  "ldml-to-json spec"
[3]: https://github.com/iambumblehead/json-locale        "json-locale"
[4]: https://github.com/iambumblehead/simpletime         "simple-time"
[5]: http://www.unicode.org/repos/cldr-aux/json/22.1/   "unicode JSON"

---------------------------------------------------------
#### <a id="install"></a>Install:

worldtime may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install worldtime
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/worldtime.git
 ```

---------------------------------------------------------
#### <a id="test"></a>Test:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```

---------------------------------------------------------

#### <a id="get-started">GET STARTED:

 1. **Construct a WorldTime Object**
 
 construct a worldtime object and begin using it.
 
 worldtime is constructed with an object as the first parameter, and a language identifier as the second parameter.

 > ```javascript
   var WorldTime = require('../worldtime');
   var es_CLObj = require('./locale/es_CL.json');    
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');
   var d = worldTimeObj.extractFormattedDate('05-04-2013', 'medium');
   console.log(d); // (date) Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
   var f = worldTimeObj.getFormattedTime(d, 'medium');
   console.log(f); // 05-04-2013
   ```


---------------------------------------------------------

#### <a id="methods">METHODS:


 - **getCalendarObj ( _calendarType_ )**  
   returns a `calendar` object from the unicode file.

   the following calendars are defined by the unicode files and are valid _calendarTypes_:
       
      "buddhist",   
      "chinese",   
      "coptic",   
      "dangi",  
      "ethiopic",   
      "ethiopicAmeteAlem",  
      "gregorian",  
      "hebrew",  
      "indian",  
      "islamic",  
      "islamicCivil",   
      "japanese",  
      "persian",  
      "roc"   


 - **getCalendarUnit ( _unitType_ )**  
 
   returns a `calendar unit` object from the unicode file.

   the following units are defined by the unicode files and are valid _unitTypes_:

      "months",  
      "days",  
      "quarters",  
      "eras",  
      "dateFormats",  
      "timeFormats",  
      "dateTimeFormats",  
      "fields"      
      

 - **getMonthNameFormatObj ( _monthType_ )**  
 
   returns an object of month names for the given month type

   by default, months are provided by the `gregorian` calendar object
 
   the following month types are defined by the unicode files and are valid _monthTypes_:
   
      "abbreviated",  
      "narrow",  
      "wide"  
      
   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getMonthNameFormatObj('abbreviated');
   console.log(result);
   // {
   //   "1": "ene",
   //   "2": "feb",
   //   "3": "mar",
   //   "4": "abr",
   //   "5": "may",
   //   "6": "jun",
   //   "7": "jul",
   //   "8": "ago",
   //   "9": "sep",
   //   "10": "oct",
   //   "11": "nov",
   //   "12": "dic"
   // }
   ```

 - **getNumericMonthNameAbbrev ( _monthNum_ )**  
 
   returns a month name of the `abbreviated` month type for the given _monthNum_    

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getNumericMonthNameAbbrev('1');
   console.log(result);
   // ene
   ```

 - **getNumericMonthNameWide ( _monthNum_ )**  
 
   returns a month name of the `wide` month type for the given _monthNum_

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getNumericMonthNameWide('1');
   console.log(result);
   // enero
   ```

 - **getDayNameFormatObj ( _monthType_ )**  
 
   returns an object of day names for the given day type

   by default, months are provided by the `gregorian` calendar object
 
   the following day types are defined by the unicode files:

      "abbreviated",  
      "narrow",  
      "wide"   

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getDayNameFormatObj('abbreviated');
   console.log(result);
   // {
   //   "sun": "dom",
   //   "mon": "lun",
   //   "tue": "mar",
   //   "wed": "mié",
   //   "thu": "jue",
   //   "fri": "vie",
   //   "sat": "sáb"
   // }
   ```

 - **getStrDayNameAbbrev ( _dayStr_ )**  
 
   returns a day name of the `abbreviated` day type for the given _dayStr_  

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getStrDayNameAbbrev('mon');
   console.log(result);
   // lun
   ```

 - **getStrDayNameWide ( _dayStr_ )**  
 
   returns a day name of the `wide` day type for the given _dayStr_     

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getStrDayNameWide('mon');
   console.log(result);
   // lunes
   ```

 - **getDateMonthNameAbbrev ( _dayStr_ )**  
 
   returns a day name of the `wide` day type for the given _dayStr_     

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
   var date = new Date(1365222221485);  
   var result = worldTimeObj.getDateMonthNameAbbrev(date);
   console.log(result);
   // abr
   ```   
   
 - **getDateMonthNameWide ( _dayStr_ )**  
 
   returns a day name of the `wide` day type for the given _dayStr_     

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
   var date = new Date(1365222221485);  
   var result = worldTimeObj.getDateMonthNameWide(date);
   console.log(result);
   // abril
   ```   

 - **getDateFormat ( _formatType_ )**  
 
   returns a date format of the given formatType ( _full_, _long_, _medium_, _short_ ). If no formatType is given, the default format of the locale is returned.

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getDateFormat('short');
   console.log(result);
   // dd-MM-yy
   ```    

 - **getTimeFormat ( _formatType_ )**  
 
   returns a time format of the given formatType ( _full_, _long_, _medium_, _short_ ). If no formatType is given, the default format of the locale is returned.

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getTimeFormat('short');
   console.log(result);
   // H:mm
   ```    

 - **getFormattedDate ( _dateObj_ , _formatType_ )**  
 
   returns a formatted date of the given dateObj and formatType ( _full_, _long_, _medium_, _short_ ). If no formatType is given, the default format of the locale is returned.

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
   var date = new Date(1365222221485);     
   var result = worldTimeObj.getFormattedDate(date, 'short');
   console.log(result);
   // 05-04-13
   ```    

 - **getFormattedTime ( _dateObj_ , _formatType_ )**  
 
   returns a formatted date of the given dateObj and formatType ( _full_, _long_, _medium_, _short_ ). If no formatType is given, the default format of the locale is returned.

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
   var date = new Date(1365222221485);     
   var result = worldTimeObj.getFormattedTime(date, 'short');
   console.log(result);
   // 21:23
   ```    

 - **extractFormattedDate ( _dateStr_ , _formatType_ )**  
 
   returns a date of the given formattted dateStr and formatType ( _full_, _long_, _medium_, _short_ ). If no formatType is given, the default format of the locale is returned.

   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   // Fri Apr 05 2013 21:23:41 GMT-0700 (PDT)
   var date = '05-04-13';
   var result = worldTimeObj.extractFormattedDate(date, 'short');
   console.log(result);
   // Fri Apr 05 13 23:13:55 GMT-0700 (PDT)
   ```    
   
 - **getBaseMonthsArr ( _formatType_ )**  
 
   returns an array of months for the given formatType ( _abbreviated_, _narrow_, _wide_ ).
   
   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getBaseMonthsArr('abbreviated');
   console.log(result);
   // [
   //   'feb',
   //   'mar',
   //   'abr',
   //   'may',
   //   'jun',
   //   'jul',
   //   'ago',
   //   'sep',
   //   'oct',
   //   'nov',
   //   'dic'
   // ]
   ```       
   
 - **getBaseDaysArr ( _formatType_ )**  
 
   returns an array of months for the given formatType ( _abbreviated_, _narrow_, _wide_ ).
   
   ```javascript
   var worldTimeObj = WorldTime(es_CLObj, 'es_CL');  
   var result = worldTimeObj.getBaseDaysArr('abbreviated');
   console.log(result);
   // [
   //   'dom',
   //   'lun',
   //   'mar',
   //   'mié',
   //   'jue',
   //   'vie',
   //   'sáb'
   // ]
   ```          

---------------------------------------------------------

#### <a id="methods">Contributions:

Contributions are welcome. If you've found an issue and you'd like to send me an email about it feel free to do that.

I initially wrote worldtime while I was building an international software application on a job. I have changed jobs and I'm no longer testing or developing this script for a production environment. If you find issues please report them or send a fix.


---------------------------------------------------------

#### <a id="license">License:

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

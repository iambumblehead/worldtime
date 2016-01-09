worldtime
=========
**(c)[Bumblehead][0], 2013,2014,2015,2016** [MIT-license](#license)

### Overview:

worldtime uses [official Unicode ldml-JSON files][2] to format and parse international times. The unicode files are found in [json-locale][3].

worldtime extends [simpletime][4] to provide all simpletime methods. Use it to format and unformat international time using unicode [forms][5].

```javascript
var worldtime = require('worldtime'),
    uobj = require('es_CL.json');

worldtime.getFormattedDate(uobj, new Date(), 'medium');
// "09-01-2016"

worldtime.extractFormattedDate(uobj, '09-01-2016', 'medium');
// Sat Jan 09 2016 01:01:12 GMT-0800 (PST)

worldtime.getDateMonthNameWide(uobj, new Date());
// "enero"

worldtime.getNumericMonthNameWide(uobj, '2');
// "febrero"

worldtime.getStrDayNameAbbrev(uobj, 'thu');
// "jue"
```

The below method list is abbreviated. See worldtime and simpletime source files for the full list. 

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: http://github.com/iambumblehead/worldTime             "worldTime"
[2]: http://cldr.unicode.org/index/cldr-spec/json  "ldml-to-json spec"
[3]: https://github.com/iambumblehead/json-locale        "json-locale"
[4]: https://github.com/iambumblehead/simpletime         "simple-time"
[5]: http://www.unicode.org/repos/cldr-aux/json/22.1/   "unicode JSON"
[7]: https://raw.githubusercontent.com/iambumblehead/es5classic/master/es5classic_120x120.png

---------------------------------------------------------
#### <a id="methods"></a>methods

 * **getCalendarObj ( _uObj_, _calendarType_ )**

   returns a `calendar` object from the unicode object. valid _calendarTypes_: "buddhist", "chinese", "coptic", "dangi", "ethiopic", "ethiopicAmeteAlem", "gregorian", "hebrew", "indian", "islamic", "islamicCivil", "japanese", "persian", "roc".

   ex,

   ```javascript
   worldtime.getCalendarObj(uobj, 'gregorian').months.format.wide
   //{ '1': 'enero',
   //  '2': 'febrero',
   //  '3': 'marzo',
   //  '4': 'abril',
   //  '5': 'mayo',
   //  '6': 'junio',
   //  '7': 'julio',
   //  '8': 'agosto',
   //  '9': 'septiembre',
   //  '10': 'octubre',
   //  '11': 'noviembre',
   //  '12': 'diciembre' }
   ```

 * **getCalendarUnit ( _uObj_, _unitType_ )**
 
   returns a `calendar unit` object from the unicode object. valid _unitTypes_: "months", "days", "quarters", "eras", "dateFormats", "timeFormats", "dateTimeFormats", "fields".

   ex,

   ```javascript
   worldtime.getCalendarUnit(uobj, 'dateFormats').medium.dateFormat.pattern
   // 'dd-MM-yyyy'
   ```

 * **getMonthNameFormatObj ( _uObj_, _monthType_ )**
 
   returns an object of month names for the given month type. months are provided by the `gregorian` calendar object. valid _monthTypes_: "abbreviated", "narrow", "wide".

   ex,

   ```javascript
   worldtime.getMonthNameFormatObj(uobj, 'abbreviated');
   //{ '1': 'ene',
   //  '2': 'feb',
   //  '3': 'mar',
   //  '4': 'abr',
   //  '5': 'may',
   //  '6': 'jun',
   //  '7': 'jul',
   //  '8': 'ago',
   //  '9': 'sep',
   //  '10': 'oct',
   //  '11': 'nov',
   //  '12': 'dic' }
   ```

 * **getBaseMonthsArr ( _uObj_, _formatType_ )**
 
   returns an array of months for the given format type. valid _formatType_: "abbreviated", "narrow", "wide".

   ex,

   ```javascript
   worldtime.getBaseMonthsArr(es_CLObj, 'abbreviated');
   //[ 'feb',
   //  'mar',
   //  'abr',
   //  'may',
   //  'jun',
   //  'jul',
   //  'ago',
   //  'sep',
   //  'oct',
   //  'nov',
   //  'dic' ]
   ```

 * **getNumericMonthNameAbbrev ( _uObj_, _monthNum_ )**
 
   returns a month name of the `abbreviated` month type for the given _monthNum_.

   ex,

   ```javascript
   worldtime.getNumericMonthNameAbbrev(uobj, '1');
   // ene
   ```

 * **getNumericMonthNameWide ( _uObj_, _monthNum_ )**
 
   returns a month name of the `wide` month type for the given _monthNum_.

   ex,

   ```javascript
   worldtime.getNumericMonthNameWide(uobj, '1');
   // enero
   ```

 * **getDayNameFormatObj ( _uObj_, _dayType_ )**
 
   returns an object of day names for the given day type. months are provided by the `gregorian` calendar object. valid _dayType_: "abbreviated", "narrow", "wide".

   ex,

   ```javascript
   var result = worldtime.getDayNameFormatObj(uobj, 'abbreviated');
   //{ 'sun': 'dom',
   //  'mon': 'lun',
   //  'tue': 'mar',
   //  'wed': 'mié',
   //  'thu': 'jue',
   //  'fri': 'vie',
   //  'sat': 'sáb' }
   ```
   
 * **getBaseDaysArr ( _uobj_, _formatType_ )**
 
   returns an array of days for the given format type. valid _formatType_: "abbreviated", "narrow", "wide".

   ex,

   ```javascript
   worldtime.getBaseDaysArr(uobj, 'abbreviated');
   //[ 'dom',
   //  'lun',
   //  'mar',
   //  'mié',
   //  'jue',
   //  'vie',
   //  'sáb' ]
   ```

 * **getStrDayNameAbbrev ( _uObj_, _dayStr_ )**
 
   returns a day name of the `abbreviated` day type for the given _dayStr_. valid _dayStr_: "sun", "mon", "tue", "wed", "thu", "fri", "sat".

   ex,

   ```javascript
   worldtime.getStrDayNameAbbrev(uobj, 'mon');
   // lun
   ```

 * **getStrDayNameWide ( _uObj_, _dayStr_ )**
 
   returns a day name of the `wide` day type for the given _dayStr_.

   ex,

   ```javascript
   worldtime.getStrDayNameWide(uobj, 'mon');
   // lunes
   ```

 * **getDateMonthNameAbbrev ( _uObj_, _date_ )**
 
   returns a "abbrev" day name for the given _date_.

   ex,

   ```javascript
   worldtime.getDateMonthNameAbbrev(uobj, date);
   // abr
   ```
   
 * **getDateMonthNameWide ( _uObj_, _date_ )**
 
   returns a "wide" day name for the given _date_.

   ex,

   ```javascript
   worldtime.getDateMonthNameWide(uobj, date);
   // abril
   ```

 * **getDateFormat ( _uObj_, _formatType_ )**
 
   returns a date format of the given formatType. valid formatType: "full", "long", "medium", "short". If no formatType given, the default format of the locale is returned.

   ex,

   ```javascript
   worldtime.getDateFormat(uobj, 'short');
   // dd-MM-yy
   ```

 * **getTimeFormat ( _uObj_, _formatType_ )**

   returns a time format of the given formatType. valid formatType: "full", "long", "medium", "short". If no formatType given, the default format of the locale is returned.

   ex,

   ```javascript
   worldtime.getTimeFormat(uobj, 'short');
   // H:mm
   ```

 * **getFormattedDate ( _uObj_, _dateObj_ , _formatType_ )**
 
   returns the given date in the given and formatType. valid _formatType_: "full", "long", "medium", "short". If no formatType is given, the default format of the locale is returned.

   ex,

   ```javascript
   worldtime.getFormattedDate(uobj, new Date(), 'short');
   // 05-04-13
   ```

 * **getFormattedTime ( _uObj_, _dateObj_ , _formatType_ )**

   returns the given time in the given and formatType. valid _formatType_: "full", "long", "medium", "short". If no formatType is given, the default format of the locale is returned.

   ex,

   ```javascript
   worldtime.getFormattedTime(uobj, new Date(), 'short');
   // 21:23
   ```

 * **extractFormattedDate ( _uObj_, _dateStr_ , _formatType_ )**
 
   returns a date from a given dateStr following the given formatType. valid _formatType_: "full", "long", "medium", "short". If no formatType is given, the default format of the locale is returned.

   ex,

   ```javascript
   worldtime.extractFormattedDate(uobj, '05-04-13', 'short');
   // Fri Apr 05 13 23:13:55 GMT-0700 (PDT)
   ```
   
   
![scrounge](https://github.com/iambumblehead/scroungejs/raw/master/img/hand.png)[![es5 classic][7]][7]

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

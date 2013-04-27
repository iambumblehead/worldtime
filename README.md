worldtime
=========
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### OVERVIEW:

worldtime provides methods for manipulating international dates and converting dates to and from unicode format.

http://www.unicode.org/cldr/dtd/1.0/ldml-spec.htm
json version of the locale data markup language

XML files [from the Zend PHP framework][3] are used to create a default collection locale-specific JSON files. These files are included with world time.

what's good about this script:

  - format and unformat dates using unicode [forms][2]
  - create and use `YMDArr` objects to simplify time manipulation

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: http://github.com/iambumblehead/worldTime            "worldTime"
[2]: http://cldr.unicode.org/translation/date-time        "unicode"
[3]:https://github.com/magento/magento2/tree/master/lib/Zend/Locale/Data

---------------------------------------------------------
#### <a id="install"></a>INSTALL:

simpleTime may be downloaded directly or installed through `npm`.

 * **npm**   

 ```bash
 $ npm install simpleTime
 ```

 * **Direct Download**
 
 ```bash  
 $ git clone https://github.com/iambumblehead/simpleTime.git
 ```

---------------------------------------------------------
#### <a id="test"></a>TEST:

 to run tests, use `npm test` from a shell.

 ```bash
 $ npm test
 ```

---------------------------------------------------------

#### <a id="get-started">GET STARTED:

 > *javascript file*

 > ```javascript
   var SimpleTime = require('simpleTime'), t;
   t = SimpleTime.getYMDArrDate(['2013', '4', '4']);
   t = SimpleTime.getDayFromDate(t, 4);
   console.log(t.getDate()); // 8
   ```

---------------------------------------------------------

#### <a id="license">License:

(The MIT License)

Copyright (c) 2013 [Bumblehead][0] <chris@bumblehead.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

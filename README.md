worldtime
=========
**(c)[Bumblehead][0], 2013** [MIT-license](#license)  

### Overview:

worldtime provides methods for manipulating international dates, converting dates to and from unicode format.

worldtime uses the [official Unicode ldml-JSON files][2] for formatting and parsing international dates and times. Use [json-locale][3] to get these files and optimise them. It is a **good** thing that this script uses official unicode files, see [json-locale][3] for more information.

worldtime extends [simpletime][4]. no libraries are required. just simpletime, worldtime and unicode JSON files.

what's good about this script:

  - format and unformat internation time using unicode [forms][5]
  - create and use `YMDArr` objects to simplify time manipulation
  - small. 160 loc, casual, un-minified source

[0]: http://www.bumblehead.com                            "bumblehead"
[1]: http://github.com/iambumblehead/worldTime             "worldTime"
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

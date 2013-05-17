var WorldTime = require('../worldtime');

var en_USObj = require('./locale/en_US.json');
var es_ESObj = require('./locale/es_ES.json');
var es_CLObj = require('./locale/es_CL.json');

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

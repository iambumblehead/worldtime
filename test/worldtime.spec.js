var WorldTime = require('../worldtime');

describe("WorldTime.isTest", function () {

  it("should return true", function () {

    console.log(WorldTime('EN-us'));
    expect(WorldTime('EN-us').isTest()).toBe(true);
  });

  it("should load a locale map", function (done) {
    WorldTime('EN-us').localeMethods.loadMap('../locale/en-US/base.json', function (err, res) {
      consoe.log('base.json?');
      expect( err ).toBe( null );      
      done();
    });

  });


});

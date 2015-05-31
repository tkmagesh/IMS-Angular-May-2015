'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html#/view1');
    });


    it('should render view1 when user navigates to /view1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
    
  describe('greet', function() {

    beforeEach(function() {
      browser.get('index.html#/greet');
    });

    /*For Protractor API refer - http://angular.github.io/protractor/#/api  */
    it('should display a greet message when greeted', function() {
        var textBox = element(by.model("name"));
        textBox.sendKeys("Magesh");
        
        var greetBtn = element(by.buttonText("Greet"));
        greetBtn.click();
        
        var div = element(by.binding("greetMsg"));
        expect(div.getText()).toBe("Hi Magesh, Have a nice day!");
    });

  });
});

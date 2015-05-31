describe("A Greet Controller", function(){
    
    beforeEach(module("myApp.greet"));
    
    it("Should have the name defaults to empty string", inject(function($controller){
        
        var dummyScope = {};
        $controller("greetController", {$scope : dummyScope});
        expect(dummyScope.name).toBe('');
    }));
    it("Should have the greetMsg defaults to empty string", inject(function($controller){
        
        var dummyScope = {};
        $controller("greetController", {$scope : dummyScope});
        expect(dummyScope.greetMsg).toBe('');
    }));
    it("Should populate the greetMsg when greeted", inject(function($controller){
        var dummyScope = {};
        $controller("greetController", {$scope : dummyScope});
        dummyScope.name = "Magesh";
        dummyScope.greet();
        expect(dummyScope.greetMsg).toBe('Hi Magesh, Have a nice day!');
    }));
    it("should trim the text using trimText filter", inject(function($filter){
        var trimText = $filter("trimText");
        var data = "Laboris ad mentitum si offendit praetermissum";
        var expected = "Laboris ad mentitum ...";
        
        var result = trimText(data);
        expect(result).toBe(expected);
    }));
});

function add(x,y){
    console.log("returning result");
    return x + y;
}

function addClient(x,y){
    console.log("invoking add");
    var result = add(x,y);
    console.log("result = ", result);
}

/****************************************/
//Callback
function addAsync(x,y, onResult){
    setTimeout(function(){
        console.log("returning result");
        var result = x+y;
        if (typeof onResult === "function")
            onResult(result);
    },3000);
}

function asyncAddClient(x,y){
    console.log("invoking add");
    var result = addAsync(x,y, function(result){
        console.log("result = ", result);
    });
}

/****************************************/
//Events
var adder = (function(){
    var _callbacks = [];
    return {
        addResultCallback : function(callback){
            _callbacks.push(callback);
        },
        add : function(x,y){
            setTimeout(function(){
                console.log("returning result");
                var result = x+y;
                _callbacks.forEach(function(callback){ callback(result); });
            },3000);
        }
    }
})();

adder.addResultCallback(function(result){
    console.log("result = ", result);
});
adder.add(100,200);

/****************************************/
//Promise
function addUsingPromise(x,y){
    var p = new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("returning result");
            var result = x + y;
            resolve(result);
        },3000)
    });
    return p;
}


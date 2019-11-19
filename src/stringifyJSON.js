// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;
​
// but you don't so you're going to write it from scratch:
​
var stringifyJSON = function(obj) {
  if( typeof(obj) === "number" || typeof(obj) === "boolean"  ){
  	return ""+obj+""; 
​
  }
  else if(typeof(obj) === "string"){
  	return '"'+obj+'"' ;
  }
  else if( obj === "undefined"|| obj === "null" || typeof(obj) === "function" || typeof(obj) === "symbol"|| obj === "Infinity" || isNaN(obj) || typeof(obj) === "null"  ){
  	return null;
  }
 
​
  else if(obj instanceof Set || obj instanceof Map || obj instanceof WeakMap || obj instanceof WeakSet ){
  	return "{}";
  }
​
  else if( Array.isArray(obj)){
  		var arr = [];
   		var a = '';
   		var b ="";
  		for (var i = 0; i < obj.length; i++) {
  			arr.push(stringifyJSON(obj[i]));
  			
 		}
  		
  		for(var j =0;j<arr.length ; j++){
   			a = a + '"'+ arr[j] +'",' ;
​
 		}
   		 b = a.substring(0,a.length-1);
  		 return  "["+ b + "]";
​
  	}
​
  else if(typeof(obj) === 'object'){
  	var s = '';
    var n = "";
   	for(var key in obj){
   		if(obj.hasOwnProperty(key) === false){
  			return false;
   		}
​
  		
      else {
   		for (var i in key){
  		
  			s = s + '"' + key[i] +'"'+ ":"+ obj[key]+ "," ;
  			
​
  	}
  	
   }
 
​
   }
   n = s.substring(0,s.length-1);
  	return "{"+ n + "}";
  	
 }
​
};
  


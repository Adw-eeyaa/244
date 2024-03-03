
var f = require('fs');
 f.unlink('avt.jpg',function(err){
    if(err) throw err;
    console.log("saved");
  
});

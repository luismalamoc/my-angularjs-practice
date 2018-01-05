function asColor(value,color) {
   
    if (typeof (value)==="string") {       
        return value.fontcolor(color)      
       
    } else if (angular.isArray(value)) {
      var newValue=[];
       
      for(var i=0;i<value.length;i++) {
        if (typeof (value[i])==="string") {
          newValue.push(value[i].fontcolor(color));
        }
      }
       
      return newValue;
    } else {
      return value;
    }
  }
   
  app.filter("asColor", function () {
    return asColor;
  });
  
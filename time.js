//time検索
function find_time(type,name, dat, lastRow, lastColumn){
  
  var array2=[]
  
  if (type == "PB"){
    var X=0;
  }
  else if(type == "UB"){
    var X=1;
  }
  else{
    var X=2;
  }
        
 
  //i＝１(行数)からなめていく
  for(var i=1;i<dat.length;i++){
    
    //名前は１列目（2-1=1）に書いてあるからdat[i][1]
    if(dat[i][1] === name){
      
      //4列目から記録が書いてある
      for(var k = 3;k<lastColumn;k++){
        
        //2行目(3-1=2)に種目のカラムが書いてある
        //type:PBなら+0をする、SBなら＋２
        var res = dat[2][k] + ':' + dat[i+X][k];
        array2.push(res)
            
        //return res
      }
      return array2
      
    }
  }
}

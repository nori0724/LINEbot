
// LINE developersのメッセージ送受信設定に記載のアクセストークン
var ACCESS_TOKEN = 'f9PGZphE44G03rXet+gtSdEeVJy8XT+WpYnJO4PpKhqCWvl4eu7ghjZ44oHvf27jHf5eWrphUz0dlv73ylk9U0GrlVoxwsMceQoUFNZDrIdZBNBitAR/XElwfLFcEdSGN9fT3hvLAOfZCTXa2UWtKQdB04t89/1O/w1cDnyilFU=';
function doPost(e) {
  
  
  // JSONをパース
  var json = JSON.parse(e.postData.contents);

  // 送信されてきたメッセージを取得
  var user_message = json.events[0].message.text;
  
  // 返信するためのトークンを取得
  var reply_token= json.events[0].replyToken;
  if (typeof reply_token === 'undefined') {
    return;
  }  
  
  // 応答メッセージ用のAPI URL
  var url = 'https://api.line.me/v2/bot/message/reply';
  
  var url_googleform = "https://forms.gle/2JS5P9GbNJZ53YuYA"
  
  
  //メッセージを改行ごと（PB・SB、パート、名前）に分割
  var command = user_message.split("\n");
  
  var reply_messages;
  var res;
  
  if (command[0] =="PB" || command[0] =="SB"){
    var type = command[0]; //PBSB取得
    var part = command[1]; //パート取得
    var name =  command[2]; //名前取得
     
    if(command[1] == "壱パ" || command[1] == "弐パ" || command[1] == "中距離" || command[1] == "長距離" || command[1] == "投擲" || command[1] == "跳躍" ){
      var [sheet, dat, lastRow, lastColumn] = find_part(command[1]);
      reply_messages= find_time(type,name, dat, lastRow, lastColumn);
      
      if (typeof reply_messages=="undefined"){
        reply_messages = "エラーが起きました。"
        
        var messages = [{
          'type': 'text',
          'text':  reply_messages,
        }]
        
        var meg1 = {
          'type': 'text',
          'text': "※名前が間違っているか、その人のデータがない可能性があります。",    
        }
        messages.push(meg1);
       
      }
      else{
    
      var messages = [{
          'type': 'text',
          'text':  reply_messages[0],
        }]
      
      var meg1 = {
        'type': 'text',
        'text': reply_messages[1],    
      }
      messages.push(meg1);
      
      var meg2 = {
        'type': 'text',
        'text': reply_messages[2],    
      }
      messages.push(meg2);
      
      var meg3 = {
        'type': 'text',
        'text': reply_messages[3],    
      }
      messages.push(meg3);
      
      var meg4 = {
        'type': 'text',
        'text': reply_messages[4],    
      }
      messages.push(meg4);
   
      }
     
    }else {
      reply_messages = "パート名は\n・中距離\n・長距離\nの中から選んで入力してください。"
      //reply_messages = "パート名は\n・壱パ\n・弐パ\n・中距離\n・長距離\n・投擲\n・跳躍\nの中から選んで入力してください。"
      var messages = [{
          'type': 'text',
          'text':  reply_messages,
        }]
      }
         
    
  }else if ('記録集計をしたい' == user_message) {
    
    // 「記録集計をしたい」と入力されたときの返信メッセージ
    var reply_messages = "記録集計のご協力ありがとうございます!\n下記のフォームの回答をお願いします。";
    messages = [
      {
        'type': 'text',
        'text':  reply_messages,
       }
    ]
    
    var meg1 = {
      'type': 'text',
      'text': url_googleform,    
    }
    messages.push(meg1);
    
  } else if ('シーズンベストを検索したい' == user_message) {
    reply_messages = "検索したい人の記録とパートと名前を正確に入れてください。\n例↓";
    messages = [
      {
        'type': 'text',
        'text':  reply_messages,
       }
    ]
    
    var meg1 = {
      'type': 'text',
      'text': "SB\n中距離\n高橋正憲" , 
    }
    messages.push(meg1);

  } else if ('自己ベストを検索したい' == user_message) {
    reply_messages = "検索したい人の記録とパートと名前を正確に入れてください。\n例↓";
    messages = [
      {
        'type': 'text',
        'text':  reply_messages,
       }
    ]
    
    var meg1 = {
      'type': 'text',
      'text': "PB\n中距離\n高橋正憲" , 
    }
    messages.push(meg1);

  } else if ('新歓について知りたい'== user_message){
    reply_messages = 'こちらが新歓のビラになります。\nhttps://pbs.twimg.com/media/D2a1MQ4U8AAgRJO.jpg:large';
    messages = [
      {
        'type': 'text',
        'text':  reply_messages,
       }
    ]
    
    var meg1 = {
      'type': 'text',
      'text': "最新情報はSNSで確認してくださいね。\n新歓Twitter\nhttps://twitter.com/okadai_tftf_s" , 
    }
    messages.push(meg1);
    
    var meg2 = {
      'type': 'text',
      'text': "新歓Instagarm\nhttps://t.co/eTcg3lyuUi",    
    }
    messages.push(meg2);
    
  }else if ('ホームページを見たい'== user_message) {
    
    reply_messages = "こちらをご覧ください。";
    messages = [
      {
        'type': 'text',
        'text':  reply_messages,
       }
    ]
    
    var meg1 = {
      'type': 'text',
      'text': "http://okayamatandf.g3.xrea.com/" , 
    }
    messages.push(meg1);
    
  }else if ('Twitterを見たい'== user_message) {
    
    reply_messages = "こちらをご覧ください。";
    messages = [
      {
        'type': 'text',
        'text':  reply_messages,
       }
    ]
    
    var meg1 = {
      'type': 'text',
      'text': "https://twitter.com/okadaitaf" , 
    }
    messages.push(meg1);
      
  } else {
    reply_messages = 'メッセージありがとうございます！\nご用件は何でしょうか\nリストから選んでください。'
    messages = [
      {
        'type': 'text',
        'text':  reply_messages,
       }
    ]
  }


    
  UrlFetchApp.fetch(url, {
  'headers': {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + ACCESS_TOKEN,
  },
  'method': 'post',
  'payload': JSON.stringify({
    'replyToken': reply_token,
    'messages': messages,
   }),
  });
  return ContentService.createTextOutput(JSON.stringify({'content': 'post ok'})).setMimeType(ContentService.MimeType.JSON);
}
 
  
//part検索
function find_part(part) {
  
  if("中距離"==part){
    var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1GNn0ujF2TsDPq8uRMRhi4h4NNjhK69JPy3T3V8ENNc4/edit#gid=0");
    var dat = sheet.getDataRange().getValues(); //受け取ったシートのデータを二次元配列に取得
    var lastRow=sheet.getDataRange().getLastRow(); //対象となるシートの最終行を取得
    var lastColumn = sheet.getDataRange().getLastColumn();
    return [sheet, dat, lastRow, lastColumn];
  }
  else　if("長距離"==part){
    var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1mMD7nfZJt2J-daF7KtUclBsTlp0nklBbFEGFGp_8zww/edit#gid=0");
    var dat = sheet.getDataRange().getValues(); //受け取ったシートのデータを二次元配列に取得
    var lastRow=sheet.getDataRange().getLastRow(); //対象となるシートの最終行を取得
    var lastColumn = sheet.getDataRange().getLastColumn();
    return [sheet, dat, lastRow, lastColumn];
  }

}



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

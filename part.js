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

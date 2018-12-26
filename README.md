# DateUtil 日期元件的使用方法
| #| 名稱                                     | 描述                             | 返回型別 | 參數 |
| -|:----------------------------------------| :-------------------------------- |:-------:|:----|
| 1| convertDate(ds, type)                   | 將時間字串轉成Date                 |Date     |<ul><li>ds= 時間字串</li><li>type= 時間字串屬於哪種格式<br>(formatYMD/formatHN/formatYMDHN)</li></ul>|
| 2| dateToStrSet(d, ymdSign, hnsSign, type) | 將時間轉成字串                     |String   |<ul><li>d= Date時間</li><li>ymdSign= 年月日的格式("/" or "-")</li><li>hnsSign= 時分秒的格式(":")</li><li>type= 字串的格式種類<br>(formatYMD/formatHN/formatYMDHN)</li></ul>|
| 3| shift($p, settingOption)                | 欄位上的時間字串要遞增或遞減多少單位 |String   |<ul><li>$p= 欄位名稱</li><li>settingOption= DateShiftSetting.genSettingOption()<br>設定參數物件</li></ul>|
| 4| dateAdd(interval,number,date)	          | 時間遞增或遞減多少單位              |Date     |<ul><li>interval= 單位<br>(getYear(),getMonth(),getDay(),getHour(),<br>getMinute(),getWeek(),getSecond())</li><li>number= 增減之數值</li><li>date= Date時間</li></ul>|
## Example
```
1. var now = DateUtil.convertDate("2018-01-10 12:10", DateShiftSetting.formatYMDHN());
```
```
2. var text = DateUtil.dateToStrSet(new Date(), "-", ":", DateShiftSetting.formatYMDHN());
```
```
3. $('#time')輸入框增加十分鐘變成$('#tenTime')的值
var shiftSettingOption = DateShiftSetting.genSettingOption();
shiftSettingOption.type = DateShiftSetting.getMinute();
shiftSettingOption.num = 10;
var before = DateUtil.shift($('#time'),shiftSettingOption);//shift($(欄位名稱), 設定參數物件)
$('#tenTime').val(before);
```
```
4. var date = DateUtil.dateAdd(DateShiftSetting.getMinute(),5,new Date());現在時間增加五分鐘
```
# $.datetimeShift的使用方法
```
$.datetimeShift($so, $eo, settingOption)
//$so = $(開始時間的欄位id)
//$eo = $(結束時間的欄位id)
//settingOption = DateShiftSetting.genSettingOption(); 產生日期設定物件
```
## 日期設定物件的屬性說明
![](https://i.imgur.com/tDRQlEF.png)
### Example
```
時間格式為yyyy/mm/dd,結束時間為現在時間,開始時間為結束時間往前一日

var shiftSettingOption = DateShiftSetting.genSettingOption();
shiftSettingOption.format = DateShiftSetting.formatYMD();
shiftSettingOption.ymdSign = "/";
shiftSettingOption.type = DateShiftSetting.getDay();
ymdCalendar = $.datetimeShift($('#SD_2'), $('#ED_2'), shiftSettingOption);
```

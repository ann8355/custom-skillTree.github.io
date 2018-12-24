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
3. var before = DateUtil.shift($('#time'),shiftSettingOption);參考範例二
```
```
4. var date = DateUtil.dateAdd(DateShiftSetting.getMinute(),5,new Date());現在時間增加五分鐘
```

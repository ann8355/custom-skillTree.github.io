/***
 * 與時間型別轉換或計算相關之方法
 */
function datetimeUtil(){}
var DateUtil = new datetimeUtil();

/**
 * 將時間轉成字串
 * @param d Date時間
 * @param ymdSign 年月日的格式(/or-)
 * @param hnsSign 時分秒的格式(:)
 * @param type 字串的格式種類(formatYMD/formatHN/formatYMDHN)
 * @returns {String}
 */
datetimeUtil.prototype.dateToStrSet = function (d, ymdSign, hnsSign, type) {
	function twoDigit(num){
		if(num < 10){
			return "0" + num;
		}
		return num;
	}
	var ymdPattern = d.getFullYear() + ymdSign + twoDigit(d.getMonth() + 1) + ymdSign
	+ twoDigit(d.getDate());
	var hmPattern = twoDigit(d.getHours()) + hnsSign + twoDigit(d.getMinutes());
	switch(type){
	case 1:
		return ymdPattern;
		break;
	case 2:
		return hmPattern;
		break;
	case 3:
		return ymdPattern + " " + hmPattern;
		break;
	}
// + ":" + twoDigit(d.getSeconds());
}

/**
 * 將時間字串轉成Date
 * @param ds 時間字串
 * @param type 時間字串屬於哪種格式(formatYMD/formatHN/formatYMDHN)
 * @returns {Date}
 */
datetimeUtil.prototype.convertDate = function (ds, type){
//	if(ds.length < 14){
//		return new Date();
//	}
	switch(type){
	case 1:
		var year = ds.substr(0, 4);
		var mon = ds.substr(5, 2);
		var day = ds.substr(8, 2);
		var d = new Date(parseInt(year), parseInt(mon)-1, parseInt(day), 0, 0, 0, 0);
		return d;
		break;
	case 2:
		var hour = ds.substr(0, 2);
		var min = ds.substr(3, 5);
		var d = new Date(new Date().getYear(), new Date().getMonth(), new Date().getDate(), parseInt(hour), parseInt(min), 0, 0);
		return d;
		break;
	case 3:
		var year = ds.substr(0, 4);
		var mon = ds.substr(5, 2);
		var day = ds.substr(8, 2);
		var hour = ds.substr(11, 2);
		var min = ds.substr(14, 2);
		//var sec = ds.substr(17, 2);
		var d = new Date(parseInt(year), parseInt(mon)-1, parseInt(day), parseInt(hour), parseInt(min), 0, 0);
		return d;
		break;
	}
}

/**
 * 欄位上的時間字串要遞增或遞減多少單位
 * @param $p 欄位名稱
 * @param settingOption 設定參數物件
 * @returns {String}
 */
datetimeUtil.prototype.shift = function($p, settingOption){
	var val = $p.val();
	if(val == ''){//若無則帶現在時間
		val = this.dateToStrSet(new Date(), settingOption.ymdSign, settingOption.hnsSign, settingOption.format);
	}
	var dateType = this.convertDate(val, settingOption.format);
	switch(settingOption.type){
		//年
		case "y":
			dateType.setYear(dateType.getYear() + (settingOption.num));
			break;
		//月
		case "m":
			dateType.setMonth(dateType.getMonth() + (settingOption.num));
			break;
		//日
		case "d":
			dateType.setDate(dateType.getDate() + (settingOption.num));
			break;			
		//時
		case "h":
			dateType.setHours(dateType.getHours() + (settingOption.num));
			break;		
		//分
		case "n":
			dateType.setMinutes(dateType.getMinutes() + (settingOption.num));
			break;							
	}			
	return this.dateToStrSet(dateType, settingOption.ymdSign, settingOption.hnsSign, settingOption.format);
}

/**
 * 時間遞增或遞減多少單位
 * @param interval 相差的單位("y"=年,"m"=月,"d"=日,"w"=週,"h"=時,"n"=分,"s"=秒,"l"=毫秒)
 * @param number 增減之數值
 * @param date Date時間
 * @returns {Date} 時間
 */
datetimeUtil.prototype.dateAdd = function (interval,number,date){
 switch(interval){
  case "y": return new Date(date.setFullYear(date.getFullYear()+number));
  case "m": return new Date(date.setMonth(date.getMonth()+number));
  case "d": return new Date(date.setDate(date.getDate()+number));
  case "w": return new Date(date.setDate(date.getDate()+7*number));
  case "h": return new Date(date.setHours(date.getHours()+number));
  case "n": return new Date(date.setMinutes(date.getMinutes()+number));
  case "s": return new Date(date.setSeconds(date.getSeconds()+number));
  case "l": return new Date(date.setMilliseconds(date.getMilliseconds()+number));
 } 
}
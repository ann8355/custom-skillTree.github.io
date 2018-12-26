/***
 * 時間參數相關之設定
 */
function datetimeSetting(){}
var DateShiftSetting = new datetimeSetting();


function SettingOption(){
	this.format = 3;//預設為'Y-m-d H:i'
	this.ymdSign = "-";//年月日的格式
	this.hnsSign = ":" //時分秒的格式
	this.step = 5; //設置時分的間隔
	this.type = "h";//shift之單位
	this.num = -1; //shift之數值
	
	//取得時間的格式
	this.getFormatPatten = function(){
		var ymdPattern = "Y" + this.ymdSign + "m" + this.ymdSign+ "d";
		var hmPattern = "H"+ this.hnsSign + "i";
		switch(this.format){
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
	}
	
	//是否顯示timepicker
	this.showTimepicker = function(){
		switch(this.format){
		case 1:
			return false;
			break;
		case 2:
			return true;
			break;
		case 3:
			return true;
			break;
		}
	}
	
	//是否顯示datepicker
	this.showDatepicker = function(){
		switch(this.format){
		case 1:
			return true;
			break;
		case 2:
			return false;
			break;
		case 3:
			return true;
			break;
		}
	}
}

/**
 * 取得年之單位
 * @returns {String}
 */
datetimeSetting.prototype.getYear = function(){return "y";}

/**
 * 取得月之單位
 * @returns {String}
 */
datetimeSetting.prototype.getMonth = function(){return "m";}

/**
 * 取得日之單位
 * @returns {String}
 */
datetimeSetting.prototype.getDay = function(){return "d";}

/**
 * 取得時之單位
 * @returns {String}
 */
datetimeSetting.prototype.getHour = function(){return "h";}

/**
 * 取得分之單位
 * @returns {String}
 */
datetimeSetting.prototype.getMinute = function(){return "n";}

/**
 * 取得秒之單位
 * @returns {String}
 */
datetimeSetting.prototype.getSecond = function(){return "s";}

/**
 * 取得毫秒之單位
 * @returns {String}
 */
datetimeSetting.prototype.getMillisecond = function(){return "l";}

/**
 * 取得週之單位
 * @returns {String}
 */
datetimeSetting.prototype.getWeek = function(){return "w";}

/**
 * 設定格式為年月日
 * @returns int
 */
datetimeSetting.prototype.formatYMD = function(){return 1;}

/**
 * 設定格式為時分
 * @returns int
 */
datetimeSetting.prototype.formatHN = function(){return 2;}


/**
 * 設定格式為年月日時分
 * @returns int
 */
datetimeSetting.prototype.formatYMDHN = function(){return 3;}

/**
 * 產生datetimepicker的屬性設定物件
 * @returns 物件
 */
datetimeSetting.prototype.genSettingOption = function(){return new SettingOption();}
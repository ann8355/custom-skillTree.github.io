/**
 * datetimeShift,js
 * Y-m-d H:i:s or Y-m-d H:i
 * author:Yoda 
 */
;(function($) {	
	$.datetimeShift = function($so, $eo, settingOption){		
		function ro($s, $e){
			// 開始時間事件
			$s.datetimepicker({
				format : settingOption.getFormatPatten(),
				onShow : function(ct) {
					if($e != null){
						var endTime = $e.val().split(" ");
						var maxDate = endTime[0].replace(/\-/g, '/');
						var maxTime = endTime[1];
						this.setOptions({
							maxDate : maxDate ? maxDate : false,
							//maxTime : maxTime ? maxTime : false
						});
					}
				},
				lang : 'ch',
				step : settingOption.step,
				timepicker: settingOption.showTimepicker(),
				datepicker: settingOption.showDatepicker()
			});
			
			$s.val(DateUtil.shift($s, settingOption));
			
			if($e != null){
				// 結束時間事件
				$e.datetimepicker({
					format : settingOption.getFormatPatten(),
					onShow : function(ct) {
						var startTime = $s.val().split(" ");
						var minDate = startTime[0].replace(/\-/g, '/');
						var minTime = startTime[1];
						this.setOptions({
							minDate : minDate ? minDate : false,
							//minTime : minTime ? minTime : false,
						});
					},
					lang : 'ch',
					step : settingOption.step,
					timepicker: settingOption.showTimepicker(),
					datepicker: settingOption.showDatepicker()
				});
			}
			$e.val(DateUtil.dateToStrSet(new Date(), settingOption.ymdSign, settingOption.hnsSign, settingOption.format));
			
			/**
			 * 位移-年
			 */
			this.yearShift = function(offsetnum) {
				settingOption.num = offsetnum;
				settingOption.type = DateShiftSetting.getYear();
				if($s != null){
					$s.val(DateUtil.shift($s, settingOption));
				}
				if($e != null){
					$e.val(DateUtil.shift($e, settingOption));
				}
			}
			
			/**
			 * 位移-月
			 */
			this.monthShift = function(offsetnum) {
				settingOption.num = offsetnum;
				settingOption.type = DateShiftSetting.getMonth();
				if($s != null){
					$s.val(DateUtil.shift($s, settingOption));
				}
				if($e != null){
					$e.val(DateUtil.shift($e, settingOption));
				}
			}
			
			/**
			 * 位移-日
			 */
			this.dayShift = function(offsetnum) {
				console.log("WwW"+offsetnum);
				settingOption.num = offsetnum;
				settingOption.type = DateShiftSetting.getDay();
				if($s != null){
					$s.val(DateUtil.shift($s, settingOption));
				}
				if($e != null){
					$e.val(DateUtil.shift($e, settingOption));
				}
			}
			
			/**
			 * 位移-時
			 */
			this.hourShift = function(offsetnum) {
				settingOption.num = offsetnum;
				settingOption.type = DateShiftSetting.getHour();
				if($s != null){
					$s.val(DateUtil.shift($s, settingOption));
				}
				if($e != null){
					$e.val(DateUtil.shift($e, settingOption));
				}
			}
			
			/**
			 * 位移-分
			 */
			this.minShift = function(offsetnum) {
				settingOption.num = offsetnum;
				settingOption.type = DateShiftSetting.getMinute();
				if($s != null){
					$s.val(DateUtil.shift($s, settingOption));
				}
				if($e != null){
					$e.val(DateUtil.shift($e, settingOption));
				}
			}		
		} 	
		return new ro($so, $eo);
	}
})(jQuery);
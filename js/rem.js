function browserRedirect() {//rem的单位设置
    //以下是各个系统检测
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	var win_width = $(window).width();

	if (!bIsIphoneOs && !bIsMidp && !bIsUc7 && !bIsUc && !bIsAndroid && !bIsCE && !bIsWM && win_width > 1024) {//若非移动系统
		$("html").css("font-size","100px");
		$("html").css("max-width","640px");
		$("html").css("margin","0 auto");
	} else{//若是移动系统
		var size = $(window).width()/6.4; //底层分为6.4份 1rem就是视图宽度的1/6.4
		$("html").css("font-size",size);  //单位应用到html
	}
}
browserRedirect();
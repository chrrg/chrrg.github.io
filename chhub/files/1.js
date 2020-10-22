toast("开始任务");
device.keepScreenOn(3600 * 1000);
device.keepScreenDim(3600 * 1000)
try {requiresApi(24);}catch (error){toast('需要在Android 7.0以上版本运行');throw "";}
auto.waitFor();
var Package="com.taobao.taobao"
var chfn=function(fn,timeout){
	if(!timeout)timeout=10000//10s
	var i=0;
	while(1){
		var result=fn()
		if(result){
			return result;
		}else{
			sleep(500);
			if(i++>(timeout/500)){
				toast("任务步骤超时，请重新运行！");
				// sleep(1000);
				// throw "";
				throw "";
			}
		}
	}
}
/**
 * 贝塞尔曲线
 * @param {坐标点} ScreenPoint 
 * @param {偏移量} Offset 
 */
function bezier_curves(ScreenPoint, Offset) {
    cx = 3.0 * (ScreenPoint[1].x - ScreenPoint[0].x);
    bx = 3.0 * (ScreenPoint[2].x - ScreenPoint[1].x) - cx;
    ax = ScreenPoint[3].x - ScreenPoint[0].x - cx - bx;
    cy = 3.0 * (ScreenPoint[1].y - ScreenPoint[0].y);
    by = 3.0 * (ScreenPoint[2].y - ScreenPoint[1].y) - cy;
    ay = ScreenPoint[3].y - ScreenPoint[0].y - cy - by;
    tSquared =Offset * Offset;
    tCubed = tSquared * Offset;
    result = {
        "x": 0,
        "y": 0
    };
    result.x = (ax * tCubed) + (bx * tSquared) + (cx * Offset) + ScreenPoint[0].x;
    result.y = (ay * tCubed) + (by * tSquared) + (cy * Offset) + ScreenPoint[0].y;
    return result;
};
/**
 * 曲线滑动
 * @param {*} qx 
 * @param {*} qy 
 * @param {*} zx 
 * @param {*} zy 
 * @param {*} time 
 */
function sml_move(qx, qy, zx, zy, time) {
    var xxy = [parseInt(time+Math.random()*100)];
    var point = [];
    var dx0 = {
        "x": qx,
        "y": qy
    };
    var dx1 = {
        "x": random(qx - 100, qx + 100),
        "y": random(qy, qy + 50)
    };
    var dx2 = {
        "x": random(zx - 100, zx + 100),
        "y": random(zy, zy + 50),
    };
    var dx3 = {
        "x": zx,
        "y": zy
    };
    for (var i = 0; i < 4; i++) {
        eval("point.push(dx" + i + ")");
    };
    for (let i = 0; i < 1; i += 0.08) {
        let newPoint=bezier_curves(point, i);
        xxyy = [parseInt(newPoint.x), parseInt(newPoint.y)]
        xxy.push(xxyy);
    }
    gesture.apply(null, xxy);
};
var p=console.log;
pp=function(data,offset,size){
	for(var i=offset;i<offset+size;i++){
		sleep(10);
		if(i>=data.length)return;
		p(data[i].id()+"|"+data[i].text()+"|"+data[i].desc()+"|"+data[i].className());
	}
}
// p(currentPackage());

if(currentPackage()!==Package){
	//需要启动tb
	app.launch(Package)
	chfn(function(){
		return currentPackage()===Package
	})
	chfn(function(){
		return desc("我的淘宝").findOnce()
	},20000);
}
cur=currentActivity()
// console.log(cur)
// console.log(textMatches(/.*?浏览\d+秒.*?/).findOnce()||descMatches(/.*?浏览\d+秒.*?/).findOnce())
// pp(packageName(Package).find(),0,500);
// exit()
if(cur!="com.taobao.tao.TBMainActivity"&&cur!="com.taobao.browser.BrowserActivity"){
	back();
	sleep(1000);
}
// if(cur=="com.taobao.browser.exbrowser.BrowserUpperActivity"||cur=="com.taobao.android.shop.activity.ShopRenderActivity"){
// 	back();
// 	sleep(1000);
// }
var autoclick=function(arr){
	for(var i=0;i<arr.length;i++){
		var result=arr[i]();
		if(result){
			for(var j=i;j>=0;j--){
				chfn(arr[j]).click()
			}
			return;
		}
	}
}

// p(currentActivity());

if(cur!="com.taobao.browser.BrowserActivity"||!text("累计任务奖励").findOnce()){
	autoclick([function(){
		return text("赚喵币").findOnce()
	},function(){
		return desc("养猫分20亿").findOnce()
	},function(){
		return desc("我的淘宝").findOnce()
	}])
}
if(text("赚喵币").findOnce())text("赚喵币").findOnce().click()

// p(text("浏览双11预售主会场(0/1)").findOnce().parent().parent().parent().children())

var TaskTitle=""
while(1){
	if(!text("累计任务奖励").findOnce()){
		if(text("赚喵币").findOnce())
			text("赚喵币").findOnce().click()
	}
	chfn(function(){
		return (TaskTitle==""||!text(TaskTitle).findOnce())&&text("累计任务奖励").findOnce()
	});
	sml_move(device.width / 2, device.height*0.5, device.width / 2,  device.height*0.1, 500);
	sleep(100)
	sml_move(device.width / 2, device.height*0.5, device.width / 2,  device.height*0.8, 500);
	var taskList=text("累计任务奖励").findOnce().parent().parent().parent().children()
	taskList.splice(0,1)
	var isFinish=true;
	for(var i=0;i<taskList.length;i++){
		var child=taskList[i].children();
		var buttonText=child[1].text()
		if(buttonText.startsWith("去")){
			TaskTitle=child[0].children()[0].text()
			// console.log(TaskTitle)
			if(TaskTitle.startsWith("浏览")||TaskTitle.startsWith("逛")||TaskTitle.startsWith("搜")||TaskTitle.startsWith("双")){
				//找到要运行的任务了
				isFinish=false;
				toast(TaskTitle)
				child[1].click()//执行任务
				sleep(2000)
				sml_move(device.width / 2, device.height*0.8, device.width / 2,  device.height*0.1, 862);

				chfn(function(){
					return textMatches(/.*?浏览\d+秒.*?/).findOnce()||descMatches(/.*?浏览\d+秒.*?/).findOnce()
				},20000);
				toast("任务已开始！")
				sleep(1000);

				sml_move(device.width / 2, device.height*0.8, device.width / 2,  device.height*0.1, 1562);
				sleep(2000);
				sml_move(device.width / 2, device.height*0.8, device.width / 2,  device.height*0.1, 2268);

				chfn(function(){
					return (textContains("全部完成啦").findOnce()||
						descContains("全部完成啦").findOnce()||
						textContains("任务完成").findOnce()||
						descContains("任务完成").findOnce()||
						textContains("任务已完成").findOnce()||
						descContains("任务已完成").findOnce()
						);
				},22000);
				sleep(500+1000*Math.random())
				back()
				sleep(1000)
				break;
			}
		}
	}//for
	if(isFinish)break;//任务完成
}
toast("任务完成！")
device.vibrate(500)
exit()
// pp(packageName(Package).find(),0,500);


// console.log(currentPackage())
// console.log(currentActivity())
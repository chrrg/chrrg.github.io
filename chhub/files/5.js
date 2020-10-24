var width=device.width
var height=device.height
alert("欢迎使用屏幕连点器！","您的设备分辨率为（x:"+width+",u:"+height+"）（屏幕左上角为0点）")
var x = rawInput("请输入需要连点的X坐标", width);
var y = rawInput("请输入需要连点的Y坐标", height);

var duration = rawInput("请输入点击间隔(ms)", 1000);

if(!confirm("确认5秒后开始执行吗？切换应用或按音量减可停止任务！"))exit()
sleep(5000)
var current=currentPackage()
while(1){
	sleep(duration);
	click(x,y);
	if(current!=currentPackage()){
		toast("检测到切换应用，已为您停止执行！")
		exit()
	}
}
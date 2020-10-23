// console.log(engines.myEngine().cwd())
// engines.execScript("UI", ("("+function(){
// 	console.log(engines.all())
// }).toString()+")()");
// engines.execScript("UI", ("("+function(){
// 	console.log(engines.all())
// }).toString()+")()");
// exit()

var api=require("api.js");
var storage = storages.create("github.com-chrrg-oneClickHub");
if(!storage.get("readme")){
	alert("欢迎使用","本软件可以一键自动完成各种任务\n运行需要启用无障碍服务！\n若失效请关闭无障碍服务再开启，或者重启手机！\n若闪退请卸载重装！");
	alert("启用无障碍服务","请在接下来弹出来的界面中启用本软件的无障碍服务")
	auto.waitFor();
	storage.put("readme",new Date().getTime())
}else{
	toast("欢迎使用一点仓库！运行需要启用无障碍服务！\n若失效请关闭无障碍服务再开启，或者重启手机！\n若闪退请卸载重装！");
}

var officialHub="https://chrrg.github.io/chhub/hub.json"//官方仓库地址
function getPath(path){return path.substr(0,path.lastIndexOf('/')+1);}//路径去掉文件名

var curHub=storage.get("myHub")//当前使用的仓库
if(!curHub){curHub=officialHub;storage.put("myHub",curHub)}
function isOfficalHub(){return curHub==officialHub}//当前仓库是否官方
function ifUnOfficialThenNoticeSwitch(text){if(!isOfficalHub()){if(confirm("温馨提醒",text)){curHub=officialHub;storage.put("myHub",curHub)}}}
ifUnOfficialThenNoticeSwitch("您正在使用非官方仓库："+curHub+"\n是否为您切换回官方仓库？")

var getRemoteCode=function(url,fn){
	var res=http.get(url, {});
	if(!res)throw "err";
	if(res.statusCode != 200){toast("请求失败: " + res.statusCode + " " + res.statusMessage);throw "";}//网络错误
	fn(res);
}
function responseToString(response){return response.body.string()}
function responseToJson(response){return response.body.json()}
function getHubPath(){return curHub}
function getHubData(fn){getRemoteCode(getHubPath(),function(response){var res=responseToJson(response);fn(res)})}
auto.waitFor();
var loading=engines.execScriptFile("loading.js");
function getUICode(hubData,fn){
	//获取ui界面的源码
	var ui_version=storage.get("ui_version")
	var ui_code=storage.get("ui_code")
	if(ui_code&&ui_version==hubData.ui[1]){fn(ui_code);return}//不需要更新
	getRemoteCode(getPath(hubData.HubRoot)+hubData.ui[0],function(response){
		var res=responseToString(response);
		storage.put("ui_version",hubData.ui[1]);
		storage.put("ui_code",res);
		fn(res);
	});
}
function wrapCodeRun(code,data){
	var is_ui="";
	if(code.startsWith('"ui";'))is_ui='"ui";'
	return engines.execScript("task_"+data.uniqueId, is_ui+api.getApi(data)+code);
}
try{
	getHubData(function(response){
		toast("仓库数据获取成功！")
		if(response.code!=200){toast(response.text);throw "";}//规范 不为200就要提醒用户
		if(!response.data)throw "";
		var data=response.data;
		if(data.HubRoot!=getHubPath())throw ""
		if(!data.list)throw "";
		if(!data.ui)throw "";
		storage.put("hubData",data);
		getUICode(data,function(ui_code){
			if(!ui_code)throw "";
			wrapCodeRun(ui_code,{
				uniqueId:"ui",
				extras:{
					hubData:data
				}
			});
			loading.getEngine().forceStop()
		})
	})
}catch(e){
	toast("网络异常，仓库数据获取失败！"+e)
	var ui_code=storage.get("ui_code")
	var data=storage.get("hubData")
	if(data.HubRoot!=getHubPath())ui_code=""
	if(!ui_code){alert("请连接网络后重新打开！");engines.stopAll();exit()}
	wrapCodeRun(ui_code,{
		uniqueId:"ui",
		extras:{
			hubData:data
		}
	});
	if(loading.getEngine())loading.getEngine().forceStop()
}
// console.log(engines.myEngine().cwd())
// engines.execScript("UI", ("("+function(){
// 	console.log(engines.all())
// }).toString()+")()");
// engines.execScript("UI", ("("+function(){
// 	console.log(engines.all())
// }).toString()+")()");
// exit()

var api=require("api.js");
var storage = storages.create("https://github.com/chrrg/oneClickHub");
if(!storage.get("readme")){
	alert("欢迎使用","本软件可以一键自动完成各种任务\n运行需要启用无障碍服务！\n若失效请关闭无障碍服务再开启，或者重启手机！\n若闪退请卸载重装！");
	alert("启用无障碍服务","请在接下来弹出来的界面中启用本软件的无障碍服务")
	auto.waitFor();
	storage.put("readme",new Date().getTime())
}else{
	toast("欢迎使用一点仓库！运行需要启用无障碍服务！\n若失效请关闭无障碍服务再开启，或者重启手机！\n若闪退请卸载重装！");
}

var officialHub="https://chrrg.github.io/chhub/"//官方仓库地址
var curHub=storage.get("myHub")//当前使用的仓库
if(!curHub){curHub=officialHub;storage.put("myHub",curHub)}
function isOfficalHub(){return curHub==officialHub}//当前仓库是否官方
function ifUnOfficialThenNoticeSwitch(text){if(!isOfficalHub()){if(confirm("温馨提醒",text)){curHub=officialHub;storage.put("myHub",curHub)}}}
ifUnOfficialThenNoticeSwitch("您正在使用非官方仓库："+curHub+"\n是否为您切换回官方仓库？")

var getRemoteCode=function(url,fn){
	try{
		var r = http.get(url, {},function(res,err){
			try{
				if(err){console.error(err);return;}
				if(res.statusCode != 200){toast("请求失败: " + res.statusCode + " " + res.statusMessage);throw "";}//网络错误
				fn(res)
			}catch(e){fn(null)}
		});
	}catch(e){toast("系统出错！")}
}
function responseToString(response){return res.body.string()}
function responseToJson(response){return res.body.json()}
function getHubPath(){return curHub+"hub.json"}
function getHubData(fn){getRemoteCode(getHubPath+"?appVersion="+appVersion,function(response){if(!response)fn(null);var res=responseToJson(response);fn(res)})}
auto.waitFor();
var loading=engines.execScriptFile("loading.js");
function getUICode(hubData,fn){
	//获取ui界面的源码
	var ui_version=storage.get("ui_version")
	var ui_code=storage.get("ui_code")
	if(ui_code&&ui_version==hubData.ui[1]){fn(ui_code);return}//不需要更新
	getRemoteCode(hubData.HubRoot+hubData.ui[0],function(response){
		if(!response)fn(null);var res=responseToString(response);
		storage.put("ui_version",ui_version);
		storage.put("ui_code",ui_code);
		fn(res);
	});
	fn(ui_code);
}
function wrapCodeRun(code,uniqueId,data){
	var is_ui="";
	code=code.trim();
	if(code.startsWith('"ui";'))is_ui='"ui";'
	return engines.execScript("task_"+uniqueId, is_ui+api.getApi(data)+code);
}
var hubFn=function(response){
	if(!response)throw ""
	if(response.code!=200){toast(response.text);throw "";}//规范 不为200就要提醒用户
	if(!response.data)throw "";
	var data=response.data;
	if(!data.HubRoot)throw "";
	if(data.HubRoot!=getHubPath())throw ""
	if(!data.list)throw "";
	if(!data.ui)throw "";
	storage.put("hubData",data);
	getUICode(function(ui_code){
		if(!ui_code){
			throw "";
		}
		wrapCodeRun(ui_code,{
			uniqueId:"ui",
			extras:{
				hubData:data
			}
		})
	})
};

getHubData(hubFn)

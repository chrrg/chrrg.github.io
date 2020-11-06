//这个文件平时可以做测试使用


runTestUI();
// console.log("开始测试");//在这里也可以测试一些代码
// allDom();//显示所有控件
// runTest(6);//输入6代表测试6.js

exit();//测试时请加上这行，下面是软件的源码，勿改
var eula = storages.create("github.com-chrrg-oneClickHub-eula");
if(!eula.get("readme")){
	if(!confirm("欢迎使用","本软件是完全免费且开源的\n任何人可以上传或下载脚本\n请自行辨别脚本安全\n作者不承担任何责任\nhttps://github.com/chrrg/oneClickHub/\n若不同意请点击取消")){toast("必须点击确定才能继续使用！");engines.stopAll();exit();}
	alert("启用无障碍服务","请在接下来弹出来的界面中启用本软件的无障碍服务");
	toast("欢迎使用一点仓库！运行需要启用无障碍服务！\n若失效请重启无障碍服务或手机！");
	auto.waitFor();
	eula.put("readme",new Date().getTime())
}else toast("欢迎使用一点仓库！运行需要启用无障碍服务！\n若失效请重启无障碍服务或手机！");
function runTestUI(){
	var hubData=storages.create("github.com-chrrg-oneClickHub").get("hubData")
	if(!hubData)throw "需要先获取仓库数据才能运行测试！";
	wrapCodeRun(files.read("files/ui.js"),{uniqueId:"app_ui",extras:{hubData:hubData}});
}
function runTest(id){
	var hubData=storages.create("github.com-chrrg-oneClickHub").get("hubData")
	if(!hubData)throw "需要先获取仓库数据才能运行测试！";
	wrapCodeRun(files.read("files/ui.js"),{uniqueId:"app_ui",extras:{hubData:hubData,testRun:id}});
}
function pp(data,offset,size){
	for(var i=offset;i<offset+size;i++){sleep(10);if(i>=data.length)return;
	console.log(data[i].id()+"|"+data[i].text()+"|"+data[i].desc()+"|"+data[i].className());}
}
function allDom(){pp(packageName(Package).find(),0,500)}
var storage = storages.create("github.com-chrrg-oneClickHub");
var officialHub="https://chrrg.github.io/chhub/hub.json"//官方仓库地址
function getPath(path){return path.substr(0,path.lastIndexOf('/')+1);}//路径去掉文件名

var curHub=storage.get("myHub")//当前使用的仓库
if(!curHub){curHub=officialHub;storage.put("myHub",curHub)}
function isOfficalHub(){return curHub==officialHub}//当前仓库是否官方
function ifUnOfficialThenNoticeSwitch(text){if(!isOfficalHub()){if(confirm("温馨提醒",text)){storages.remove("github.com-chrrg-oneClickHub");curHub=officialHub;storage.put("myHub",curHub);toast("请重启生效！");}}}

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
	toast("更新用户界面中...")
	getRemoteCode(getPath(hubData.HubRoot)+hubData.ui[0],function(response){
		var res=responseToString(response);
		storage.put("ui_version",hubData.ui[1]);
		storage.put("ui_code",res);
		fn(res);
	});
}
function wrapCodeRun(code,data){
	var api=require("api.js");
	var is_ui="";
	if(code.startsWith('"ui";'))is_ui='"ui";'
	return engines.execScript(data.uniqueId, is_ui+api.getApi(data)+"global.obj=null;"+code);
}
try{
	toast("开始获取仓库数据！\n"+curHub)
	getHubData(function(response){
		toast("仓库数据获取成功！")
		if(response.code!=200){toast(response.msg);throw "";}//规范 不为200就要提醒用户
		if(!response.data)throw "";
		var data=response.data;
		if(data.HubRoot!=getHubPath())throw ""
		if(!data.list)throw "";
		if(!data.ui)throw "";
		storage.put("hubData",data);
		getUICode(data,function(ui_code){
			if(!ui_code)throw "UI获取失败！";
			wrapCodeRun(ui_code,{
				uniqueId:"app_ui",
				extras:{
					hubData:data
				}
			});
			loading.getEngine().forceStop()
		})
	})
}catch(e){
	toast("仓库数据获取失败！\n"+e)
	ifUnOfficialThenNoticeSwitch("数据获取失败！您正在使用第三方仓库："+curHub+"！\n是否需要切换到官方仓库？")
	var ui_code=storage.get("ui_code")
	var data=storage.get("hubData")
	if(!data||!data.HubRoot||data.HubRoot!=getHubPath())ui_code=""
	if(!ui_code){alert("请连接网络后重新打开！\n"+e);engines.stopAll();exit()}
	wrapCodeRun(ui_code,{
		uniqueId:"app_ui",
		extras:{
			hubData:data
		}
	});
	if(loading.getEngine())loading.getEngine().forceStop()
}
//提供api调用
var api={}
var wrapFuncString=function(fn,data){
	return "("+fn.toString()+")("+JSON.stringify(data)+");"
}
api.wrapFuncString=wrapFuncString
api.getApi=function(data){
	return wrapFuncString(function(data){
		var obj=global.obj={}
		obj.data=data;
		obj.apiCode=""
		obj.raw={}
		var myapi=require("api.js")
		obj.myapi=myapi;
		var uniqueId=data.uniqueId
		var api={
			getId(){
				return uniqueId
			},
			getExtras(){
				return data.extras
			}
		}
		global.api=api;//导出api给应用
		if(uniqueId=="app_ui")//root应用可以设置
			api.setApi=function(code){
				obj.apiCode+=myapi.wrapFuncString(code).replace(/[\r\n]/g, "")
			}

		obj.raw.storages=global.storages
		global.storages={
			create(str){
				return obj.raw.storages.create("appdata_"+uniqueId)
			},remove(str){
				return obj.raw.storages.remove("appdata_"+uniqueId)
			}
		}
		obj.raw.engines=global.engines
		global.engines={
			execScript(name, script, config){
				var code="";
				if(script.startsWith('"ui";'))code+='"ui";';
				var extras=null;
				if(config&&config.extras)extras=config.extras
				code+=myapi.getApi({uniqueId:uniqueId+"_"+name,extras:extras});
				if(obj.apiCode)code+=obj.apiCode;
				code+=";global.obj=void 0;";
				code+=script;
				return obj.raw.engines.execScript(name, code, config);
			},stopAll(){
				obj.raw.engines.stopAll()
			}
		}

	},data).replace(/[\r\n]/g, "");
}
module.exports = api;
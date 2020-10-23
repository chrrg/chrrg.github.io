//提供api调用
var api={}
var wrapFuncString=function(fn,data){
	return "("+fn.toString()+")("+JSON.stringify(data)+");"
}
api.wrapFuncString=wrapFuncString
api.getApi=function(data){
	return wrapFuncString(function(data){
		global.obj={}
		var obj=global.obj
		obj.data=data
		obj.apiCode=""
		var myapi=require("api.js")
		obj.myapi=myapi;
		var uniqueId=data.uniqueId//
		global.api=(function(){
			return {
				getId(){
					return uniqueId
				},
				getExtras(){
					return data.extras
				}
			}
		})()
		if(uniqueId=="app_ui")//root应用可以设置
			global.api.setApi=function(code){
				throw "应用权限不足！";
				obj.apiCode=wrapFuncString(code).replace(/[\r\n]/g, "")
			}
		global.tempstorages=global.storages
		global.storages=(function(){
			return {
				create(str){
					return global.tempstorages.create("appdata_"+uniqueId)
				},remove(str){
					return global.tempstorages.remove("appdata_"+uniqueId)
				}
			}
		})()
		global.tempengines=global.engines
		global.engines=(function(){
			return {
				execScript(name, script, config){
					var is_ui=""
					if(script.startsWith('"ui";'))is_ui='"ui";'
					var extras
					if(config&&config.extras)extras=config.extras
					return global.tempengines.execScript(name, is_ui+myapi.getApi({uniqueId:uniqueId+"_"+name,extras})+obj.apiCode+"global.obj=null;"+script, config)
				}
			}
		})


	},data).replace(/[\r\n]/g, "");
}
module.exports = api;
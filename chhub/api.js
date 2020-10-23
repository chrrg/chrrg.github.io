//提供api调用
var api={}
var wrapFuncString=function(fn,data){
	return "("+fn.toString()+")("+JSON.stringify(data)+");"
}
api.wrapFuncString=wrapFuncString
api.getApi=function(data){
	return wrapFuncString(function(data){
		console.log("应用的输入：",data);

		var uniqueId=data.uniqueId
		global.api=(function(){
			return {
				getMyId(){
					return uniqueId
				},
				getExtras(){
					return data.extras
				},
				test(){
					toast("666")
				}
			}
		})()
		var tempstorages=global.storages
		global.storages=(function(){
			return {
				create(str){
					return tempstorages.create("appdata_"+uniqueId)
				},remove(str){
					return tempstorages.remove("appdata_"+uniqueId)
				}
			}
		})()
		// var tempengines=global.engines
		// global.engines=(function(){
		// 	return {
		// 		execScript(name, script, config){
		// 			return tempengines.execScript(name, script, config)
		// 		},remove(str){
		// 			return tempstorages.remove("appdata_"+uniqueId)
		// 		}
		// 	}
		// })

	},data).replace(/[\r\n]/g, "");
}
module.exports = api;
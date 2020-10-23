//提供api调用
var api={}
var wrapFuncString=function(fn,data){
	return "("+fn.toString()+")("+JSON.stringify(data)+");"
}
api.wrapFuncString=wrapFuncString
api.getApi=function(data){
	return "api="+wrapFuncString(function(data){
		var obj;
		console.log(data)
		return {
			getMyId(){
				return data.uniqueId
			},
			test(){
				toast("666")
			}
		}
	},data).replace(/[\r\n]/g, "");
}
module.exports = api;
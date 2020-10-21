// console.log(text("赚喵币").findOnce())
// exit()
engines.execScriptFile("1.js");
exit()
//仓库
toast("欢迎使用一点仓库！");
var storage = storages.create("caohongchrrg@qq.com:chhub");
item=storage.get("list");//获取缓存
try{
	var r = http.get("https://chrrg.github.io/chhub/hub.json", {});
	if(r.statusCode != 200){
	    toast("请求失败: " + res.statusCode + " " + res.statusMessage);
	}else{
	    var response = r.body.json()
	    if(response && typeof response.code!=="undefined"){
	        if(response.code!=200){
	            toast(response.text);
	        }else{
	        	if(response.data.list){
	        		var list=[];
		        	for(var i in response.data.list){
		        		var item=response.data.list[i]
		        		list.push(item.name)
		        		storage.put("item_"+item.name,item);
		        		/*
							{
					            "name": "2020双十一喵喵",
					            "file": "files/1.js",
					            "version": 1,
					            "desc": "修复"
					        }
		        		*/
		        		if(!storage.get("data_"+item.name)){
		        			storage.put("data_"+item.name,{
		        				"installTime":new Date().getTime(),//安装时间
		        				"useCount":0,//使用次数
		        				"useLast":0,//上次使用时间
		        				"currentVersion":"",//当前版本号
		        			});
		        		}
		        	}
		        	storage.put("list",list);
		        }
	        }
	    }
	}
}catch(e){toast("获取更新失败！请检查网络！");}
engines.execScriptFile("ui.js");
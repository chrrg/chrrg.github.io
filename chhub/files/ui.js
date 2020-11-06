"ui";
device.keepScreenOn(3600 * 1000);
device.keepScreenDim(3600 * 1000)
// <text id={"text"} textSize="16sp" />
ui.layout(
    <vertical>
        <appbar>
            <toolbar id="toolbar" title="一点仓库-oneClickHub"/>
            <tabs id="tabs"/>
        </appbar>
        <viewpager id="viewpager">
            <frame>
                <ScrollView>
                    <vertical>
                        <text id={"mylist_ifno"} text="快去在线仓库下载脚本吧！" visibility="gone" textSize="24sp" gravity="center" marginTop="80"/>
                        <list id={"mylist"}>
                            <relative w="*">
                                <horizontal paddingLeft="10">
                                    <vertical w="*">
                                        <horizontal id="info1">
                                            <text text="{{name}}" textSize="20sp" maxLines="1" textColor="#201fd5"/>
                                            <text text="{{mytip}}" textStyle="bold|italic" textSize="12sp" textColor="red" ellipsize="end"/>
                                        </horizontal>
                                        <horizontal id="info2">
                                            <text w="auto" text="{{'当前版本：'+localVersion+' '}}" textSize="10sp" textColor="blue"/>
                                            <text w="auto" text="{{desc}}" textSize="10sp" ellipsize="end" maxLines="1"/>
                                        </horizontal>
                                    </vertical>
                                </horizontal>
                                <horizontal layout_alignParentRight="true">
                                    <button id="run" w="70" text="启动" style="Widget.AppCompat.Button.Colored" textSize="16sp"/>
                                </horizontal>
                            </relative>
                        </list>
                    </vertical>
                </ScrollView>
            </frame>
            <frame>
                <ScrollView>
                    <vertical>
                        <list id={"list"}>
                            <relative w="*">
                                <vertical paddingLeft="10">
                                    <horizontal id="info1">
                                        <text text="{{name}}" textSize="20sp" maxLines="1" textColor="#201fd5"/>
                                        <text text="{{tip}}" textStyle="bold|italic" textSize="12sp" textColor="red" ellipsize="end"/>
                                    </horizontal>
                                    <horizontal id="info2">
                                        <text w="auto" text="{{'最新版本：'+version+' '}}" textSize="10sp" textColor="blue"/>
                                        <text w="auto" text="{{desc}}" textSize="10sp" ellipsize="end" maxLines="1"/>
                                    </horizontal>
                                </vertical>
                                <horizontal layout_alignParentRight="true">
                                    <button id="open" w="54" text="{{buttonText}}" style="Widget.AppCompat.Button.Colored" textSize="14sp"/>
                                </horizontal>
                            </relative>
                        </list>
                    </vertical>
                </ScrollView>
            </frame>
        </viewpager>
    </vertical>
)
//<button text="…" w="30" textSize="14sp"/>
if(!api.setApi){
    toast("应用权限不足，无法启动ui！");
    exit();
}
api.setApi(function(){
    var obj=global.obj;
    api.uniqueId=obj.uniqueId;
    api.apiVersion=1
    obj.raw=obj.raw||{}
    obj.raw.requestScreenCapture=images.requestScreenCapture;
    requestScreenCapture=images.requestScreenCapture=function(){
        try{
            if(obj.raw.requestScreenCapture())return true;else return false;
        }catch(e){};
        var i=0;
        while(1){
            try{
                images.captureScreen();
                return true;
            }catch(e){};
            sleep(500);
            if(i++>10)return false;
        }
    };
    api.ui=function(selector,offset,size){
        if(typeof selector==="undefined")selector=packageName(currentPackage())
        if(typeof offset==="undefined")offset=0
        if(typeof size==="undefined")size=500
        var data=selector.find()
        var length=offset+size
        if(length>data.length)length=data.length
        console.log("█".repeat(30))
        console.log("index|id|text|desc|className|"+length+":["+offset+"-"+length+"]Start")
        for(var i=offset;i<length;i++){
            sleep(10);
            console.log(i+"|"+data[i].id()+"|"+data[i].text()+"|"+data[i].desc()+"|"+data[i].className());
        }
        console.log("index|id|text|desc|className|"+length+":["+offset+"-"+length+"]End")
        console.log("█".repeat(30))
    }
    api.setHubPath=function(path){//修改为第三方仓库地址
        try{
            var storage=obj.raw.storages.create("github.com-chrrg-oneClickHub");
            obj.raw.storages.remove("github.com-chrrg-oneClickHub");
            storage.put("myHub",path)
            toast("请重启一点仓库！");
            obj.raw.engines.stopAll();
            exit();
        }catch(e){}
        return false;
    }
});
var storage = storages.create("caohongchrrg@qq.com:chhub");
var list=api.getExtras().hubData.list

var exectuion = null
var runCode=function(id,code){
    try{
        if(exectuion)exectuion.getEngine().forceStop();
        var appData=storage.get("data_"+id);
        appData.useCount++
        appData.useLast=new Date().getTime()
        storage.put("data_"+id,appData);
    }catch(e){}
    exectuion=engines.execScript(id, code);
};
var test=api.getExtras().testRun
if(test){
    setTimeout(function(){
        runCode(test,files.read("files/"+test+".js"))
        exit();
    },0)
}

var reSetData=function(){
    var uiData=[]
    var uiData2=[]
    for (var i in list) {
        var item=list[i]
        if(!item||item.hidden)continue;
        var data=storage.get("data_"+item.id);
        if(!data){
            storage.put("data_"+item.id,data={
                "installTime":0,//第一次打开时间
                "useCount":0,//使用次数
                "useLast":0,//上次使用时间
                "currentVersion":"",//当前版本号
            });
        }
        // if(item.version!=item.currentVersion||!code){

        // }else 
        item.mytip="";
        if(!data.useLast||new Date(data.useLast).toString().slice(0, 10)!==new Date().toString().slice(0, 10)){
            item.mytip="今日未使用";
        }
        

        if(data.currentVersion){
            if(item.version!=data.currentVersion){
                item.buttonText="更新"
                item.mytip+="|有更新"
            }else
                item.buttonText="删除"
            uiData.push(item)
        }else{
            item.buttonText="下载"
        }
        item.tip=""
        item.localVersion=data.currentVersion
        if(!item.localVersion)item.localVersion="无"
        if(data.useCount>=5){
            item.tip="(常用)"
        }
        if(item.version!=data.currentVersion){
            if(!data.currentVersion){
                item.tip="从未使用过"
            }else{
                item.tip="有新版本("+item.version+")"
            }
        }
        uiData2.push(item)
    }
    /*for (var i in list) {
        var item=list[i]
        if(item.hidden)continue;
        var data=storage.get("data_"+item.id);
        if(!data){
            storage.put("data_"+item.id,data={
                "installTime":new Date().getTime(),//安装时间
                "useCount":0,//使用次数
                "useLast":0,//上次使用时间
                "currentVersion":"",//当前版本号
            });
        }
        
        item.tip=""
        item.localVersion=data.currentVersion
        if(!item.localVersion)item.localVersion="无"
        if(data.useCount>=5){
            item.tip="(最常用)"
        }
        if(item.version!=data.currentVersion){
            if(!data.currentVersion){
                item.tip="从未使用过"
            }else{
                item.tip="有新版本("+item.version+")"
            }
        }
        if(item)uiData.push(item)
    }*/
    try{
        // alert(ui.mylist_ifno.getVisibility());
        // if(uiData.length==0)
        //     ui.mylist_ifno.visbility=1
        // else
        //     ui.mylist_ifno.visbility=0;
        // ui.mylist_ifno.visbility=0;
        // // // toast(JSON.stringify(ui.mylist_ifno))
        // // alert(typeof ui.mylist_ifno.visibility);
        // // // return;
        // for(var i in ui.mylist_ifno){
        //     if(i.indexOf("Visi")!==-1)
        //      console.log(i,typeof i)//,ui.mylist_ifno[i]
        // }

        if(uiData.length==0)
            ui.mylist_ifno.setVisibility(0);
        else
            ui.mylist_ifno.setVisibility(8);
        ui.mylist.setDataSource(uiData);//我的已安装的列表
        ui.list.setDataSource(uiData2);//在线列表
    }catch(e){alert("有错误!"+e)}
}

reSetData();
var isUpdate=0;
setInterval(function(){
    if(isUpdate){
        reSetData()
        isUpdate=0;
    }
},100);
setInterval(function(){
    reSetData();
},10000);

var updateCode=function(item,fn){
    try{
        http.get("https://chrrg.github.io/chhub/"+item.file, {},function(res,err){
            if(err){
                toast("网络异常！");
                return;
            }
            var code;
            if(res.statusCode==200){
                code=res.body.string()
                var appData=storage.get("data_"+item.id);
                appData.currentVersion=item.version
                appData.installTime=new Date().getTime()
                storage.put("data_"+item.id,appData);
                storage.put("code_"+item.id,code);
            }else if(res.statusCode==404){
                toast("脚本暂未上传，稍后再试试吧！");
            }else{
                toast("脚本获取失败，错误码："+res.statusCode);
            }
            fn(code);
        });
    }catch(e){
        toast("更新脚本失败!");
    }
}
function getDateDiff(dateTimeStamp){
    if(!dateTimeStamp)return "从未"
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if(diffValue < 0){return "未来";}
    var monthC =diffValue/month;
    var weekC =diffValue/(7*day);
    var dayC =diffValue/day;
    var hourC =diffValue/hour;
    var minC =diffValue/minute;
    var result=""
    if(monthC>=1)
        result+=parseInt(monthC) + "月前";
    else if(weekC>=1)
        result+=parseInt(weekC) + "周前";
    else if(dayC>=1)
        result+=parseInt(dayC) +"天前";
    else if(hourC>=1)
        result+=parseInt(hourC) +"小时前";
    else if(minC>=1)
        result+=parseInt(minC) +"分钟前";
    else return "刚刚"
    return result;
}
ui.mylist.on("item_bind",function(itemView,itemHolder){
    itemView.run.on("click",function(){
        var item=itemHolder.item;
        var code=storage.get("code_"+item.id);
        if(!code){
            alert("启动失败！请重新下载脚本！");
            return;
        }
        runCode(item.id,code);
        isUpdate=1;
    });
});
ui.list.on("item_bind",function(itemView,itemHolder){
    itemView.info1.on("click",function(){
        var item=itemHolder.item;
        var appData=storage.get("data_"+item.id);
        toast(item.name+"\n使用次数："+appData.useCount+"\n上次使用时间："+getDateDiff(appData.useLast))
    });
    itemView.info2.on("click",function(){
        var item=itemHolder.item;
        var appData=storage.get("data_"+item.id);
        toast("安装时间："+getDateDiff(appData.installTime)+"\n"+item.desc)
    });
    itemView.open.on("click",function(){
        var item=itemHolder.item;
        var appData=storage.get("data_"+item.id);
        var code=storage.get("code_"+item.id);
        if(!appData.currentVersion&&!code){//第一次使用
            confirm("确认下载此脚本吗？").then(value=>{
                if(!value)return;
                updateCode(item,function(newCode){
                    isUpdate=1;
                    if(newCode){
                        toast("下载成功！")
                    }else{
                        toast("下载脚本失败！请检查网络状况！");
                    }
                })
            });
        }else{
            if(item.version!=appData.currentVersion||!code){
                //需要下载最新源码
                toast("更新脚本中("+item.name+")");
                updateCode(item,function(newCode){
                    if(newCode){
                        alert("脚本更新成功")
                    }else{
                        if(!code){
                            toast("脚本获取失败！请检测网络！("+item.name+")");
                            return;
                        }
                        toast("更新失败！("+item.name+")");
                    }
                    isUpdate=1;
                })
            }else{
                confirm("确认删除此脚本吗？").then(value=>{
                    if(!value)return;
                    storage.remove("data_"+item.id);
                    storage.remove("code_"+item.id);
                    storages.remove("appdata_"+item.id)
                    toast("已删除！");
                    isUpdate=1;
                });
            }
        }
        
    })
});

//启用按键监听
events.observeKey();
//监听音量下键弹起
events.onKeyDown("volume_down", function(event){
    if(exectuion) {
        toast('已强制结束任务！')
        exectuion.getEngine().forceStop()
        exectuion = null
    } else {
        toast('还没开车呢！')
    }
});
// ui.text.setText('\n⭕ CHHub 一点仓库\n⭕ 一键完成各种操作\n⭕ 重启可获取最新仓库\n⭕ 运行需要启用无障碍功能\n⭕ 建议设置屏幕常亮时间大于30s\n⭕ 按下音量减可停止运行\n')

ui.viewpager.setTitles(["我的脚本", "在线仓库"]);
ui.tabs.setupWithViewPager(ui.viewpager);
ui.emitter.on("create_options_menu", menu=>{
    menu.add("获取仓库地址");
    menu.add("悬浮窗权限");
    menu.add("关于");
});
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "获取仓库地址":
            alert("当前使用的仓库地址：",api.getExtras().hubData.HubRoot)
            break;
        case "悬浮窗权限":
            var intent = new Intent();
            intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION");
            app.startActivity(intent);
            break;
        case "关于":
            alert("关于", "一点仓库\n"+
            "1.本软件完全开源！\n"+
            "2.任何人可以上传脚本到仓库！\n"+
            "3.请自行辨别脚本是否安全！\n"+
            "https://github.com/chrrg/oneClickHub");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);
// threads.start(function() {
//     while(1){
//         while(device.isScreenOn())
//         	sleep(1000)
//         toast('停止运行')
//         if(!exectuion)return;
//         exectuion.getEngine().forceStop()
//         exectuion = null
//     }
// })
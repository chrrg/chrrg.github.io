"ui";
var form = {
    isLongRead: false,
    isLongWatch: false,
    isDailyQuiz:false,
    isWeeklyQuiz:false,
    isSpecialQuiz:false,
    isChallengeQuiz:false,
    isSubscribe:false
}
ui.layout(
    <drawer id="drawer">
    <vertical>
        <appbar>
            <toolbar id="toolbar" title="强国助手 V2.1.2"/>
            <tabs id="tabs"/>
        </appbar>
        <Switch id="autoService" text="无障碍服务" checked="{{auto.service != null}}" padding="8 8 8 8" textSize="15sp"/>
        <viewpager id="viewpager">
            <frame>
                <ScrollView>
                <vertical>
                    {/* <frame height="40" gravity="center">
                        <text text="*注意*" gravity="center" textSize="18sp" textColor="red" textStyle="bold"/>
                    </frame> */}
                    {/* <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="项目说明文档: (请留意新版本的发布)" textColor="#222222" textSize="14sp"/>
                            <text autoLink="web" text="https://github.com/XiangyuTang/LearnChinaHelper "/>
                        </vertical>
                        </ScrollView>
                        <View bg="#f44336" h="*" w="10"/>
                    </card> */}
                    <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="应用与版本要求：" textColor="#222222" textSize="14sp"/>
                            <text text="学习强国v2.10.0，安卓7.0以上 "marginTop="5" textColor="#222222"/>
                        </vertical>
                        </ScrollView>
                        <View bg="#f44336" h="*" w="10"/>
                    </card>
                    <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="1.首次安装请先开启无障碍服务和截图与允许通知权限" textColor="#222222" textSize="14sp"/>
                            <text text="2.若未开启通知权限,首次使用建议打开↗的悬浮窗权限" textColor="#222222" textSize="14sp"/>
                            <text text="3.开始运行前请先关闭学习强国,由脚本运行后自动启动" textColor="#222222" textSize="14sp"/>
                            <text text="4.脚本执行过程中请勿操作手机" textColor="#222222" textSize="14sp"/>
                        </vertical>
                        </ScrollView>
                        <View bg="#f44336" h="*" w="10"/>
                    </card>
                    <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="坚持把学习贯彻习近平总书记系列重要讲话精神作为重大政治任务，认真学习党的先进理论与指导思想。" textColor="#222222"/>
                            <text text="请勿利用本软件投机取巧！" textColor="#222222" textStyle="bold"/>
                        </vertical>
                        </ScrollView>
                        <View bg="#f44336" h="*" w="10"/>
                    </card>
                    <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="免责声明" textColor="#222222" textStyle="bold"/>
                            <text text="1.《强国助手》为本人Auto.js学习交流的开源非营利项目，仅作为程序员之间相互学习交流之用，使用需严格遵守开源许可协议。禁止使用《强国助手》进行任何盈利活动。对一切非法使用所产生的后果，本人概不负责。" textColor="#222222" marginTop="5"/>
                            <text text="2.本项目不提倡每天利用脚本软件来刷《学习强国》积分。" textColor="#222222"/>
                            <text text="3.若每天一直使用，不保证不会具有封号风险。" textColor="#222222" />
                            <text text="4.经向专业律师咨询，本声明有效，具有法律效力。" textColor="#222222" />
                        </vertical>
                        </ScrollView>
                        <View bg="#f44336" h="*" w="10"/>
                    </card>
                </vertical>
                </ScrollView>
            </frame>
            <frame>
                <ScrollView>
                <vertical>
                    <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="当前版本强国助手支持的必选任务包括：(以下任务预计花费6分钟)" textColor="#222222" textSize="14sp"/>
                            <text text="阅读文章、视听学习、收藏、分享、评论、本地频道" textColor="#999999" textSize="14sp"/>
                        </vertical>
                        </ScrollView>
                        <View bg="#4caf50" h="*" w="10"/>
                    </card>
                    <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="是否执行订阅任务：(预计花费1分钟)" textColor="#222222"/>
                            <radiogroup columns="2">
                                <radio id="yes_subscribe"  text="是" marginTop="5"></radio>
                                <radio  id="no_subscribe" text="否" checked = "true" ></radio>
                            </radiogroup>
                        </vertical>
                        </ScrollView>
                        <View bg="#2196f3" h="*" w="10"/>
                    </card>
                    <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="长时任务选择：" textColor="#222222"/>
                            <checkbox id="yes_read" text="文章学习时长任务(预计花费12分钟)" />
                            <checkbox id="yes_watch" text="视听学习时长任务(建议在wifi环境下执行，预计花费18分钟)" marginTop="5"/>
                        </vertical>
                        </ScrollView>
                        <View bg="#2196f3" h="*" w="10"/>
                    </card>
                    <card w="*" h="*" margin="10 5" cardCornerRadius="2dp"
                        cardElevation="1dp" gravity="center_vertical">
                        <ScrollView>
                        <vertical padding="18 8" h="auto">
                            <text text="答题任务选择：" textColor="#222222"/>
                            <checkbox id="daily_quiz" text="每日答题(预计花费2分钟)" />
                            <checkbox id="weekly_quiz" text="每周答题(预计花费2分钟)" marginTop="5"/>
                            <checkbox id="special_quiz" text="专项答题(预计花费2分钟)" marginTop="5"/>
                            <checkbox id="challenge_quiz" text="挑战答题(预计花费2分钟)" marginTop="5"/>
                        </vertical>
                        </ScrollView>
                        <View bg="#2196f3" h="*" w="10"/>
                    </card>
                    <linear gravity="center">
                        <button id="start" text="开始运行" style="Widget.AppCompat.Button.Colored" w="auto"/>
                        <button id="stop" text="停止运行"  w="auto"/>
                    </linear>
                </vertical>
                </ScrollView>
            </frame>
        </viewpager>
    </vertical>
    </drawer>
);
//设置滑动页面的标题
ui.viewpager.setTitles(["使用须知", "任务列表"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);
//检测用户版本更新
// threads.start(detectUpdate);
//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu=>{
    menu.add("启动悬浮窗");
    menu.add("检查新版本");
    menu.add("运行日志");
    menu.add("关于");
});
//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item)=>{
    switch(item.getTitle()){
        case "启动悬浮窗":
            var intent = new Intent();
            intent.setAction("android.settings.action.MANAGE_OVERLAY_PERMISSION");
            app.startActivity(intent);
            break;
        case "检查新版本":
            threads.start(detectUpdate);
            break;
        case "运行日志":
            app.startActivity('console');
            break;
        case "关于":
            alert("关于", "强国助手 v2.1.2\n"+
            "1.最终闭源稳定版发布\n"+
            "2.紧急修复填空题题目控件顺序更改问题\n"+
            "3.轻轻的走，正如我轻轻的来~\n"+
            "4.感谢您的支持与鼓励，我们有缘再见~\n"+
            "\nCopyright©2020 by 一岸流年1998");
            break;
    }
    e.consumed = true;
});
activity.setSupportActionBar(ui.toolbar);

ui.yes_subscribe.on("check",function(check){
    if(check)
        form.isSubscribe= true;
    else
        form.isSubscribe= false;
});
ui.yes_read.on("check",function(check){
    if(check)
        form.isLongRead= true;
    else
        form.isLongRead= false;
});
ui.yes_watch.on("check",function(check){
    if(check)
        form.isLongWatch= true;
    else
        form.isLongWatch= false;
});
ui.daily_quiz.on("check",function(check){
    if(check)
        form.isDailyQuiz= true;
    else
        form.isDailyQuiz= false;
});
ui.weekly_quiz.on("check",function(check){
    if(check)
        form.isWeeklyQuiz= true;
    else    
        form.isWeeklyQuiz= false;
});
ui.special_quiz.on("check",function(check){
    if(check)
        form.isSpecialQuiz= true;
    else
        form.isSpecialQuiz= false
});
ui.challenge_quiz.on("check",function(check){
    if(check)
        form.isChallengeQuiz= true;
    else
        form.isChallengeQuiz= false;
});

ui.autoService.on("check", function(checked) {
    // 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
    if(checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if(!checked && auto.service != null){
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function() {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
    
});

ui.start.on("click", function(){
    //程序开始运行之前判断无障碍服务
    if(auto.service == null) {
        toastLog("请先开启无障碍服务！");
        return;
    }
    main();
});

ui.stop.on("click",function(){
    threads.shutDownAll();
    engines.stopAll();
    exit();
    toast("已终止执行脚本");
});

//检测用户版本更新方法
function getLatestRelease() {
    //keyword =  encodeURI(encodeURI(keyword));
    var url = "https://api.github.com/repos/XiangyuTang/LearnChinaHelper/releases/latest";
    //设置超时为10秒
    http.__okhttp__.setTimeout(10000);
    // 获取一个不存在的网站，应该会Timeout （或者把网络断开）
    try{
      var res = http.get(url)
    }
    catch(e)
    {
        log("error:"+e)
        return;
    }
    if(res.statusCode != 200){
      log("请求连接github失败: " + res.statusCode + " " + res.statusMessage);
      return;
    }else{
      // var ans = res.body.json();
      let html = res.body.string();  //取页面html源码
      // log(html)
      let json = JSON.parse(html);
    //   log("APP名:"+json.name)
      log("最新版本号："+json.tag_name)
    //   log("更新内容："+json.body)
    //   log("下载链接："+json.assets[1].browser_download_url)
      return [json.name,json.tag_name,json.body,json.assets[1].browser_download_url];
    }
}


function getCurrentRelease(){
    sleep(1000);
    var current_name = className("android.widget.TextView").textContains("强国助手 V").findOnce();
    // while(current_name==null){
    //     current_name = className("android.widget.TextView").textContains("强国助手 V").findOnce();
    // }
    if(current_name!=null)
    {
        log(current_name.text())
        var strs= new Array(); //定义一数组
        strs=current_name.text().split(" "); //字符分割 
        log("当前用户版本号："+strs[1]);
        return strs[1];
    }
}

function detectUpdate()
{
    var currentRelease = getCurrentRelease();
    var release_info = getLatestRelease()
    if(release_info!=null)
    {
        var latestRelease = release_info[1];
        if(latestRelease!=currentRelease){
            dialogs.build({
                title: "发现新版本(/≧▽≦)/",
                content: "(下载后请先卸载旧版本再安装新版本)\n"+release_info[0]+"\n"+release_info[2],
                positive: "到浏览器下载",
                negative: "取消",
            })
            .on("positive", () => {
                app.openUrl(release_info[3]);
            })
            .show();
        }
        else{
            toastLog("您的版本目前是最新版本~");
        }
    }
    else{
        toastLog("目前无法获取github最新版本api，请您自行留意github新版本的通知！")
    }
}


//以下是核心功能执行方法
function main() {
    // 这里写脚本的主逻辑
    threads.start(function () {
        if(!images.requestScreenCapture()){
            toastLog("请先开启截图权限，以执行收藏任务！");
            return;
        }
        try {
            //启动悬浮窗日志
            console.show();
            launchApp("学习强国");
            toastLog("主程序开始运行");
            waitForPackage("cn.xuexi.android");
            sleep(3000);
            toast("开始执行脚本！")
            getTaskList(); // 获取任务列表
            var f = doUnfinishedTask(); //执行当日未完成的任务
            if(f==1){//说明执行了必做任务，积分列表发生变化，需要刷新积分列表
                getTaskList(); // 重新获取任务列表,装载最新的阅读和视听时长剩余次数
            }
            doExtraTask();
            back();//回到手机主页
            sleep(2000);
        } catch (error) {
            log(error)
            toast("出现异常,请关闭应用重新执行脚本！");
            exit(); // 有异常退出，结束脚本
        }
        toastLog("运行结束,脚本自动退出...");
        threads.shutDownAll();
        console.hide();
        engines.stopAll();
        exit();
    });
}

var taskInfoList = []; // 装任务列表

function getTaskList() {
    // 从主页到我的主页
    className("android.widget.TextView").id('comm_head_xuexi_mine').findOne().click();
    sleep(2000);
    // 点击事件在我的积分父控件上
    id("user_item_name").text("学习积分").findOne().parent().click()
    // waitForPackage("cn.xuexi.android")
    //waitForActivity("com.alibaba.lightapp.runtime.activity.CommonWebViewActivity")
    toastLog("尝试获取任务列表...")
    //等待缓冲符号消失
    sleep(2000);
    while(className("android.widget.ImageView").exists()||className("android.view.View").desc("--").exists())
    {
        sleep(1000);
        toastLog("等待加载...")
    }
    sleep(8000);
    // 获取任务列表
    taskInfoList = []; // 重置
    className("android.widget.ListView").findOne().children().forEach(function (child) {
        var list = child.find(className('android.view.View'));
        // log(list)
        if (list.length > 5) {
            var title = list.get(2).contentDescription;
            var content = list.get(4).contentDescription;
            if (title && content) {
                var integralContent = content.split('/');
                var getIntegral = parseInt(integralContent[0].replace(/[^0-9]/ig, ""));
                var targetIntegral = parseInt(integralContent[1].replace(/[^0-9]/ig, ""));
                taskInfoList.push({
                    title: title,
                    getIntegral: getIntegral,
                    targetIntegral: targetIntegral,
                })
            }
        }
    });
    if (!taskInfoList.length) {
        toastLog('网络不稳定,获取任务失败！请关闭应用并重启脚本...');
        threads.shutDownAll();
        engines.stopAll();
        exit(); // 有异常退出，结束脚本
    } else {
        toastLog("成功获取任务列表,退到首页");
        log(taskInfoList);
        back();//从“积分”页跳转到“我的”
        sleep(2000);
        back();//从“我的”跳转到“首页”
        sleep(2000);
    }
};


function doUnfinishedTask(){
    var flag = 0;//判断是否完成所有必做任务满分的标志
    var read_article_flag = 2 //判断阅读文章任务是否已完成，作为参数传入视听学习任务的new_vedio_list用于控件寻找
    for(i=0;i<taskInfoList.length;i++){
        var task = taskInfoList[i];
        // log(task);
        //如果当日获得积分<当日上限积分
        if(task.getIntegral < task.targetIntegral){
            // log('未达成满分的任务有：'+task.title)
            if(task.title=='阅读文章'){
                flag = 1;
                rest_num = task.targetIntegral-task.getIntegral;
                read_article_flag = 2;
                readArticle(rest_num,8,false);//默认阅读8s，执行短时阅读任务
                continue;
            }
            else if(task.title=='视听学习'){
                flag = 1;
                rest_num = task.targetIntegral-task.getIntegral;
                learnVideo(rest_num,read_article_flag,8,false);//默认观看8s,执行短时视听任务
                continue;
            }
            else if(task.title=='分享'){
                flag = 1;
                share();
                continue;
            }
            else if(task.title=='收藏'){
                flag = 1;
                collect();
                continue;
            }
            else if(task.title=='发表观点'){
                flag = 1;
                comment();
                continue;
            }
            else if(task.title=='本地频道'){
                flag = 1;
                localChannel();
                continue;
            }
            // else if(task.title=='订阅'){
            //     flag = 1;
            //     rest_num = task.targetIntegral-task.getIntegral;
            //     subscribe(rest_num);
            //     continue;
            // }
            // else if(task.title=='每日答题'){
            //     doDailyQuiz();
            //     continue;
            // }
            // else if(task.title=='每周答题'){
            //     doWeeklyQuiz();
            //     continue;
            // }
            // else if(task.title=='专项答题'){
            //     doSpecialQuiz();
            //     continue;
            // }
            // else if(task.title=='挑战答题'){
            //     challengeQuiz();
            //     continue;
            // }
        }
    }
    if(!flag)
    {
        toastLog('已完成当日脚本必做任务！d=====(￣▽￣*)b')
    }
    return flag;
};

function doExtraTask(){
    toastLog('执行额外脚本任务....')
    sleep(1000);
    var read_article_flag = 2;
    if(form.isSubscribe)
    {
        for(i=0;i<taskInfoList.length;i++){
            var task = taskInfoList[i];
            if(task.getIntegral < task.targetIntegral&&task.title=='订阅'){
                rest_num = task.targetIntegral-task.getIntegral;
                subscribe(rest_num);
            }
        }
    }
    if(form.isDailyQuiz)
    {
        for(i=0;i<taskInfoList.length;i++){
            var task = taskInfoList[i];
            if(task.getIntegral < task.targetIntegral&&task.title=='每日答题'){
                doDailyQuiz();
            }
        }
    }
    if(form.isWeeklyQuiz)
    {
        for(i=0;i<taskInfoList.length;i++){
            var task = taskInfoList[i];
            if(task.getIntegral < task.targetIntegral&&task.title=='每周答题'){
                doWeeklyQuiz();
            }
        }
    }
    if(form.isSpecialQuiz)
    {
        for(i=0;i<taskInfoList.length;i++){
            var task = taskInfoList[i];
            if(task.getIntegral < task.targetIntegral&&task.title=='专项答题'){
                doSpecialQuiz();
            }
        }
    }
    if(form.isChallengeQuiz)
    {
        for(i=0;i<taskInfoList.length;i++){
            var task = taskInfoList[i];
            if(task.getIntegral < task.targetIntegral&&task.title=='挑战答题'){
                challengeQuiz();
            }
        }
    }
    if(form.isLongRead)
    {
        read_article_flag = 2;
        toastLog("开始执行文章学习时长任务...")
        sleep(1000);
        //读rest_num篇文章，每篇文章阅读125s
        for(i=0;i<taskInfoList.length;i++){
            var task = taskInfoList[i];
            if(task.getIntegral < task.targetIntegral&&task.title=='文章学习时长'){
                rest_num = task.targetIntegral-task.getIntegral;
                readArticle1(rest_num,125,true);
            }
        }
    }
    if(form.isLongWatch)
    {
        toastLog("开始执行视听学习时长任务...");
        sleep(1000);
        //看rest_num个视频，每个视频观看185s
        for(i=0;i<taskInfoList.length;i++){
            var task = taskInfoList[i];
            if(task.getIntegral < task.targetIntegral&&task.title=='视听学习时长'){
                rest_num = task.targetIntegral-task.getIntegral;
                learnVideo(rest_num,read_article_flag,185,true);
            }
        }
    }
    toastLog('额外任务执行完成！d=====(￣▽￣*)b')
}

/**
 * @function readArticle 阅读时长任务（短时）
 * @param num 待完成任务的数量。
 * @param time 阅读文章的时间(s)。
 * @param isLong 是否执行长时任务。
 */
function readArticle(num,time,isLong){
    sleep(1000);
    toastLog('开始执行阅读文章任务...')
    //点击学习控件
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1500);
    //点击要闻
    className("android.widget.TextView").text("要闻").findOne().parent().click();
    sleep(1500);
    //先看右上角总积分，如果看完某文章，积分没变，说明该文章以前看过，不算有效文章，num不减
    var origin_score = id("comm_head_xuexi_score").findOne().getText();
    sleep(1500);
    log("origin_score:"+origin_score)
    var newListView = className("android.widget.ListView").depth(20).findOnce(1);
    //阅读文章
    while(num>0){
        newListView = className("android.widget.ListView").depth(20).findOnce(1);
        log('newListView:'+newListView)
        sleep(1000);
        if(newListView!=null)
        {
            // log('newListView:'+newListView)
            var newslist = newListView.children();
            // log('list.length:'+newslist.length);
            if (newslist.length > 0) 
            {
                newslist.forEach(function(item,index){
                    if(index&&num>0){//index==0时是linearLayout控件，无法点击，也不是子项要闻
                        sleep(1000);
                        isClick = item.click()//进入新闻内容页
                        sleep(1500);
                        if(isClick)
                        {
                            num--;
                            toastLog("进行模拟阅读"+time+"s...剩余阅读篇数："+num);
                            // waitForPackage("cn.xuexi.android");
                            for(var t=1;t<=time;t++)
                            {
                                sleep(1000);
                                left_time = time-t;
                                if(left_time%5==0)
                                {
                                    toastLog("还剩"+left_time+"s阅读时间...");
                                    //未防止息屏的唤醒屏幕操作
                                    device.wakeUp();
                                }
                            }
                            back();
                            // className("android.widget.ImageView").depth(11).findOne().click();
                            sleep(2000);
                            //返回之后看积分是否变化，若未变化，num++
                            var new_score = id("comm_head_xuexi_score").findOne().getText();
                            if(new_score==origin_score)
                            {
                                if(isLong)//如果是阅读时长任务
                                {
                                    num++;
                                    toastLog("检测积分未发生变化...向下翻页并进行长时阅读");
                                    pn = random(3,8);
                                    for(var p=1;p<=pn;p++)//往下多滑动几次
                                    {
                                        newListView.scrollDown();
                                        sleep(1000);
                                    }
                                }
                                else
                                {
                                    num++;
                                    toastLog("检测积分未发生变化...向下翻页并重置剩余阅读篇数："+num);
                                }
                                newListView.scrollDown();
                            }
                            else
                            {
                                origin_score = new_score;
                            }
                        }
                    }
                });
            }
            newListView.scrollDown();
        } 
    }
    toastLog('阅读文章任务执行结束！d==(￣▽￣*)b')
    //点击学习控件回到新闻首页
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1000);
};

/**
 * @function readArticle1 由于控件会谜之变化的原因，无可奈何为阅读时长任务特别写的方法
 * @param num 待完成任务的数量。
 * @param time 阅读文章的时间(s)。
 * @param isLong 是否执行长时任务。
 */
function readArticle1(num,time,isLong){
    sleep(1000);
    toastLog('开始执行阅读时长任务...')
    var stop_key = 0;
    //点击学习控件
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1500);
    //点击要闻
    className("android.widget.TextView").text("要闻").findOne().parent().click();
    //先看右上角总积分，如果看完某文章，积分没变，说明该文章以前看过，不算有效文章，num不减
    var origin_score = id("comm_head_xuexi_score").findOne().getText();
    log("origin_score:"+origin_score)
    var newListView = className("android.widget.ListView").depth(20).findOne();
    //阅读文章
    //为长时阅读设定积分未变化停止机制，如果检测到积分未变化2次，停止阅读
    var stop_flag = 0;
    while(num>0){
        if(stop_flag==2)
        {
            break;
        }
        if(newListView.bounds().right==0)//正常的listView控件范围应该是Rect(0, 357 - 1080, 2195)
        {
            //如果进入这个条件，说明控件找成了Rect(0, 357 - 0, 2195),是错的
            log("检测到newListView控件不对，自动修改...")
            listViewFlag = 1;
            newListView = className("android.widget.ListView").depth(20).findOnce(1);
        }
        else{
            newListView = className("android.widget.ListView").depth(20).findOne();
        }
        log('newListView:'+newListView)
        if(newListView!=null)
        {
            // log('newListView:'+newListView)
            var newslist = newListView.children();
            // log('list.length:'+newslist.length);
            if (newslist.length > 0) 
            {
                newslist.forEach(function(item,index){
                    if(index&&num>0){//index==0时是linearLayout控件，无法点击，也不是子项要闻
                        sleep(2000);
                        isClick = item.click()//进入新闻内容页
                        if(isClick)
                        {
                            num--;
                            toastLog("进行模拟阅读"+time+"s...剩余阅读篇数："+num);
                            if(time>120&&num==0)
                            {
                                stop_key++;
                                //如果剩余阅读0次后连续超过了2次，第3次直接退出
                                if(stop_key==3){
                                    back();
                                    toastLog('检测到陷入连续循环风险，阅读时长学习任务执行结束！')
                                    sleep(2000);
                                    return;
                                }
                            }
                            // waitForPackage("cn.xuexi.android");
                            for(var t=1;t<=time;t++)
                            {
                                sleep(1000);
                                left_time = time-t;
                                if(left_time%5==0)
                                {
                                    toastLog("还剩"+left_time+"s阅读时间...");
                                    //未防止息屏的唤醒屏幕操作
                                    device.wakeUp();
                                }
                            }
                            back();
                            // className("android.widget.ImageView").depth(11).findOne().click();
                            sleep(2000);
                            //返回之后看积分是否变化，若未变化，num++
                            var new_score = id("comm_head_xuexi_score").findOne().getText();
                            if(new_score==origin_score)
                            {
                                if(isLong)//如果是阅读时长任务
                                {
                                    num++;
                                    toastLog("检测积分未发生变化...向下翻页并进行长时阅读");
                                    stop_flag++;
                                    pn = random(3,8);
                                    for(var p=1;p<=pn;p++)//往下多滑动几次
                                    {
                                        newListView.scrollDown();
                                        sleep(1000);
                                    }
                                }
                                else
                                {
                                    num++;
                                    toastLog("检测积分未发生变化...向下翻页并重置剩余阅读篇数："+num);
                                }
                                newListView.scrollDown();
                            }
                            else
                            {
                                origin_score = new_score;
                            }
                        }
                    }
                });
                // break;
            }
            newListView.scrollDown();
        } 
    }
    toastLog('阅读文章任务执行结束！d==(￣▽￣*)b')
    //点击学习控件回到新闻首页
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1000);
};

/**
 * @function learnVideo 由于控件会谜之变化的原因，无可奈何为阅读时长任务特别写的方法
 * @param num 待完成任务的数量。
 * @param read_article_flag 主要用于判断阅读文章任务是否做过，如果做过，会影响new_vedio_list寻找控件
 * @param time 阅读文章的时间(s)。
 * @param isLong 是否执行长时任务。
 */
function learnVideo(num,read_article_flag,time,isLong){
    log("read_article_flag:"+read_article_flag);
    var stop_key = 0;//防止长时视听最后陷入死循环的检测机制
    sleep(1000);
    toastLog('开始执行视听学习任务...');
    //进入电视台频道
    desc("电视台").id("home_bottom_tab_button_contact").findOne().click();
    //先看右上角总积分，如果看完某视频，积分没变，说明该视频以前看过，不算有效视频，num不减
    var origin_score = id("comm_head_xuexi_score").findOne().getText();
    log("origin_score:"+origin_score)
    //进入第一频道
    className("android.widget.TextView").text("第一频道").findOne().parent().click();
    var new_vedio_list = className("android.widget.ListView").depth(20).findOnce(read_article_flag);
    while(num>0){
        new_vedio_list = className("android.widget.ListView").depth(20).findOnce(read_article_flag);
        log('new_vedio_list:'+new_vedio_list)
        if(new_vedio_list!=null)
        {
            var newslist = new_vedio_list.children();
            if (newslist.length > 0) 
            {
                newslist.forEach(function(item,index){
                    if(index&&num>0){//index==0时是linearLayout控件，无法点击，也不是子项要闻
                        sleep(1000);
                        isClick = item.click()//进入视频内容页
                        sleep(2000);
                        if(isClick)
                        {
                            num--;
                            //如果用户用的流量观看视频
                            if(text("继续播放").exists()){
                                toastLog("自动点击继续播放,将消耗用户流量...");
                                className("android.widget.TextView").text("继续播放").findOne().click();
                                sleep(1000);
                            }
                            else{
                                toastLog("自动播放...");
                                sleep(1000);
                            }
                            toastLog("进行模拟观看"+time+"s...剩余视听："+num+"次");
                            if(time>180&&num==0)
                            {
                                stop_key++;
                                //如果剩余视听0次后连续超过了2次，第3次直接退出
                                if(stop_key==3){
                                    back();
                                    toastLog('检测到陷入连续循环风险，视听时长学习任务执行结束！')
                                    sleep(2000);
                                    return;
                                }
                            }
                            for(var t=1;t<=time;t++)
                            {
                                sleep(1000);
                                left_time = time-t;
                                if(left_time%5==0)
                                {
                                    toastLog("还剩"+left_time+"s视听时间...");
                                    //未防止息屏的唤醒屏幕操作
                                    device.wakeUp();
                                }
                            }
                            //点击返回
                            // className("android.widget.ImageView").depth(13).findOne().click()
                            back();
                            sleep(2000);
                            //返回之后看积分是否变化，若未变化，num++
                            var new_score = id("comm_head_xuexi_score").findOne().getText();
                            if(new_score==origin_score)
                            {
                                if(isLong)//如果是视听时长任务
                                {
                                    num++;
                                    toastLog("检测积分未发生变化...向下翻页并继续进行长时视听");
                                    pn = random(3,8);
                                    log("pn:"+pn);
                                    for(var p=1;p<=pn;p++)//往下多滑动几次
                                    {
                                        new_vedio_list.scrollDown();
                                        sleep(1000);
                                    }
                                }
                                else
                                {
                                    num++;
                                    toastLog("检测积分未发生变化...向下翻页并重置剩余视听次数："+num);
                                    
                                }
                                new_vedio_list.scrollDown();
                            }
                            else
                            {
                                origin_score = new_score;
                            }
                        }
                    }
                });
            }
        }
        else
        {
            if(read_article_flag==2)
            {
                read_article_flag = 1;
                new_vedio_list = className("android.widget.ListView").depth(20).findOnce(read_article_flag);
                log("read_article_flag = 1的new_vedio_list："+new_vedio_list)
            }
            else
            {
                read_article_flag = 2;
                new_vedio_list = className("android.widget.ListView").depth(20).findOnce(read_article_flag);
                log("read_article_flag = 2的new_vedio_list："+new_vedio_list)
            }
            new_vedio_list.scrollDown();
        } 
    }
    toastLog('视听学习任务执行结束！d==(￣▽￣*)b')
    //点击学习控件回到新闻首页
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1000);
};

/**
 * @function collect 收藏任务
 */
function collect(){
    toastLog('开始执行收藏任务');
    sleep(1000);
    //点击要闻
    className("android.widget.TextView").text("要闻").findOne().parent().click();
    sleep(1000);
    //阅读文章
    var newListView = className("android.widget.ListView").depth(20).findOnce(1);
    // log('newListView:'+newListView)
    var num = 2;//待收藏文章数
    while(newListView!=null&&num>0)
    {
        // log('newListView:'+newListView)
        var newslist = newListView.children();
        // log('list.length:'+newslist.length);
        if (newslist.length > 0) 
        {
            newslist.forEach(function(item,index){
                if(index>0&&num>0){//index==0时是linearLayout控件，无法点击，也不是子项要闻
                    sleep(2000);
                    isClick = item.click()//进入新闻内容页
                    if(isClick)
                    {
                        toastLog("检测该文章是否收藏...");
                        sleep(2000);
                        //找到小星星控件
                        collect_star = className("android.widget.ImageView").depth(10).findOne();
                        log("collect_star:"+collect_star);
                        //检测小星星是否点亮
                        //截图取小星星控件的坐标范围
                        var img = captureScreen();
                        var star_bounds = collect_star.bounds();
                        //获取小星星中心的x,y坐标像素
                        var star_x = star_bounds.centerX();
                        var star_y = star_bounds.centerY();
                        // 小星星的中心RGB(255,196,61)
                        var collected_color = colors.rgb(255, 196, 61)
                        var color = images.pixel(img, star_x, star_y);
                        //如果颜色不匹配，说明未收藏
                        if(!colors.isSimilar(color,collected_color))
                        {
                            //收藏
                            toastLog("收藏该文章...");
                            sleep(1000);
                            collect_star.click();
                            toastLog("收藏成功，3s后取消收藏，擦除痕迹...");
                            sleep(3000);
                            collect_star.click();
                            num--;
                            sleep(1000);
                        }
                        //返回
                        back();
                        sleep(2000);
                    }
                }
            });
        }
        newListView.scrollDown();
        sleep(2000);
        newListView = className("android.widget.ListView").depth(20).findOnce(1);
    } 
    toastLog('收藏任务执行结束！d==(￣▽￣*)b')
    //点击学习控件回到新闻首页
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1000);
};

/**
 * @function share 分享任务
 */
function share(){
    toastLog('开始执行分享任务...');
    sleep(1000);
    //点击要闻
    className("android.widget.TextView").text("要闻").findOne().parent().click();
    //阅读文章
    var newListView = className("android.widget.ListView").depth(20).findOnce(1);
    if(newListView!=null)
    {
        var newslist = newListView.children();
        if (newslist.length > 0) 
        {
            newslist.forEach(function(item,index){
                if(index>0&&index<=2){//index==0时是linearLayout控件，无法点击，也不是子项要闻
                    sleep(2000);
                    isClick = item.click()//进入新闻内容页
                    if(isClick)
                    {
                        sleep(1000);
                        toastLog("正在分享该文章...");
                        //找到分享控件
                        var share_icon = className("android.widget.ImageView").depth(10).drawingOrder(4).findOne();
                        // log("share_icon:"+share_icon);
                        share_icon.click();
                        sleep(2000);
                        var share_choice = text("分享到学习强国").id("txt_gv_item").findOne().parent();
                        // log("share_choice:"+share_choice);
                        sleep(2000);
                        //点击分享
                        share_choice.click();
                        //停留5秒
                        sleep(5000);
                        //返回新闻主体内容界面    
                        back();
                        sleep(2000);
                        // 返回要闻主页
                        back();
                    }
                }
            });
        }
        newListView.scrollDown();
    } 
    toastLog('分享任务执行结束！d==(￣▽￣*)b')
    //点击学习控件回到新闻首页
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1000);
};

/**
 * @function comment 评论任务
 */
function comment(){
    toastLog('开始执行发表观点任务...');
    sleep(1000);
    //点击要闻
    className("android.widget.TextView").text("要闻").findOne().parent().click();
    //阅读文章
    var newListView = className("android.widget.ListView").depth(20).findOnce(1);
    if(newListView!=null)
    {
        var newslist = newListView.children();
        if (newslist.length > 0) 
        {
            newslist.forEach(function(item,index){
                if(index>0&&index<=2){//index==0时是linearLayout控件，无法点击，也不是子项要闻
                    sleep(2000);
                    isClick = item.click()//进入新闻内容页
                    if(isClick)
                    {
                        sleep(1000);
                        toastLog("正在发表观点...");
                        //找到Text文本框控件
                        var comment_icon = className("android.widget.TextView").text("欢迎发表你的观点").findOne();
                        // 点击发表观点
                        comment_icon.click();
                        sleep(2000);
                        //键入观点内容
                        className("android.widget.EditText").findOne().setText("中国加油！祝福祖国的未来更加繁荣昌盛！");
                        sleep(2000);
                        //点击发布
                        className("android.widget.TextView").text("发布").findOne().click();
                        toastLog("评论发布成功，5s后删除记录...")
                        sleep(5000);
                        text("删除").clickable(true).findOne().click();
                        sleep(1000);
                        text("确认").clickable(true).findOne().click();
                        sleep(2000);
                        //回到新闻list页
                        back();
                    }
                }
            });
        }
        newListView.scrollDown();
    } 
    toastLog('发表观点任务执行结束！d==(￣▽￣*)b')
    //点击学习控件回到新闻首页
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1000);
};

/**
 * @function localChannel 本地频道任务
 */
function localChannel(){
    toastLog('开始执行本地频道任务');
    sleep(1000);
    //找到推荐、要闻、本地频道等的父控件
    avv = className("android.view.ViewGroup").depth(14).findOnce(2);
    // log(avv)
    var address = ""
    avv.children().forEach(function(item,index){
        // log(item);
        if(index==3){//找到本地频道的入口控件，并点击
            address = item.child(0).getText();
            log(address);
            item.click();
        }
    });
    //找到第一个本地频道入口
    channel = className("android.widget.TextView").depth(26).textContains(address).findOne().parent();
    // log(channel)
    //点击进入
    channel.click();
    sleep(5000);
    back();
    sleep(2000);
    toastLog('本地频道任务执行结束！d==(￣▽￣*)b')
    //点击学习控件回到新闻首页
    id("home_bottom_tab_button_work").findOne().click();
    sleep(1000);
};

/**
 * @function dailyQuiz 每日答题任务
 */
function dailyQuiz() {
    //多选题
    // sleep(1000);
    //匹配题干或者提示的正则表达式,以中文标点符号结尾
    var v = ".*[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]"
    // var v = [\u4e00-\u9fa5]
    if (descContains("多选题").exists()) {
        sleep(1000);
        log("多选");
        //首先检查题目的空格与选项的个数是否相等，若相等则全选

        var question = className("android.view.View").descMatches(v).findOnce()
        while(question==null){
            toastLog("重新搜索题干内容...")
            sleep(1000);
            question = className("android.view.View").descMatches(v).findOnce()
        }
        log("question:"+question)
        questionText = question.desc()
        log("questionText:"+questionText)
        var reg = /\S\s+(?=\S)/g;
        // toastLog(questionText.match(reg).length)
        var blankCnt = questionText.match(reg).length //空格个数
        if (className("android.widget.ListView").findOnce().children().length==blankCnt){
            toastLog("匹配到题目空格与选项相等，直接全选...")
            className("android.widget.ListView").findOnce().children().forEach(function(child) {
                child.child(0).child(1).click();
                sleep(200);
            });
            desc("查看提示").click();
            sleep(500);
            back();
            sleep(1000);
            var confirm = descContains("确定").findOnce();
            if(confirm!=null){
                confirm.click();
                sleep(1000);
            }
            sleep(1000);
            if (desc("下一题").exists()) {
                desc("下一题").click();
                sleep(500);
            }
            if (desc("完成").exists()) {
                desc("完成").click();
                sleep(500);
            }
            return;
        }
        //题目的空格与选项的个数不相等
        else{
            desc("查看提示").click()
            sleep(1000);
            // var hint = className("android.view.View").depth(21).indexInParent(1).drawingOrder(0).findOne().child(0).desc()
            var hint = className("android.view.View").clickable(true).indexInParent(0).depth(22).drawingOrder(0).findOnce();
            while(hint==null||hint.desc()=="")
            {
                toastLog("重新搜索提示...");
                back()
                sleep(1000);
                desc("查看提示").click();
                sleep(1000);
                hint = className("android.view.View").clickable(true).indexInParent(0).depth(22).drawingOrder(0).findOnce();
            }
            log("提示："+hint.desc())
            back()
            sleep(1000)
            // let similarities = []
            var final_answer= ""
            var options = [];
            var match_options= [];
            className("android.widget.ListView").findOne().children().forEach(function(child) {
                var option = child.child(0).child(2).desc();
                log("options:"+option)
                options.push(option)
                var start = hint.desc().indexOf(option);//获得option字符串在hint.desc()字符串中的开始位置
                if(start!=-1){//找到了
                    match_options.push(option);
                }
            });
            log("match_options:"+match_options)
            //找到多个匹配选项
            if(match_options.length>0)
            {
                log("找到多个匹配选项")
                //逐个点击正确答案
                className("android.widget.ListView").findOne().children().forEach(child => {
                    var answer = child.child(0).child(2).desc();
                    sleep(1000)
                    for(var i=0;i<match_options.length;i++)
                    {
                        if (answer == match_options[i]) {
                            child.child(0).child(1).click();
                            sleep(200);
                        }
                    }
                    
                });
            }
        }
        //再点击查看提示来激活确定的控件，不然找不到这个控件
        desc("查看提示").click();
        sleep(500);
        back();
        sleep(1000);
        var confirm = descContains("确定").findOnce();
        if(confirm!=null){
            confirm.click();
            sleep(1000);
        }
        sleep(2000);
        if (desc("下一题").exists()) {
            desc("下一题").click();
            sleep(500);
        }
        if (desc("完成").exists()) {
            desc("完成").click();
            sleep(500);
        }
    }
    // sleep(1000);
    if (descContains("填空题").exists()) {
        log("填空");
        sleep(1000);
        //点击提示按钮
        desc("查看提示").findOne().click()
        sleep(1000);
        var hint = className("android.view.View").clickable(true).indexInParent(0).depth(22).drawingOrder(0).findOnce();
        while(hint==null||hint.desc()=="")
        {
            back();
            sleep(1000);
            toastLog("重新搜索提示...");
            desc("查看提示").click();
            sleep(1000);
            hint = className("android.view.View").clickable(true).indexInParent(0).depth(22).drawingOrder(0).findOnce();
        }
        back();
        sleep(1000);
        var video_flag = 0;
        log("提示："+hint.desc())
        if(hint.desc()=="请观看视频"){
            video_flag = 1;
        }
        //构造空的对象
        var ans = {
            index:0,//空的起始位置索引
            len: 0,//空的长度
            prefix: "",//空的前缀
            postfix:""//空的后缀
        }
        //构造存放题目特征数组
        var ans_group= [];
        var content_view = className("android.view.View").depth(22).findOnce(1);
        log("content_view:"+content_view);
        content_view.children().forEach(function(child,index){
            //找到有几个空，并确定每个空的长度
            log(child.desc());
            //找到了android.widget.EditText
            if(child.desc()==""&&child.className()=="android.view.View"){
                //获取空的索引
                ans.index = index
                //获得空的前缀
                if(index>0){
                    ans.prefix = content_view.child(index-1).desc()
                }
                // 获取空的长度
                var i = index
                ans.len = 0;
                child.children().forEach(function(c){
                    if(c.className()=="android.view.View"){
                        ans.len++;
                    }
                });
                // while(content_view.child(i+1).desc()=="")
                // {
                //     ans.len++;
                //     i++;
                // }
                ans.postfix = content_view.child(i+1).desc();
                ans_group.push({
                    index:ans.index,
                    len:ans.len,
                    prefix:ans.prefix,
                    postfix:ans.postfix
                });
            }
        })
        log(ans_group)
        var result = "";
        for(var i=0;i<ans_group.length;i++)
        {
            var blank = ans_group[i];
            var pre_chars = "";
            var post_chars = "";
            if(video_flag)//遇到看视频，无能为力了
            {
                result = hint.desc().substring(0,blank.len);
                log("观看看视频的result:"+result);
                //填上result
                content_view.child(blank.index).child(0).setText(result);
                sleep(500);
                continue;
            }
            //取空的前3个字符，即前缀的最后3个字符
            if(blank.prefix.length>=3){
                pre_chars = blank.prefix.substring(blank.prefix.length-3,blank.prefix.length);
                log("pre_chars:"+pre_chars)
                start = hint.desc().indexOf(pre_chars);
                if(start!=-1){//说明找到了
                    start = start+pre_chars.length;
                    result = hint.desc().substring(start,start+blank.len);
                    log("result:"+result);
                    //填上result
                    content_view.child(blank.index).child(0).setText(result);
                    sleep(500);
                    continue;
                }
                else{//没找到，缩小前缀匹配范围
                    pre_chars = blank.prefix.substring(blank.prefix.length-2,blank.prefix.length);
                    start = hint.desc().indexOf(pre_chars);
                    if(start!=-1){//说明找到了
                        start = start+pre_chars.length;
                        result = hint.desc().substring(start,start+blank.len);
                        log("result:"+result);
                        //填上result
                        content_view.child(blank.index).child(0).setText(result);
                        sleep(500);
                        continue;
                    }
                    else{//继续缩小匹配范围
                        pre_chars = blank.prefix.substring(blank.prefix.length-1,blank.prefix.length);
                        start = hint.desc().indexOf(pre_chars);
                        if(start!=-1){//说明找到了
                            start = start+pre_chars.length;
                            result = hint.desc().substring(start,start+blank.len);
                            log("result:"+result);
                            //填上result
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                        else{//直接选提示的前几个字符作为答案
                            log("前缀匹配未找到符合条件的结果...")
                            result = hint.desc().substring(0,blank.len);
                            log("result:"+result);
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                    }
                }
            }//如果前缀长度2，那就取空的前2个
            else if(blank.prefix.length==2){
                pre_chars = blank.prefix.substring(blank.prefix.length-2,blank.prefix.length);
                    start = hint.desc().indexOf(pre_chars);
                    if(start!=-1){//说明找到了
                        start = start+pre_chars.length;
                        result = hint.desc().substring(start,start+blank.len);
                        log("result:"+result);
                        //填上result
                        content_view.child(blank.index).child(0).setText(result);
                        sleep(500);
                        continue;
                    }
                    else{//继续缩小匹配范围
                        pre_chars = blank.prefix.substring(blank.prefix.length-1,blank.prefix.length);
                        start = hint.desc().indexOf(pre_chars);
                        if(start!=-1){//说明找到了
                            start = start+pre_chars.length;
                            result = hint.desc().substring(start,start+blank.len);
                            log("result:"+result);
                            //填上result
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                        else{//直接选提示的前几个字符作为答案
                            log("前缀匹配未找到符合条件的结果...")
                            result = hint.desc().substring(0,blank.len);
                            log("result:"+result);
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                    }
            }//如果前缀长度1，那就取空的前1个
            else if(blank.prefix.length==1){
                pre_chars = blank.prefix.substring(blank.prefix.length-1,blank.prefix.length);
                start = hint.desc().indexOf(pre_chars);
                if(start!=-1){//说明找到了
                    start = start+pre_chars.length;
                    result = hint.desc().substring(start,start+blank.len);
                    log("result:"+result);
                    //填上result
                    content_view.child(blank.index).child(0).setText(result);
                    sleep(500);
                    continue;
                }
                else{//直接选提示的前几个字符作为答案
                    log("前缀匹配未找到符合条件的结果...")
                    result = hint.desc().substring(0,blank.len);
                    log("result:"+result);
                    content_view.child(blank.index).child(0).setText(result);
                    sleep(500);
                    continue;
                }
            }
            //如果没有前缀，则用后缀匹配
            else if(blank.prefix.length==0){
                //若后缀长度>3,一般情况下如果前缀=0,后缀都>3
                if(blank.postfix.length>=3){
                    post_chars = blank.postfix.substring(0,3);
                    log(post_chars)
                    start = hint.desc().indexOf(post_chars);
                    if(start!=-1){//说明找到了
                        start = start-post_chars.length;
                        result = hint.desc().substring(start,start+blank.len);
                        log("result:"+result);
                        //填上result
                        content_view.child(blank.index).child(0).setText(result);
                        sleep(500);
                        continue;
                    }
                    else{//缩小后缀匹配的范围
                        post_chars = blank.postfix.substring(0,2);
                        log(post_chars)
                        start = hint.desc().indexOf(post_chars);
                        if(start!=-1){//说明找到了
                            start = start-post_chars.length;
                            result = hint.desc().substring(start,start+blank.len);
                            log("result:"+result);
                            //填上result
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                        else{//再缩小后缀匹配的范围
                            post_chars = blank.postfix.substring(0,1);
                            log(post_chars)
                            start = hint.desc().indexOf(post_chars);
                            if(start!=-1){//说明找到了
                                start = start-post_chars.length;
                                result = hint.desc().substring(start,start+blank.len);
                                log("result:"+result);
                                //填上result
                                content_view.child(blank.index).child(0).setText(result);
                                sleep(500);
                                continue;
                            }
                            else{//直接选提示的前几个字符作为答案
                                log("后缀匹配未找到符合条件的结果...")
                                result = hint.desc().substring(0,blank.len);
                                log("result:"+result);
                                content_view.child(blank.index).child(0).setText(result);
                                sleep(500);
                                continue;
                            }
                        }
                    }
                }
            }
        }
        sleep(2000);
        var confirm = descContains("确定").findOnce();
        if(confirm!=null){
            confirm.click();
            sleep(1000);
        }
        sleep(2000);
        if (desc("下一题").exists()) {
            desc("下一题").click();
            sleep(500);
        }
        if (desc("完成").exists()) {
            desc("完成").click();
            sleep(500);
        }
    } 
    //单选题
    // sleep(1000);
    if (descContains("单选题").exists()) {
        sleep(1000);
        log("单选")
        if (desc("下一题").exists()) {
            log("跑太快了...");
            sleep(500);
            desc("下一题").click();
            sleep(500);
            return;
        }
        desc("查看提示").click()
        sleep(1000);
        // var hint = className("android.view.View").depth(21).indexInParent(1).drawingOrder(0).findOne().child(0).desc()
        var hint = className("android.view.View").clickable(true).indexInParent(0).depth(22).drawingOrder(0).findOnce();
        while(hint==null||hint.desc()=="")
        {
            back()
            sleep(1000);
            toastLog("重新搜索提示...");
            desc("查看提示").click();
            sleep(1000);
            hint = className("android.view.View").clickable(true).indexInParent(0).depth(22).drawingOrder(0).findOnce();
        }
        log("提示："+hint.desc())
        back()
        sleep(1000)
        // let similarities = []
        var final_answer= ""
        var options = [];
        var match_options= [];
        className("android.widget.ListView").findOne().children().forEach(function(child) {
            var option = child.child(0).child(2).desc();
            log("options:"+option)
            options.push(option)
            var start = hint.desc().indexOf(option);//获得option字符串在hint.desc()字符串中的开始位置
            if(start!=-1){//找到了
                match_options.push(option);
            }
        });
        log("match_options:"+match_options);
        //根据选项的匹配数量确定答案
        if(match_options.length==1)
        {
            log("找到了唯一一个匹配结果");
            final_answer = match_options[0];
        }
        //如果出现多个匹配选项，但不是全部选项,且只剩一个选项不匹配，即可能出现“以上都是”的情况
        else if(match_options.length>1&&match_options.length==options.length-1)
        {
            log("找到多个匹配选项")
            for(var i=0;i<options.length;i++){
                var flag = 0;
                for(var j=0;j<match_options.length;j++){
                    if(options[i]==match_options[j]){
                        flag = 1;
                        break;
                    }
                }
                //说明出现了“以上都是”的选项
                if(flag==0)
                {
                    final_answer = options[i];
                    break;
                }
            }
        }
        //其他未知情况，默认选择第一个匹配的结果
        else{
            log("其余情况");
            if(match_options.length>0)
            {
                log("match_options.length:"+match_options.length+",默认选择匹配结果的第一个");
                final_answer = match_options[0];
            }
            else
            {
                //比如判断题，随便选一个
                log("不存在匹配成功的结果，随机选择一个");
                final_answer = options[random(0,options.length-1)];
            }
        }
        log("final_answer:"+final_answer)
        
        //点击正确答案
        className("android.widget.ListView").findOne().children().forEach(child => {
            var answer = child.child(0).child(2).desc();
            if (final_answer === answer) {
                child.child(0).child(1).click();
                sleep(2000);
            }
        });

        //再点击查看提示来激活确定的控件，不然找不到这个控件
        desc("查看提示").click();
        sleep(1000);
        back();
        sleep(1000);
        var confirm = descContains("确定").findOnce();
        if(confirm!=null){
            confirm.click();
            sleep(1000);
        }
        sleep(2000);
        if (desc("下一题").exists()) {
            sleep(500);
            desc("下一题").click();
            sleep(500);
        }
        if (desc("完成").exists()) {
            sleep(500);
            desc("完成").click();
            sleep(500);
        }
    }
}
/**
 * @function doDailyQuiz 进入每日答题任务的主函数
 */
function doDailyQuiz()
{
    toastLog('开始执行每日答题任务...')
    sleep(1000);
    // 从主页到我的主页
    className("android.widget.TextView").id('comm_head_xuexi_mine').findOne().click();
    sleep(2000);
    // 点击事件在我的积分父控件上
    id("user_item_name").text("我要答题").findOne().parent().click();
    sleep(1000);
    //若没加载出来控件，则循环等待界面加载完毕
    while(!desc("奖励积分").exists())
    {
        sleep(1000);
        toastLog("等待加载...");
    }
    if(desc("title4@2x.a9778133").exists())//如果出现“每日答题改版啦弹出框”
    {
        log("出现“每日答题改版啦弹出框”")
        var iknow = className("android.view.View").clickable(true).depth(22).findOne().parent();
        log(iknow)
        click(iknow.bounds().centerX(),iknow.bounds().centerY());
        sleep(1000);
    }
    //找到每日答题控件，点击进入
    desc("每日答题").findOne().click();
    sleep(1000);
    while(!className("android.view.View").desc("本次答对题目数").exists()){
        dailyQuiz();
        sleep(2000);
    }
    toastLog("等候3s加载页面...")
    sleep(3000);
    if(className("android.view.View").desc("领取奖励已达今日上限").depth(21).exists())
    {
        log("出现 领取奖励已达今日上限")
        sleep(1000);
        var ret = className("android.widget.Button").desc("返回").findOne();//bounds = (99,1165,533,1286)
        sleep(1000);
        ret.click();
        sleep(1000);
        back()//退到 我的
        sleep(1000);
        toastLog('每日答题任务执行结束！d==(￣▽￣*)b')
        back();//退到 主页
        sleep(1000);
    }
    else{
        log("未出现 领取奖励已达今日上限")
        sleep(1000);
        var ret = className("android.widget.Button").desc("再来一组").findOne();
        sleep(1000);
        click(ret.bounds().centerX(),ret.bounds().centerY());
        sleep(1000);
        //再来一组
        while(!className("android.view.View").desc("本次答对题目数").exists()){
            dailyQuiz();
            sleep(2000);
        }
        toastLog("等候3s加载页面...")
        sleep(3000);
        //两组结束，直接回退
        var ret = className("android.widget.Button").desc("返回").findOne();//bounds = (99,1165,533,1286)
        sleep(1000);
        ret.click();
        sleep(1000);
        back()
        sleep(1000);
        toastLog('每日答题任务执行结束！d==(￣▽￣*)b')
        back();//退到 主页
        sleep(1000);
    }
    
}

/**
 * @function doWeeklyQuiz 进入每周答题任务的主函数
 */
function doWeeklyQuiz()
{
    toastLog('开始执行每周答题任务...')
    sleep(1000);
    // 从主页到我的主页
    className("android.widget.TextView").id('comm_head_xuexi_mine').findOne().click();
    sleep(2000);
    // 点击事件在我的积分父控件上
    id("user_item_name").text("我要答题").findOne().parent().click();
    sleep(1000);
    //若没加载出来控件，则循环等待界面加载完毕
    while(!desc("奖励积分").exists())
    {
        sleep(1000);
        toastLog("等待加载...");
    }
    if(desc("title4@2x.a9778133").exists())//如果出现“每日答题改版啦弹出框”
    {
        log("出现“每日答题改版啦弹出框”")
        var iknow = className("android.view.View").clickable(true).depth(22).findOne().parent();
        log(iknow)
        click(iknow.bounds().centerX(),iknow.bounds().centerY());
        sleep(1000);
    }
    //找到每周答题控件，点击进入
    desc("每周答题").findOne().click();
    sleep(2000);
    while(desc("未作答").findOnce()==null)
    {
        if(className("android.view.View").desc("您已经看到了我的底线").exists())
        {
            toastLog("检测到底线，未找到未作答题目...")
            back();//退到答题种类
            sleep(1000);
            back();//退到我的
            sleep(1000);
            toastLog('题目已做完，每周答题任务执行结束！')
            back();//退到主页
            sleep(1000);
            return;
        }
        toastLog("向下翻页...")
        className("android.view.View").scrollable(true).findOne().scrollDown();
        sleep(500); 
    }
    desc("未作答").findOnce().click();
    sleep(1000);
    while(!className("android.view.View").desc("本次答对题目数").exists()){
        dailyQuiz();
        sleep(2000);
    }
    toastLog("等候3s加载页面...")
    sleep(3000);
    if(className("android.view.View").desc("领取奖励已达今日上限").depth(21).exists())
    {
        log("出现 领取奖励已达今日上限")
        sleep(1000);
        var ret = className("android.widget.Button").desc("返回").findOne();//bounds = (99,1165,533,1286)
        sleep(2000);
        ret.click();
        sleep(1000);
        back();
        sleep(1000);
        back();//退到我的
        sleep(1000);
        toastLog('每周答题任务执行结束！d==(￣▽￣*)b')
        back();//退到 主页
        sleep(1000);
    }
    else{
        log("未出现 领取奖励已达今日上限")
        sleep(1000);
        back();//回到每周答题列表
        sleep(1000);
        while(desc("未作答").findOnce()==null)
        {
            toastLog("向下翻页...")
            className("android.view.View").scrollable(true).findOne().scrollDown();
            sleep(500);
        }
        desc("未作答").findOnce().click();
        sleep(1000);
        //再来一组
        while(!className("android.view.View").desc("本次答对题目数").exists()){
            dailyQuiz();
            sleep(2000);
        }
        toastLog("等候3s加载页面...")
        sleep(3000);
        //两组结束，直接回退
        var ret = className("android.widget.Button").desc("返回").findOne();//bounds = (99,1165,533,1286)
        sleep(1000);
        ret.click();
        sleep(1000);
        back();
        sleep(1000);
        back();//退到 我的
        sleep(1000);
        toastLog('每周答题任务执行结束！d==(￣▽￣*)b')
        back();//退到 主页
        sleep(1000);
    }
}

/**
 * @function specialQuiz 专项答题任务
 */
function specialQuiz() {
    //多选题
    // sleep(1000);
    var v = ".*[\u3002\uff1b\uff0c\uff1a\u201c\u201d\uff08\uff09\u3001\uff1f\u300a\u300b]"
    if (descContains("多选题").exists()) {
        sleep(1000);
        log("多选");
        
        //首先检查题目的空格与选项的个数是否相等，若相等则全选
        var question = className("android.view.View").descMatches(v).findOnce()
        var t = 0;
        while(question==null){
            if(t>15){
                toastLog("题目内容控件搜索失败，退出循环...")
                break;
            }
            toastLog("重新搜索题干内容...")
            sleep(1000);
            question = className("android.view.View").descMatches(v).findOnce()
            t++;
        }
        var questionText = ""
        if(question!=null){
            questionText = question.desc()
        }
        else{
            questionText = "e e";//盲猜一个空，反正不相等会去找提示
        }
        log("questionText:"+questionText);
        var reg = /\S\s+(?=\S)/g;
        // toastLog(questionText.match(reg).length)
        var blankCnt = questionText.match(reg).length //空格个数
        log("题目空格："+className("android.widget.ListView").findOnce().children().length)
        log("选项数量："+blankCnt)
        if (className("android.widget.ListView").findOnce().children().length==blankCnt){
            toastLog("匹配到题目空格与选项相等，直接全选...")
            className("android.widget.ListView").findOnce().children().forEach(function(child) {
                child.child(0).child(1).click();
                sleep(200);
            });
        }
        //题目的空格与选项的个数不相等
        else{
            desc("查看提示").click()
            sleep(1000);
            var hint = className("android.view.View").depth(21).indexInParent(0).drawingOrder(0).findOnce(2)
            // log(hint)
            while(hint==null||hint.desc()=="")
            {
                back()
                sleep(1000);
                toastLog("重新搜索提示...");
                desc("查看提示").click();
                sleep(1000);
                hint = className("android.view.View").depth(21).indexInParent(0).drawingOrder(0).findOnce(2)
                // log(hint)
            }
            log("提示："+hint.desc())
            back()
            sleep(1000)
            // let similarities = []
            var final_answer= ""
            var options = [];
            var match_options= [];
            className("android.widget.ListView").findOne().children().forEach(function(child) {
                var option = child.child(0).child(2).desc();
                log("options:"+option)
                options.push(option)
                var start = hint.desc().indexOf(option);//获得option字符串在hint.desc()字符串中的开始位置
                if(start!=-1){//找到了
                    match_options.push(option);
                }
            });
            log("match_options:"+match_options)
            //找到多个匹配选项
            if(match_options.length>0)
            {
                log("找到多个匹配选项")
                //逐个点击正确答案
                className("android.widget.ListView").findOne().children().forEach(child => {
                    var answer = child.child(0).child(2).desc();
                    sleep(1000)
                    for(var i=0;i<match_options.length;i++)
                    {
                        if (answer == match_options[i]) {
                            child.child(0).child(1).click();
                            sleep(200);
                        }
                    }
                    
                });
            }
        }
        //再点击查看提示来激活确定的控件，不然找不到这个控件
        desc("查看提示").click();
        sleep(500);
        back();
        sleep(1000);
        var confirm = descContains("确定").findOnce();
        if(confirm!=null){
            confirm.click();
            sleep(1000);
        }
        sleep(2000);
        if (desc("下一题").exists()) {
            desc("下一题").click();
            sleep(500);
        }
        if (desc("完成").exists()) {
            desc("完成").click();
            sleep(500);
        }
    }
    // sleep(1000);
    if (descContains("填空题").exists()) {
        log("填空");
        sleep(1000);
        //点击提示按钮
        desc("查看提示").findOne().click()
        sleep(1000);
        // var hint = className("android.view.View").clickable(true).indexInParent(0).depth(22).drawingOrder(0).findOnce();
        var hint = className("android.view.View").depth(21).indexInParent(0).drawingOrder(0).findOnce(2);
        while(hint==null||hint.desc()=="")
        {
            back();
            sleep(1000);
            toastLog("重新搜索提示...");
            desc("查看提示").click();
            sleep(1000);
            // hint = className("android.view.View").clickable(true).indexInParent(0).depth(22).drawingOrder(0).findOnce();
            hint = className("android.view.View").depth(21).indexInParent(0).drawingOrder(0).findOnce(2);
        }
        back();
        sleep(1000);
        var video_flag = 0;
        log("提示："+hint.desc())
        if(hint.desc()=="请观看视频"){
            video_flag = 1;
        }
        //构造空的对象
        var ans = {
            index:0,//空的起始位置索引
            len: 0,//空的长度
            prefix: "",//空的前缀
            postfix:""//空的后缀
        }
        //构造存放题目特征数组
        var ans_group= [];
        // var content_view = className("android.view.View").depth(22).findOnce(1);
        var content_view = className("android.view.View").depth(22).findOnce(3);
        log("content_view:"+content_view);
        content_view.children().forEach(function(child,index){
            //找到有几个空，并确定每个空的长度
            log(child.desc());
            //找到了android.widget.EditText
            if(child.desc()==""&&child.className()=="android.view.View"){
                //获取空的索引
                ans.index = index
                //获得空的前缀
                if(index>0){
                    ans.prefix = content_view.child(index-1).desc()
                }
                // 获取空的长度
                var i = index
                ans.len = 0;
                child.children().forEach(function(c){
                    if(c.className()=="android.view.View"){
                        ans.len++;
                    }
                });
                // while(content_view.child(i+1).desc()=="")
                // {
                //     ans.len++;
                //     i++;
                // }
                ans.postfix = content_view.child(i+1).desc();
                ans_group.push({
                    index:ans.index,
                    len:ans.len,
                    prefix:ans.prefix,
                    postfix:ans.postfix
                });
            }
        })
        log(ans_group)
        var result = "";
        for(var i=0;i<ans_group.length;i++)
        {
            var blank = ans_group[i];
            var pre_chars = "";
            var post_chars = "";
            if(video_flag)//遇到看视频，无能为力了
            {
                result = hint.desc().substring(0,blank.len);
                log("观看看视频的result:"+result);
                //填上result
                content_view.child(blank.index).child(0).setText(result);
                sleep(500);
                continue;
            }
            //取空的前3个字符，即前缀的最后3个字符
            if(blank.prefix.length>=3){
                pre_chars = blank.prefix.substring(blank.prefix.length-3,blank.prefix.length);
                log("pre_chars:"+pre_chars)
                start = hint.desc().indexOf(pre_chars);
                if(start!=-1){//说明找到了
                    start = start+pre_chars.length;
                    result = hint.desc().substring(start,start+blank.len);
                    log("result:"+result);
                    //填上result
                    content_view.child(blank.index).child(0).setText(result);
                    sleep(500);
                    continue;
                }
                else{//没找到，缩小前缀匹配范围
                    pre_chars = blank.prefix.substring(blank.prefix.length-2,blank.prefix.length);
                    start = hint.desc().indexOf(pre_chars);
                    if(start!=-1){//说明找到了
                        start = start+pre_chars.length;
                        result = hint.desc().substring(start,start+blank.len);
                        log("result:"+result);
                        //填上result
                        content_view.child(blank.index).child(0).setText(result);
                        sleep(500);
                        continue;
                    }
                    else{//继续缩小匹配范围
                        pre_chars = blank.prefix.substring(blank.prefix.length-1,blank.prefix.length);
                        start = hint.desc().indexOf(pre_chars);
                        if(start!=-1){//说明找到了
                            start = start+pre_chars.length;
                            result = hint.desc().substring(start,start+blank.len);
                            log("result:"+result);
                            //填上result
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                        else{//直接选提示的前几个字符作为答案
                            log("前缀匹配未找到符合条件的结果...")
                            result = hint.desc().substring(0,blank.len);
                            log("result:"+result);
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                    }
                }
            }//如果前缀长度2，那就取空的前2个
            else if(blank.prefix.length==2){
                pre_chars = blank.prefix.substring(blank.prefix.length-2,blank.prefix.length);
                    start = hint.desc().indexOf(pre_chars);
                    if(start!=-1){//说明找到了
                        start = start+pre_chars.length;
                        result = hint.desc().substring(start,start+blank.len);
                        log("result:"+result);
                        //填上result
                        content_view.child(blank.index).child(0).setText(result);
                        sleep(500);
                        continue;
                    }
                    else{//继续缩小匹配范围
                        pre_chars = blank.prefix.substring(blank.prefix.length-1,blank.prefix.length);
                        start = hint.desc().indexOf(pre_chars);
                        if(start!=-1){//说明找到了
                            start = start+pre_chars.length;
                            result = hint.desc().substring(start,start+blank.len);
                            log("result:"+result);
                            //填上result
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                        else{//直接选提示的前几个字符作为答案
                            log("前缀匹配未找到符合条件的结果...")
                            result = hint.desc().substring(0,blank.len);
                            log("result:"+result);
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                    }
            }//如果前缀长度1，那就取空的前1个
            else if(blank.prefix.length==1){
                pre_chars = blank.prefix.substring(blank.prefix.length-1,blank.prefix.length);
                start = hint.desc().indexOf(pre_chars);
                if(start!=-1){//说明找到了
                    start = start+pre_chars.length;
                    result = hint.desc().substring(start,start+blank.len);
                    log("result:"+result);
                    //填上result
                    content_view.child(blank.index).child(0).setText(result);
                    sleep(500);
                    continue;
                }
                else{//直接选提示的前几个字符作为答案
                    log("前缀匹配未找到符合条件的结果...")
                    result = hint.desc().substring(0,blank.len);
                    log("result:"+result);
                    content_view.child(blank.index).child(0).setText(result);
                    sleep(500);
                    continue;
                }
            }
            //如果没有前缀，则用后缀匹配
            else if(blank.prefix.length==0){
                //若后缀长度>3,一般情况下如果前缀=0,后缀都>3
                if(blank.postfix.length>=3){
                    post_chars = blank.postfix.substring(0,3);
                    log(post_chars)
                    start = hint.desc().indexOf(post_chars);
                    if(start!=-1){//说明找到了
                        start = start-post_chars.length;
                        result = hint.desc().substring(start,start+blank.len);
                        log("result:"+result);
                        //填上result
                        content_view.child(blank.index).child(0).setText(result);
                        sleep(500);
                        continue;
                    }
                    else{//缩小后缀匹配的范围
                        post_chars = blank.postfix.substring(0,2);
                        log(post_chars)
                        start = hint.desc().indexOf(post_chars);
                        if(start!=-1){//说明找到了
                            start = start-post_chars.length;
                            result = hint.desc().substring(start,start+blank.len);
                            log("result:"+result);
                            //填上result
                            content_view.child(blank.index).child(0).setText(result);
                            sleep(500);
                            continue;
                        }
                        else{//再缩小后缀匹配的范围
                            post_chars = blank.postfix.substring(0,1);
                            log(post_chars)
                            start = hint.desc().indexOf(post_chars);
                            if(start!=-1){//说明找到了
                                start = start-post_chars.length;
                                result = hint.desc().substring(start,start+blank.len);
                                log("result:"+result);
                                //填上result
                                content_view.child(blank.index).child(0).setText(result);
                                sleep(500);
                                continue;
                            }
                            else{//直接选提示的前几个字符作为答案
                                log("后缀匹配未找到符合条件的结果...")
                                result = hint.desc().substring(0,blank.len);
                                log("result:"+result);
                                content_view.child(blank.index).child(0).setText(result);
                                sleep(500);
                                continue;
                            }
                        }
                    }
                }
            }
        }
        sleep(2000);
        var confirm = descContains("确定").findOnce();
        if(confirm!=null){
            confirm.click();
            sleep(1000);
        }
        sleep(2000);
        if (desc("下一题").exists()) {
            desc("下一题").click();
            sleep(500);
        }
        if (desc("完成").exists()) {
            desc("完成").click();
            sleep(500);
        }
    } 
    //单选题
    // sleep(1000);
    if (descContains("单选题").exists()) {
        sleep(1000);
        log("单选")
        desc("查看提示").click()
        sleep(1000);
        // var hint = className("android.view.View").depth(21).indexInParent(1).drawingOrder(0).findOne().child(0).desc()
        var hint = className("android.view.View").depth(21).indexInParent(0).drawingOrder(0).findOnce(2);
        while(hint==null||hint.desc()=="")
        {
            back()
            sleep(1000);
            toastLog("重新搜索提示...");
            desc("查看提示").click();
            sleep(1000);
            hint = className("android.view.View").depth(21).indexInParent(0).drawingOrder(0).findOnce(2);
        }
        log("提示："+hint.desc())
        back()
        sleep(1000)
        // let similarities = []
        var final_answer= ""
        var options = [];
        var match_options= [];
        className("android.widget.ListView").findOne().children().forEach(function(child) {
            var option = child.child(0).child(2).desc();
            log("options:"+option)
            options.push(option)
            var start = hint.desc().indexOf(option);//获得option字符串在hint.desc()字符串中的开始位置
            if(start!=-1){//找到了
                match_options.push(option);
            }
        });
        log("match_options:"+match_options);
        //根据选项的匹配数量确定答案
        if(match_options.length==1)
        {
            log("找到了唯一一个匹配结果");
            final_answer = match_options[0];
        }
        //如果出现多个匹配选项，但不是全部选项,且只剩一个选项不匹配，即可能出现“以上都是”的情况
        else if(match_options.length>1&&match_options.length==options.length-1)
        {
            log("找到多个匹配选项")
            for(var i=0;i<options.length;i++){
                var flag = 0;
                for(var j=0;j<match_options.length;j++){
                    if(options[i]==match_options[j]){
                        flag = 1;
                        break;
                    }
                }
                //说明出现了“以上都是”的选项
                if(flag==0)
                {
                    final_answer = options[i];
                    break;
                }
            }
        }
        //其他未知情况，默认选择第一个匹配的结果
        else{
            log("其余情况");
            if(match_options.length>0)
            {
                log("match_options.length:"+match_options.length+",默认选择匹配结果的第一个");
                final_answer = match_options[0];
            }
            else
            {
                //比如判断题，随便选一个
                log("不存在匹配成功的结果，随机选择一个");
                final_answer = options[random(0,options.length-1)];
            }
        }
        log("final_answer:"+final_answer)
        
        //点击正确答案
        className("android.widget.ListView").findOne().children().forEach(child => {
            var answer = child.child(0).child(2).desc();
            if (final_answer === answer) {
                child.child(0).child(1).click();
                sleep(500);
            }
        });
        desc("查看提示").click();
        sleep(500);
        back();
        sleep(2000);
        if (desc("下一题").exists()) {
            desc("下一题").click();
            sleep(500);
        }
        if (desc("完成").exists()) {
            desc("完成").click();
            sleep(500);
        }
    }
}
/**
 * @function doSpecialQuiz 进入专项答题任务的主函数
 */
function doSpecialQuiz()
{
    toastLog('开始执行专项答题任务...')
    sleep(1000);
    // 从主页到我的主页
    className("android.widget.TextView").id('comm_head_xuexi_mine').findOne().click();
    sleep(2000);
    // 点击事件在我的积分父控件上
    id("user_item_name").text("我要答题").findOne().parent().click();
    sleep(1000);
    //若没加载出来控件，则循环等待界面加载完毕
    while(!desc("奖励积分").exists())
    {
        sleep(1000);
        toastLog("等待加载...");
    }
    if(desc("title4@2x.a9778133").exists())//如果出现“每日答题改版啦弹出框”
    {
        log("出现“每日答题改版啦弹出框”")
        var iknow = className("android.view.View").clickable(true).depth(22).findOne().parent();
        log(iknow)
        click(iknow.bounds().centerX(),iknow.bounds().centerY());
        sleep(1000);
    }
    //找到专项答题控件，点击进入
    desc("专项答题").findOne().click();
    sleep(2000);
    var overdue = 0;
    while(desc("开始答题").findOnce()==null)
    {
        if(desc("已过期").findOnce()!=null)
        {
            overdue++;
            if(overdue>4){
                toastLog("检测到4个以上已过期题目，自动退出专项答题...")
                back();//退到答题种类列表
                sleep(1000);
                back();//退到我的
                sleep(1000);
                toastLog('专项答题任务执行结束！')
                back();
                sleep(1000);
                return;
            }
        }
        toastLog("向下翻页...")
        className("android.view.View").scrollable(true).findOne().scrollDown();
        sleep(500);
    }
    if(desc("继续答题").findOnce()!=null)
        desc("继续答题").findOnce().click();
    else if(desc("开始答题").findOnce()!=null)
        desc("开始答题").findOnce().click();
    sleep(1000);
    while(!className("android.view.View").desc("本次作答分数").exists()){
        specialQuiz();
        sleep(2000);
    }
    toastLog("等候3s加载页面...")
    sleep(3000);

    if(className("android.view.View").desc("领取奖励已达今日上限").exists())
    {
        log("出现 领取奖励已达今日上限")
        sleep(1000);
        back()//到专项答题列表页面
        sleep(1000);
        back()//到答题种类列表页面
        sleep(1000);
        back()//到我的页面
        sleep(1000);
        back()//到首页
        toastLog('专项答题任务执行结束！d==(￣▽￣*)b')
        sleep(1000);
    }
    else{
        log("未出现 领取奖励已达今日上限")
        sleep(1000);
        back();
        sleep(1000);
        while(desc("开始答题").findOnce()==null)
        {
            toastLog("向下翻页...")
            className("android.view.View").scrollable(true).findOne().scrollDown();
            sleep(500);
        }
        if(desc("继续答题").findOnce()!=null)
            desc("继续答题").findOnce().click();
        else if(desc("开始答题").findOnce()!=null)
            desc("开始答题").findOnce().click();
        //再来一组
        sleep(1000);
        while(!className("android.view.View").desc("本次作答分数").exists()){
            specialQuiz();
            sleep(2000);
        }
        toastLog("等候3s加载页面...")
        sleep(3000);
        //两组结束，直接回退
        back()//到专项答题列表页面
        sleep(1000);
        back()//到答题种类列表页面
        sleep(1000);
        back()//到我的页面
        sleep(1000);
        back()//到首页
        toastLog('专项答题任务执行结束！d==(￣▽￣*)b')
        sleep(1000);
    }
}

/**
 * 通过网络接口进行搜题
 * @param  keyword 
 */
function getTzAnswer(keyword) {
    //keyword =  encodeURI(encodeURI(keyword));
     var res = http.get("https://www.fuqiangai.com/s/api?t=4&k=" + keyword);
     if(res.statusCode != 200){
         toastLog("请求失败: " + res.statusCode + " " + res.statusMessage);
     }else{
         var ans = res.body.json();
         try {
             ans = ans["list"][0]["answers"].join().slice(2);
             log("网络爬取："+ans);
             return ans;
         } catch (error) {
             return "";
         }
        
     }
}
 
 /**
  * 标记正确答案
  * @param {*} x 
  * @param {*} y 
  */
function drawfloaty(x, y) {
     //floaty.closeAll();
     var window = floaty.window(
         <frame gravity="center">
             <text id="text" text="✔" textColor="#4caf50" />
         </frame>
     );
     window.setPosition(x, y - 50);
     return window;
     //sleep(2000);
     //window.close();
}
 
/**
 * 挑战答题入口
 */
function tiaoZhan() {
    toastLog("尝试爬取网络结果...")
    let failDo = false;
    //提取题目
    if (className("android.widget.ListView").exists()) {
        var _timu = className("android.widget.ListView").findOnce().parent().child(0).desc();
    } else {
        //back();
        toastLog("提取题目失败");
        failDo = true;
        // beep();
        return;
    }
    log("题目为:"+_timu);
    var chutiIndex = _timu.lastIndexOf("出题单位");
    if (chutiIndex != -1) {
        _timu = _timu.substring(0, chutiIndex - 2);
    }
    var timuOld = _timu;
    _timu = _timu.replace(/\s/g, "");

    //提取选项
    var ansTimu = [];
    if (className("android.widget.ListView").exists()) {
        sleep(500);
        // log("ListView:"+className("android.widget.ListView").findOne())
        className("android.widget.ListView").findOne().children().forEach(function(c){
            // log("c.child(0).child(1):"+c.child(0).child(1));
            ansTimu.push(c.child(0).child(1).desc());
        });
    } else {
        toastLog("答案选项获取失败...");
        failDo = true;
        return;
    }
    log("获取的选项内容:"+ansTimu);
    //未获取到选项
    if(ansTimu[0]==null||ansTimu[0]=="")
    {
        toastLog("获取选项内容失败，默认选择第一个...");
        className("android.widget.RadioButton").findOne().click();
        sleep(1000);
    }
    sleep(300);
    var answer = "";
    var ansFind = "";


    log("search:" + timuOld);
    
    var ansNet =  getTzAnswer(timuOld);
    sleep(500);
    //遍历题中的答案
    log("网络答案: " + ansNet);
    for (let item of ansTimu) {
        log("item:"+item);
        var indexFind = ansNet.indexOf(item);
        if (indexFind != -1) {
            ansFind = item;
            break;
        }
    }
    log("匹配结果: " + ansFind);
    if (ansFind != "") {
        answer = ansFind;
    } else {
        //网络也没找到，那么随机咯
        log("网络匹配失败，随机选择....");
        let randomIndex = random(0, ansTimu.length - 1);
        answer = ansTimu[randomIndex];
        // beep();
        //sleep(10*1000);
        //return;
    }
    
    //开始点击
    if (className("android.view.View").desc(answer).exists()) {
        //RadioButton位置
        var b = className("android.view.View").desc(answer).findOnce().parent().child(0).bounds();
        var tipsWindow = drawfloaty(b.centerX(), b.centerY());
        sleep(300);
        //点击RadioButton
        className("android.view.View").desc(answer).findOnce().parent().child(0).click();
        sleep(300);
        tipsWindow.close();
    } else {
        toastLog("点击答案失败");
        failDo = true;
    }
    sleep(1000);
}

function begin() {
    var i = 0;
    while (true) {
        //判断中途结束，可复活
        sleep(1000);
        if(className("android.view.View").depth(21).indexInParent(2).findOnce()!=null)
        {
            back();
            while(id("message").text("提交中...").exists());
            while(className("android.widget.Button").descContains("重试").exists()){
                log("网络不佳，点击重试...");
                className("android.widget.Button").descContains("重试").click();
                sleep(500);
            }
            
        }
        sleep(1000);
        //判断结束
        if (className("android.view.View").descContains("本次答对").exists()) {
            toastLog("等待3s至页面加载完成...");
            sleep(3000);
            if(className("android.view.View").descContains("领取奖励已达今日上限").exists())
            {
                toastLog("挑战答题当日积分已满...");
                break;
            }
            else{
                // className("android.view.View").desc("再来一局").findOne().click();
                // sleep(4000);
                back();
                sleep(2000);
                desc("挑战答题").findOne().click();
                i = 0;
                sleep(3500);

            }
        }
        tiaoZhan();
        sleep(1000);
        i++;
        log("循环次数：" +i)
        if (i > 11) {
            //剩下的题随便选，直到错了为止
            toastLog("连续答对超过10题以上，默认选第一个...")
            var radiobutton = className("android.widget.RadioButton").clickable(true).findOnce();
            if(radiobutton!=null)
            {
                radiobutton.click();
            }
            // break;
        }
    }
}
 
/**
 * @function challengeQuiz 挑战答题任务
 */
function challengeQuiz(){
     toastLog('开始执行挑战答题任务...')
     sleep(1000);
     // 从主页到我的主页
     className("android.widget.TextView").id('comm_head_xuexi_mine').findOne().click();
     sleep(2000);
     // 点击事件在我的积分父控件上
     id("user_item_name").text("我要答题").findOne().parent().click();
     sleep(1000);
     //若没加载出来控件，则循环等待界面加载完毕
     while(!desc("奖励积分").exists())
     {
         sleep(1000);
         toastLog("等待加载...");
     }
     if(desc("title4@2x.a9778133").exists())//如果出现“每日答题改版啦弹出框”
     {
         log("出现“每日答题改版啦弹出框”")
         var iknow = className("android.view.View").clickable(true).depth(22).findOne().parent();
         log(iknow)
         click(iknow.bounds().centerX(),iknow.bounds().centerY());
         sleep(1000);
     }
     //找到每日答题控件，点击进入
     desc("挑战答题").findOne().click();
     sleep(3500);
     //进入挑战答题入口
     begin();
     back();//到答题种类列表页面
     sleep(1000);
     back();//到我的
     sleep(1000);
     back();//到首页
     toastLog('挑战答题任务执行结束！d==(￣▽￣*)b')
     sleep(1000);
 
}


/**
 * @function subscribe 订阅任务
 */
function subscribe(num){
    sleep(1000);
    toastLog('开始执行订阅任务');
    // 从主页到我的主页
    id("comm_head_xuexi_mine").text("我的").findOne().click();
    sleep(2000);
    //点击订阅控件
    id("my_subscribe_tv").text("订阅").findOne().click();
    // waitForActivity("android.widget.FrameLayout",200);
    // log('过来了');
    sleep(3000);
    
    //在我的订阅里面找到所有订阅号，存起来
    var subscribed_accounts = [];
    //如果没有订阅任何订阅号，那直接点击添加
    if(id("no_content_text").exists()){
        //点击添加
        className("android.widget.TextView").text("添加").findOne().click();
        //在添加里面逐一扫描每个订阅号是否在上面的已订阅中，如果没匹配到，则订阅这个公众号,订阅num个即可
        accounts_pool = className("android.widget.ListView").depth(13).findOne();
        var bottom_flag = 0;
        while(accounts_pool!=null&&num>0)
        {
            sleep(1000);
            var frameLayoutList = accounts_pool.children();
            frameLayoutList.forEach(function(item,index){
                if(item.className()=='android.widget.FrameLayout')
                {
                    var account_name = item.find(className("android.widget.TextView"));
                    if(num>0&&subscribed_accounts.indexOf(account_name[0].text())==-1)//说明数组中不存在这个元素,则订阅他
                    {
                        num--;
                        subscribed_accounts.push(account_name[0].text());
                        subscribe_icon = item.find(className("android.widget.LinearLayout"))[1];
                        // log("subscribe_icon:"+subscribe_icon)
                        toastLog("正在订阅...");
                        subscribe_icon.click();
                        sleep(2000);
                    }
                }
                else if(item.className()=='android.widget.LinearLayout')//遍历到底了
                {
                    toastLog("检测到已经遍历到底...");
                    bottom_flag = 1;
                    return;
                }
            });
            if(bottom_flag)
            {
                toastLog("强国号都已经订阅完啦...");
                break;
            }
            accounts_pool.scrollDown();
            sleep(2000);
            accounts_pool = className("android.widget.ListView").depth(13).findOne();
        }
        
    }
    else//如果曾经订阅过，那么需要先找到订阅了哪些
    {
        var list_view = className("android.widget.ListView").depth(11).findOne();
        // log(list_view)
        var bottom_flag = 0;
        while(list_view!=null)
        {
            sleep(1000);
            var frameLayoutList = list_view.children();
            // log('frameLayoutList:'+frameLayoutList)
            frameLayoutList.forEach(function(item,index){
                if(item.className()=='android.widget.FrameLayout')
                {
                    // log(item)
                    var account_name = item.find(className("android.widget.TextView"));
                    // log('已订阅：'+account_name[0].text())
                    if(subscribed_accounts.indexOf(account_name[0].text())==-1)//说明数组中不存在这个元素
                    {
                        subscribed_accounts.push(account_name[0].text());
                    }
                }
                else if(item.className()=='android.widget.LinearLayout')//遍历到底了
                {
                    bottom_flag = 1;
                }
            });
            if(bottom_flag)
            {
                break;
            }
            list_view.scrollDown();
            sleep(2000);
            list_view = className("android.widget.ListView").depth(11).findOne();
        }
        log(subscribed_accounts)

        //点击添加
        className("android.widget.TextView").text("添加").findOne().click();
        //在添加里面逐一扫描每个订阅号是否在上面的已订阅中，如果没匹配到，则订阅这个公众号,订阅num个即可
        accounts_pool = className("android.widget.ListView").depth(13).findOne();
        var bottom_flag = 0;
        while(accounts_pool!=null&&num>0)
        {
            sleep(1000);
            var frameLayoutList = accounts_pool.children();
            frameLayoutList.forEach(function(item,index){
                if(item.className()=='android.widget.FrameLayout')
                {
                    var account_name = item.find(className("android.widget.TextView"));
                    if(num>0&&subscribed_accounts.indexOf(account_name[0].text())==-1)//说明数组中不存在这个元素,则订阅他
                    {
                        num--;
                        subscribed_accounts.push(account_name[0].text());
                        subscribe_icon = item.find(className("android.widget.LinearLayout"))[1];
                        // log("subscribe_icon:"+subscribe_icon)
                        toastLog("正在订阅...");
                        subscribe_icon.click();
                        sleep(2000);
                    }
                }
                else if(item.className()=='android.widget.LinearLayout')//遍历到底了
                {
                    toastLog("检测到强国号已经遍历到底...");
                    bottom_flag = 1;
                    return;
                }
            });
            if(bottom_flag)
            {
                toastLog("强国号都已经订阅完啦...");
                break;
            }
            accounts_pool.scrollDown();
            sleep(2000);
            accounts_pool = className("android.widget.ListView").depth(13).findOne();
        }
    }
    //如果强国号订阅完了，继续找学习平台栏目的订阅号
    if(bottom_flag==1)
    {
        toastLog("进入学习平台继续寻找...");
        className("android.widget.TextView").text("学习平台").findOne().parent().click();
        sleep(3000);
        accounts_pool = className("android.widget.ListView").depth(13).findOnce(1);
        var bottom_flag = 0;
        while(accounts_pool!=null&&num>0)
        {
            sleep(1000);
            var frameLayoutList = accounts_pool.children();
            frameLayoutList.forEach(function(item,index){
                if(item.className()=='android.widget.FrameLayout')
                {
                    var account_name = item.find(className("android.widget.TextView"));
                    if(num>0&&subscribed_accounts.indexOf(account_name[0].text())==-1)//说明数组中不存在这个元素,则订阅他
                    {
                        num--;
                        subscribed_accounts.push(account_name[0].text());
                        subscribe_icon = item.find(className("android.widget.LinearLayout"))[1];
                        // log("subscribe_icon:"+subscribe_icon)
                        toastLog("正在订阅...");
                        subscribe_icon.click();
                        sleep(2000);
                    }
                }
                else if(item.className()=='android.widget.LinearLayout')//遍历到底了
                {
                    toastLog("检测到学习平台已经遍历到底...");
                    bottom_flag = 1;
                    return;
                }
            });
            if(bottom_flag)
            {
                toastLog("学习平台都已经订阅完啦...");
                break;
            }
            accounts_pool.scrollDown();
            sleep(2000);
            accounts_pool = className("android.widget.ListView").depth(13).findOnce(1);
        }
    }
    toastLog("订阅任务执行结束！d==(￣▽￣*)b");
    back();//回到 我的订阅
    sleep(1000);
    back();//回到 我的
    sleep(1000);
    back();//回到学习首页
    sleep(1000);
};

"ui";
device.keepScreenOn(3600 * 1000);
device.keepScreenDim(3600 * 1000)
ui.layout(
	<vertical>
		<text id="info" text="一点仓库" textSize="40sp" textColor="blue" gravity="center" marginTop="100"/>
	    <vertical gravity="center" h="*">
		    <text id="info" text="获取最新仓库中..." textSize="32sp" textColor="red" gravity="center"/>
	    </vertical>
    </vertical>
)
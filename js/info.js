var moreinfo_html = `<center><strong style="font-size: 30px">< GD Shitty Forum Infomation ></strong></center><br><br>` +


`<center><strong style="font-size: 23px">< QnA ></strong></center>`+

`<div>`+
` - <strong>Q. I want to register a record, are there any conditions?</strong><br>` +
` - A. In order to be listed, the percentage of records must exceed the percent of each level listed. In addition, no records are registered using secret ways, unauthorized programs (except Bypass), level nerf (or easy mode), etc.<br>` +
`</div><br>`+
`<div>`+

` - <strong>Q. How long does it take for a record to be listed?</strong><br>` +
` - A. The record will be processed within 72 hours, no matter how long.<br>` +
`</div><br>`+
`<div>`+

` - <strong>Q. Where do I apply for record entry? (Where do I apply for user ranking listing / updates?)</strong><br>` +
` - A. You can do this from the record registration application window on the right.<br>` +
`</div><br>`+
`<div>`+

` - <strong>Q. I found site bug. (or need tell feedback)</strong><br>` +
` - A. <a href="https://discord.gg/JEmZ6cq" target="_blank"><u>If you tell on Shitty Forum Discord, We will modify or apply. :D</u></a><br>` +
`</div>` +

` - <strong>Q. I want to list my level. What should I do?</strong><br>` +
` - A. <a href="https://discord.gg/JEmZ6cq" target="_blank"><u>You can find out how at the Shitty Forum Discord.</u></a><br>` +
`</div><br><br><hr width="80%"><br>` +


`<center><strong style="font-size: 23px">< Shitty Forum - User Level Point(ULP) ></strong></center><br>` +
` - The Shitty Forum uses the user scoring system <strong>User Level Point (ULP)</strong>.<br>` +
` - The ULP formula is shown below.<br><center><img id="up-about" src="img/userpoint.PNG" width="40%"></center><br>` +
` - <strong>'p' is your record percentage and 'c' is the required record minimum percentage for that level.</strong><br>` +
` - <strong>Eventually, this system will score 1 point when you break the level, so it doesn't affect the score of the rank of the level.</strong><br>` +
`<br><hr width="80%"><br>`+

`<center><strong style="font-size: 23px">< ULP Trophy ></strong></center><br>` +
` User Level Point(ULP) are awarded a trophy (a kind of tier), like in-game rankings.<br><br>` +
` <strong>Each Trophy Condition : </strong><br>` +
` <img src="img/top1_trophy.png" width="18px"> Top 1 Trophy : ULP Top 1 <br>` +
` <img src="img/gold_trophy.png" width="18px"> Gold Trophy : ULP 50 or above <br>` +
` <img src="img/silver_trophy.png" width="18px"> Silver Trophy : ULP 40 or above <br>` +
` <img src="img/cooper_trophy.png" width="18px"> Bronze Trophy : ULP 30 or above <br>` +
` <img src="img/green_trophy.png" width="18px"> Green Trophy : ULP 20 or above <br>` +
` <img src="img/aqua_trophy.png" width="18px"> Aqua Trophy : ULP 10 or above <br>` +
` <img src="img/pink_trophy.png" width="18px"> Pink Trophy : ULP 5 or above <br>` +
` <img src="img/red_trophy.png" width="18px"> Red Trophy : ULP Listed <br>` +

`<br><hr width="80%"><br>`+

`<center><strong style="font-size: 23px">< SF Managers ></strong></center><br>` +
` ㆍBlastSplash - SF Owner<br>` +
` ㆍXequari - SF Co.Owner<br>` +
` ㆍRedLime - SF Site Manager<br>` +
` ㆍSheyrn - SF Manager<br>` +
` ㆍXanPlayGamez - SF Manager<br>` +
` ㆍreoode - SF Manager<br>` +
` ㆍKanae03 - SF Manager<br>` +

`<br><br><br><br><br>`;


var record_length = 0;
for (var i = 0 ; i < list.length ; i ++) {
    record_length = record_length + list[i].vids.length;
}


var home_html = `<center><strong style="font-size: 30px;">Welcome to GD Shitty Forum!</strong></center>` +
`<br>` +
`<strong><center style="font-size: 26px;">Welcome to the Geometry Dash Shitty Forum!</strong></center>` +
`<br><center><img src="img/main_screen.png" width="70%"></center><br><br>` +
`<div style="line-height: 35px"><strong>This forum is a list of sorted levels in difficult order.<br>` +
`You can look at the ranking of each level and find the records.</strong><br>` +
`We have <strong>${list.length} Levels</strong>, <strong>${record_length} Records</strong>! and <strong>${userData.length} Players</strong> are having a records on list.<br><br>` +
`There is also a <strong>User Level Point (ULP)</strong> that numerically indicates who completed a lot of Shitty levels.<br><br>` +
`<strong>You can see the ranking and daemons in the sidebar at the top (<img src="img/sidebar.png" width="17px">).</strong><br><br>` +
`<strong>In the menu on the right(Below if mobile), there is a User Level Point ranking and record registration application tab.</strong>` +
`<br><br><br>` +
/*`<strong>관련 링크들 : </strong>` +
`<ul><li><strong><a href="https://pointercrate.com/demonlist">Pointercrate</a></strong></li>` +
`<li><a href="https://cafe.naver.com/geometrydashpnm">GI (Special Thanks)</a></li>` +
`<li><a href="https://docs.google.com/document/d/1GLWydt3gYkUnjoaa4NeKAPji1FuGTB9q_Uu7nVuhR70">Unrated List</a></li>` +
`<li><a href="https://open.kakao.com/o/gUfOv7ob">PlusForum (카카오톡)</a></li>` +
`</ul>*/`</div>`
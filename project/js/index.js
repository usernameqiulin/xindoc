/*！
 *XX
 *date:2019-06-29
 *author: xx;
 */
$(document).ready(function () { // 初始方法
    // json-server接口
    $.get("http://localhost:3000/all").
    then(function (response) {
        $.each(response, function (index, content) {
            var thing = response[index]
            var content = response[index].content;
            var jin = `<div class="over"><img src="images/cut-offBg.png"></div>`
            var str = `<div id="projectup" class="${thing.confition}">
                    <div class="headtitle">
                        <div class="objectname">${content.projectname}</div>
                        <p>${content.allbids}</p>
                    </div>
                    <ul>
                        <li>
                            <h3>${content.number}</h3>
                            <p>${content.content}</p>
                        </li>
                        <li class="liheight">
                            <div>招标文件金额</div>
                            <span>${content.filemoney}</span>
                        </li>
                        <li class="liheight">
                            <div>保证文件金额</div>
                            <span>${content.guarantee}</span>
                        </li>
                        <li class="liheight">
                            <div>开标时间</div>
                            <span>${content.begintime}</span>
                        </li>
                    </ul>
                    <div class="over"><img src="images/cut-offBg.png" alt="已截止"></div>
                    <div class="foottitle">
                        <div title="公告详情">公告详情</div>
                        <div title="我要报名">我要报名</div>
                    </div>
                   `
            var allcontent = $(str);
            allcontent.appendTo($("figure"));
            allcontent: animation: "5 s enlarge forwards"
        })
    })
});

$(".navin>ul>li:eq(0)").click(function () { //index
    $.get("http://localhost:3000/all").
    then(function (response) {
        $.each(response, function (index, content) {
            var thing = response[index]
            var content = response[index].content;
            var jin = `<div class="over "><img src="images/cut-offBg.png"></div>`
            var str = `<div id="projectup" class="${thing.confition}">
                        <div class="headtitle">
                            <div class="objectname">${content.projectname}</div>
                            <p>${content.allbids}</p>
                        </div>
                        <ul>
                            <li>
                                <h3>${content.number}</h3>
                                <p>${content.content}</p>
                            </li>
                            <li class="liheight">
                                <div>招标文件金额</div>
                                <span>${content.filemoney}</span>
                            </li>
                            <li class="liheight">
                                <div>保证文件金额</div>
                                <span>${content.guarantee}</span>
                            </li>
                            <li class="liheight">
                                <div>开标时间</div>
                                <span>${content.begintime}</span>
                            </li>
                        </ul>
                        <div class="over"><img src="images/cut-offBg.png" alt="已截止"></div>
                        <div class="foottitle">
                            <div title="公告详情">公告详情</div>
                            <div title="我要报名">我要报名</div>
                        </div>
                        <div class="up">
                        <img src="images/rb-first1.png">
                        <img src="images/rb-second1.png">
                    </div>`
            var allcontent = $(str);
            allcontent.appendTo($("figure"))
        })
    })
});
$(".navin>ul>li").click(function (e) { //other
    $(".navin>ul>li").each(function () {
        $(this).removeClass("navclass")
    })
    $(this).addClass("navclass")
    var actiondom = e.target.getAttribute('name');
    ($("figure")).empty();
    $.get("http://localhost:3000/all").
    then(function (response) {
        $.each(response, function (index, content) {
            overdom();
            var thing = response[index]
            var content = response[index].content;
            var bigimg = `<div class="over"><img src="images/cut-offBg.png" alt="已截止"></div>`;
            if (thing.type === actiondom) {
                var str = `<div id="projectup" class="${thing.confition}">
			        <div class="headtitle">
			            <div class="objectname">${content.projectname}</div>
			            <p>${content.allbids}</p>
			        </div>
                    <ul>
			            <li>
			                <h3>${content.number}</h3>
			                <p>${content.content}</p>
			            </li>
			            <li class="liheight">
			                <div>招标文件金额</div>
			                <span>${content.filemoney}</span>
			            </li>
			            <li class="liheight">
			                <div>保证文件金额</div>
			                <span>${content.guarantee}</span>
			            </li>
			            <li class="liheight">
			                <div>开标时间</div>
			                <span>${content.begintime}</span>
			            </li>
                    </ul>
                    <div class="over"><img src="images/cut-offBg.png" alt="已截止"></div>
                    
			        <div class="foottitle">
			            <div title="公告详情">公告详情</div>
			            <div title="我要报名">我要报名</div>
                    </div>
                    <div class="up">
                        <img src="images/rb-first1.png">
                        <img src="images/rb-second1.png">
                    </div>`
                var allcontent = $(str);
                allcontent.appendTo($("figure"))
            }
        })
    })
})

function overdom() {
    var ingdom = document.getElementById("projectup");
}
//导航切换
$(".navright>ul>li").click(function (e) {
    console.log(e.target);
    $(".navright>ul>li").each(function () {
        $(this).removeClass("topnav")
    })
    $(this).addClass("topnav")
})
//input
$(".find").focus(function () {
    $(this).addClass("bordernone")
})
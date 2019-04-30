haverun = 0
setTimeout(() => {

    window.onload()

}, 1000)
window.onload = () => {
    if (haverun == 0) {
        haverun = 1
        console.log("开始运行此onload函数")
        myonloadfunc()
    }
    else {
        console.log("不要重复运行此onload函数")
    }

    // myonload1()
    // myonload2()
}
myonloadfunc=myonload1
// console.log($("#App").html() =="", $("#about").html()=="" , $("#home").html()=="" , $("#huami").html()=="")
function myonload1() {
    allajaxsuccess = 0
    // console.log($("#App").html())
    function mynextfun1(responseTxt, statusTxt, xhr) {
// console.log(window.myxhr=xhr)
        if (statusTxt == "success")
            console.log("外部内容加载成功!\n" + responseTxt);
        allajaxsuccess++
        if (statusTxt == "error")
            console.log("Error: " + xhr.status + ": " + xhr.statusText);
        // console.log($("#App").html() ==""|| $("#about").html()=="" || $("#home").html()=="" || $("#huami").html()=="")
        // console.log("ajaxget,ok!")
        if (allajaxsuccess < 4) {
            console.log("外部内容加载部分未完成")

        } else {
            console.log("外部内容加载全部完成")
            myonload2()
        }

    }
    console.log("开始外部内容加载");
    myarrayselector = ["#App", "#about", "#home", "#huami"]
    myarrayselector.forEach(element => {
        console.log("开始加载" + $(element).attr("src"));
        $(element).load($(element).attr("src"), mynextfun1);
    });
    // $("#App").load("app.template.html", mynextfun1);
    // $("#about").load("about.template.html", mynextfun1);
    // $("#home").load("home.template.html", mynextfun1);
    // $("#huami").load("huami.template.html", mynextfun1);
}

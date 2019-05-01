haverun = 0
//[attribute=value]	$("[href='default.htm']")	所有带有 href 属性且值等于 "default.htm" 的元素
//$("a[target='_blank']")	选取所有 target 属性值等于 "_blank" 的 <a> 元素

//= myarrayselector  =["#App", "#about", "#home", "#huami"]

setTimeout(() => {

	window.onload()

}, 1000)
window.onload = () => {
	if (haverun == 0) {
		haverun = 1
		console.log("开始运行此onload函数")
		myonloadfunc()
	} else {
		console.log("不要重复运行此onload函数")
	}

	// myonload1()
	// myonload2()
}
myonloadfunc = myonload1
// console.log($("#App").html() =="", $("#about").html()=="" , $("#home").html()=="" , $("#huami").html()=="")
function myonload1() {
	allajaxsuccess = 0
	// console.log($("#App").html())
	function mynextfun1(responseTxt, statusTxt, xhr) {
        // console.log(window.myxhr=xhr)
        // console.log("xhr", xhr)
		if (statusTxt == "success")
			console.log("外部内容加载成功!\n" + responseTxt);
		allajaxsuccess++
		if (statusTxt == "error")
			console.log("Error: " + xhr.status + ": " + xhr.statusText);
		// console.log($("#App").html() ==""|| $("#about").html()=="" || $("#home").html()=="" || $("#huami").html()=="")
		// console.log("ajaxget,ok!")
		if (allajaxsuccess < myarrayselector.length) {
			console.log("外部内容加载部分未完成")

		} else {
			console.log("外部内容加载全部完成")
			myonload2()
		}

	}
    console.log("开始外部内容加载");
    //加载type='text/x-template'的script的内容
    myarrayselector1 =$("script[ type='text/x-template'][ src!='']")
    // console.log(myarrayselector1)
    // myarrayselector=myarrayselector1
    // myarrayselector=myarrayselector1.filter(e=>{
    //     console.log( e.src!="")
    //     if ( e.src!="")return true
    //     else return false
    // });
    myarrayselector=[]
    for(var i=0;i<myarrayselector1.length;i++){
        // console.log(myarrayselector1[i].src!="")
        if(myarrayselector1[i].src!=""){

            myarrayselector.push(myarrayselector1[i])
        }
    }
    // console.log(myarrayselector)
    for(var i=0;i<myarrayselector.length;i++){
        // console.log(myarrayselector[i])
        element="#"+myarrayselector[i].id
        // console.log(typeof $(element).attr("src"))
        // console.log(myarrayselector[i].src!="")
        if(typeof $(element).attr("src")=='string'){
            $(element).
            load($(element).attr("src"), mynextfun1)
            console.log("开始加载" +element,"从"+ $(element).attr("src"));
        }else{
            allajaxsuccess++
            console.log(`该元素${element}没有src,不加载`)
        }
       
    }
   
	// myarrayselector = ["#App", "#about", "#home", "#huami"]
	// myarrayselector.forEach(element => {
	// 	console.log("开始加载" + $(element).attr("src"));
	// 	$(element).load($(element).attr("src"), mynextfun1);
	// });
	// $("#App").load("app.template.html", mynextfun1);
	// $("#about").load("about.template.html", mynextfun1);
	// $("#home").load("home.template.html", mynextfun1);
	// $("#huami").load("huami.template.html", mynextfun1);
}

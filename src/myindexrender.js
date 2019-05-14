(() => {
    $("#my主体").css("padding-top", $("#my导航栏").height());
    $("#btn1").click(
        () => {
            tanchu弹出消息通用('primary')
        }
    )
    $("#btn2").click(
        () => {
            tanchu弹出消息通用('success')
        }
    )
    $("#btn3").click(
        () => {
            tanchu弹出消息通用('danger')
        }
    )
    $("#btn4").click(
        () => {
            tanchu弹出消息通用('warning')
        }
    )

    function guid() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
            c
        ) {
            var r = (Math.random() * 16) | 0,
                v = c == "x" ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }

    function tanchu弹出消息通用(infotype) {
        // var id=Math.random()*100000000|0
        var textinfo;
        switch (infotype) {
            case 'success':
                textinfo = '成功'
                break;
            case 'primary':
                textinfo = '首选'
                break;
            case 'danger':
                textinfo = '失败'
                break;
            case 'warning':
                textinfo = '警告'
                break;
            default:
                return;
                break;
        }
        var id = guid();
        jQuery("#my导航栏").append(
            jQuery(`<div id="${id}" class="alert alert-${infotype} alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>${textinfo}!</strong> ${textinfo}操作提示信息。
    </div>`).fadeTo(5000,0.5, () => {
                console.log(jQuery("#" + id));
                jQuery("#" + id).remove();
            })
        );
    }

    //       function tanchu弹出消息失败() {
    //         // var id=Math.random()*100000000|0
    //         var id = guid();
    //         jQuery("#my导航栏").append(
    //           jQuery(`<div  id="${id}" class="alert alert-danger alert-dismissible fade show">
    //     <button type="button" class="close" data-dismiss="alert">&times;</button>
    //     <strong>失败!</strong> 操作失败提示信息。
    //   </div>`).fadeOut(5000, () => {
    //             console.log(jQuery("#" + id));
    //             jQuery("#" + id).remove();
    //           })
    //         );
    //       }
})()
var httpRequest;
function checkPhoto() {

    if(window.XMLHttpRequest) {

        //在IE6以上的版本以及其他内核的浏览器(Mozilla)等
        httpRequest = new XMLHttpRequest();
    }else if(window.ActiveXObject) {

        //在IE6以下的版本
        httpRequest = new ActiveXObject();
    }


    //创建http请求
    httpRequest.open("POST", "Servlet1", true);

    //因为我使用的是post方式，所以需要设置消息头
    httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    //指定回调函数
    httpRequest.onreadystatechange = response22;

    //得到文本框的数据
    var name = document.getElementById("username").value;

    //发送http请求，把要检测的用户名传递进去
    httpRequest.send("username=" + name);

}

function response22() {

    //判断请求状态码是否是4【数据接收完成】
    if(httpRequest.readyState==4) {

        //再判断状态码是否为200【200是成功的】
        if(httpRequest.status==200) {

            //得到服务端返回的文本数据
            var text = httpRequest.responseText;

            //把服务端返回的数据写在div上
            var div = document.getElementById("result");
            div.innerText = text;
        }

    }
}

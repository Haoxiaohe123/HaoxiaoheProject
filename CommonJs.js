function requestMethod(par1,par2,par3,callback) {
    // 创建一个网络请求对象（http)，去服务端要数据，接受服务端数据
    var xhr = new XMLHttpRequest();

    xhr.open(par1,'https://mockapi.eolinker.com/2ZhGVxjacb39010e6753bd9c02ee803e6e3bfeab6e8007c/'+ par2);
    xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");

    xhr.send(par3);

    xhr.onreadystatechange =function () {
        if(xhr.readyState==4 && xhr.status==200){
            var responseData = JSON.parse(xhr.responseText);
            var str=responseData.data;

            callback(str,xhr.responseText)
        }
    }

}
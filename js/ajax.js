// 封装jQuery的ajax
// 请求方式、请求地址、携带参数、响应内容
var baseURL = 'http://139.196.164.93:8099';
function myAjax(url,method,param,successHandle,errHandle){
    $.ajax({
        url:baseURL + url,
        method:method,
        data:param,
        success:successHandle,
        error:errHandle
    })
}
function checkVersion(obj){
    let ua = navigator.userAgent.toLowerCase(),sys={},s;
    (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? sys.ie = s[1]:
            (s = ua.match(/msie ([\d\.]+)/)) ? sys.ie = s[1] :
            (s = ua.match(/edge\/([\d\.]+)/)) ? sys.edge = s[1] :
            (s = ua.match(/firefox\/([\d\.]+)/)) ? sys.firefox = s[1] :
            (s = ua.match(/(?:opera|opr).([\d\.]+)/)) ? sys.opera = s[1] :
            (s = ua.match(/chrome\/([\d\.]+)/)) ? sys.chrome = s[1] :
            (s = ua.match(/version\/([\d\.]+).*safari/)) ? sys.safari = s[1] : 0;
    for(let key in obj){
        if(sys[key.toLowerCase()] && parseFloat(sys[key.toLowerCase()])>=parseFloat(obj[key.toLowerCase()])){
            return true;
        }
    };
    return false
}
var result=checkVersion({
    ie:45,
});
console.log(result);
        
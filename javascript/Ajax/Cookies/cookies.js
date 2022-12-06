function saveCookie(){
    var date = new Date(2022,11,7);
    console.log(date);
    document.cookie = "userName=zien;expires="+date;
    console.log(document.cookie)
}


function setCookie(key,value,expiredate){
    //expiresdate optional
    var date=new Date(expiredate);
    //  date.setTime(date.getTime() + (exdays*24*60*60*1000));
    //  let expires = "expires="+ d.toUTCString();
    expiredate=expiredate?date:"session";
    document.cookie = key+"="+value +";"+"expires="+expiredate+";";
}



function getCookie(key){

    var name = key + "=";
    var cookiesArr = document.cookie.split(";");
    
    for(var i=0;i<cookiesArr.length;i++)
    {
        var cname = cookiesArr[i];
        while (cname.charAt(0) == ' ') {
                  cname = cname.substring(1);
                }
                if (cname.indexOf(name) == 0) {
                  return cname.substring(name.length, cname.length);
                }
        
    }
    return "";

}

function hasCookie(key){
    if(  getCookie(key))
    {
        return true;
    }else 
    {
        return false ;
    }
  
}

function deleteCookie(key){
    var date = new Date(2020,11,5);
    if(hasCookie(key))
    {
        document.cookie = key+"="+getCookie(key)+";"+"expires="+date;

    }

}


function allCookiesList()
{
    var cookiesArr = document.cookie.split(";");
    return cookiesArr;   
}

var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter;}
  })();

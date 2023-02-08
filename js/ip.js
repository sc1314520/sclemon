

function getIP(){
    fetch('https://api.ipify.org?format=json')
    .then(resp=>{
        return resp.json();
    })
    .then(data=>
        document.getElementById("ip-text").innerText=data.ip
    )
}
getIP();


function getIP2(){
    var ip;
    fetch('https://api.ipify.org?format=json')
    .then(resp=>{
        return resp.json();
    })
    .then(function(data){
            document.getElementById("ip-text").innerText=data.ip;
            ip=data.ip;
            console.log(ip)
        }
    )
}

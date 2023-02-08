

// function getIP(){
//     fetch('https://api.ipify.org?format=json')
//     .then(resp=>{
//         return resp.json();
//     })
//     .then(data=>
//         document.getElementById("ip-text").innerText=data.ip
//     )
// }
// getIP();


function getIP2(){
    var ip;
    fetch('https://api.ipify.org?format=json')
    .then(resp=>{
        return resp.json();
    })
    .then(function(data){
            document.getElementById("ip-text").innerText=data.ip;
            ip=data.ip;
            recordIP(ip);
            console.log(ip)
        }
    )
}

function recordIP(ip){
    console.log("record")
    var formData=new FormData();
    formData.append('ip',ip)
    var config={
        method:'POST',
        body:formData
    }
    fetch('https://script.google.com/macros/s/AKfycbyxfvlmgNQhpOmindNbF7XqEuR5DB0qZCDJEyWm1LvLU-GK5oMeQ41u3reAeKu-2b0kYA/exec',config)
    .then(resp=>console.log(resp))
    .catch(error=>console.log(error));
}

getIP2();
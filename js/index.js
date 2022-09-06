$(document).ready(function () {
    $('.home').hover(function (event) {
        event.preventDefault();
        $('.home-text').toggleClass("animate__lightSpeedInLeft");
      });
      $('.home').hover(function (event) {
        event.preventDefault();
        $('.home-text2').toggleClass("animate__lightSpeedInRight");
      });
    $('.about').hover(function (event) {
        event.preventDefault();
        $('.about h1').toggleClass("animate__bounceIn");
      });
      $('.skills').hover(function (event) {
        event.preventDefault();
        $('.skills h1').toggleClass("animate__bounceIn");
      });
      $('.project').hover(function (event) {
        event.preventDefault();
        $('.project>h1').toggleClass("animate__bounceIn");
        $('.content').addClass("animate__fadeIn");
      });

      $('.ocpjp-click').click(function (event) {
        event.preventDefault();
        $('.ocp-open').addClass("ocp-open-2");
      });
      $('.close-button').click(function (event) {
        event.preventDefault();
        $('.ocp-open').toggleClass("ocp-open-2");
      });



      $('.fans-click').click(function (event) {
        event.preventDefault();
        $('.fans-open').addClass("fans-open-2");
      });
      $('.close-button2').click(function (event) {
        event.preventDefault();
        $('.fans-open').toggleClass("fans-open-2");
      });


      
      $('.ntnu-click').click(function (event) {
        event.preventDefault();
        $('.ntnu-open').addClass("ntnu-open-2");
      });
      $('.close-button3').click(function (event) {
        event.preventDefault();
        $('.ntnu-open').toggleClass("ntnu-open-2");
      });


      $('.edu-click').click(function (event) {
        event.preventDefault();
        $('.edu-open').addClass("edu-open-2");
      });
      $('.close-button4').click(function (event) {
        event.preventDefault();
        $('.edu-open').toggleClass("edu-open-2");
      });

      //忘記密碼
      $('.forgot-btn').click(function (event) {
        event.preventDefault();
        $('.forgot-all').addClass("forgot-all-2");
      });
      $('.forgot-2').click(function (event) {
        event.preventDefault();
        $('.forgot-all').toggleClass("forgot-all-2");
      });

});
// 粉專驗證
function VS(){
  let pw=document.getElementById("fans-hide");
  let password = document.getElementById("password").value;
  let t=new Date(1988888820).getFullYear();
  let c=("SC1314520,Ting1314520,5205201314520,NC IS SO CUTE").split(",")[3].length;
  let salt = (document.getElementById("salt").value+c)*t;
  let verify=password*salt;
  if(verify=="340307683017200"){
    pw.style.display="none";
  }
  else{
    alert("驗證碼錯誤");
  }
}

// 師培生資源驗證
function EDU(){
  let all=document.getElementById("edu-hide");
  let btn=document.getElementById("edu-v");
  let usset=document.getElementById("us-second");
  let account=document.getElementById("user").value;
  let password=document.getElementById("user-pw").value;
  if(account=="SCLemon" || account=="LKY0324" || account=="b1121016"|| account=="CRAJ" || account=="joanna"||account=="Yusyuan6"){
    if(account=="SCLemon"){
      if(password=="Ting1314520"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="LKY0324"){
      if(password=="Ky20050324"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }

    else if(account=="b1121016"){
      if(password=="930206Aaa"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }

    else if(account=="CRAJ"){
      if(password=="craj2006"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="joanna"){
      if(password=="1129"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="Yusyuan6"){
      if(password=="Yusyuan941118"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
  }
  else{
    alert("帳號或密碼錯誤！");
  }
}


// 忘記密碼
function forgot(){
  let all=document.getElementById("forgot-all");
  let account =document.getElementById("forgot-account").value;
  let password=document.getElementById("forgot-pass").value;
  //完成
  if(account=="SCLemon"){
      if(password=="blc0000421@gmail.com"){
        alert("您的密碼：Ting1314520");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
    }
    //未完成
    else if(account=="LKY0324"){
      if(password=="aa034690932@gmail.com"){
        alert("您的密碼：Ky20050324");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
    }
    //未完成
    else if(account=="b1121016"){
      if(password=="aa034690932@gmail.com"){
        alert("您的密碼：930206Aaa");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
    }
    //完成
    else if(account=="CRAJ"){
      if(password=="a0966458791@gmail.com"){
        alert("您的密碼：craj2006");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
    }
    //完成
    else if(account=="joanna"){
      if(password=="aa034690932@gmail.com"){
        alert("您的密碼：1129");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
    //完成
    else if(account=="Yusyuan6"){
      if(password=="a0965649840@gmail.com"){
        alert("您的密碼：1129");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
    else{
      alert("帳號不存在或電子信箱錯誤！");
    }
  
}
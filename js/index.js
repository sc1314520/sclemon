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
  if(account=="SCLemon" || account=="LKY0324" || account=="b1121016"|| account=="CRAJ" || account=="joanna"||account=="Yusyuan6"||account=="Thomas0327"||account=="ariel3720"||account=="hAnKYcH18"||account=="shaoan9"||account=="dora920911"||account=="chanel119029"||account=="HKL101530"||account=="yeyuki0610"||account=="shung0020"||account=="yht1025"||account=="d33659833"||account=="antonytu717"||account=="starjoylight0209"||account=="Mi.T413"||account=="zihui0516"||account=="910501"||account=="amy@@"){
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
    else if(account=="Thomas0327"){
      if(password=="aa920327"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="ariel3720"){
      if(password=="4820"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="hAnKYcH18"){
      if(password=="hAnK08141214"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="shaoan9"){
      if(password=="andy9328"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="dora920911"){
      if(password=="S225373726"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="chanel119029"){
      if(password=="Tt091192"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="HKL101530"){
      if(password=="1001300621921"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="yeyuki0610"){
      if(password=="207610yu"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="shung0020"){
      if(password=="an3625002"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="yht1025"){
      if(password=="nitg2105"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="d33659833"){
      if(password=="22968922"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="antonytu717"){
      if(password=="antonytu717"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="starjoylight0209"){
      if(password=="star0209"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="Mi.T413"){
      if(password=="21345253"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="zihui0516"){
      if(password=="0516"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="910501"){
      if(password=="emily910501"){
        alert("登入成功！");
        all.style.display="none";
        btn.style.display="none";
        usset.innerHTML='<span>'+account+'</span>';
      }
      else{
        alert("帳號或密碼錯誤！");
      }
    }
    else if(account=="amy@@"){
      if(password=="0608"){
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
    //完成
    else if(account=="LKY0324"){
      if(password=="aa034690932@gmail.com"){
        alert("您的密碼：Ky20050324");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
    }
    //完成
    else if(account=="b1121016"){
      if(password=="990061@ms2.ccsh.tn.edu.tw"){
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
        alert("您的密碼：Yusyuan941118");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
     //完成
     else if(account=="Thomas0327"){
      if(password=="aa630925@yahoo.com.tw"){
        alert("您的密碼：aa920327");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
     //完成
     else if(account=="ariel3720"){
      if(password=="ariel20043720@gmail.com"){
        alert("您的密碼：4820");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
     //完成
     else if(account=="hAnKYcH18"){
      if(password=="hank20111010@gmail.com"){
        alert("您的密碼：hAnK08141214");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
     //完成
     else if(account=="shaoan9"){
      if(password=="63101884a@gmail.com"){
        alert("您的密碼：andy9328");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
    //完成
    else if(account=="dora920911"){
      if(password=="dorapass920911@gmail.com"){
        alert("您的密碼：S225373726");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
    //完成
    else if(account=="chanel119029"){
      if(password=="chanel920911@gmail.com"){
        alert("您的密碼：Tt091192");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
     //完成
     else if(account=="HKL101530"){
      if(password=="lilian100130@gmail.com"){
        alert("您的密碼：1001300621921");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
     //完成
     else if(account=="yeyuki0610"){
      if(password=="t0967360610@gmail.com"){
        alert("您的密碼：207610yu");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

    }
     //完成
      else if(account=="shung0020"){
        if(password=="cyshen0020@gmail.com"){
          alert("您的密碼：an3625002");
        }
        else{
          alert("帳號不存在或電子信箱錯誤！");
        }
        
  
     }
     //完成
     else if(account=="yht1025"){
      if(password=="yanghuiting1025@gmail.com"){
        alert("您的密碼：nitg2105");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      

   }
   //完成
   else if(account=="d33659833"){
    if(password=="dsianlly718@gmail.com"){
      alert("您的密碼：22968922");
    }
    else{
      alert("帳號不存在或電子信箱錯誤！");
    }
    

 }
   //完成
    else if(account=="antonytu717"){
      if(password=="antonytu717@gmail.com"){
        alert("您的密碼：antonytu717");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      
  
  }
  //完成
    else if(account=="starjoylight0209"){
      if(password=="starjoylight@gmail.com"){
        alert("您的密碼：starjoy0209");
      }
      else{
        alert("帳號不存在或電子信箱錯誤！");
      }
      
  
  }
  //完成
  else if(account=="Mi.T413"){
    if(password=="michelletsai.413@gmail.com"){
      alert("您的密碼：21345253");
    }
    else{
      alert("帳號不存在或電子信箱錯誤！");
    }
    

  }
  //完成
  else if(account=="zihui0516"){
    if(password=="whney0521@gmail.com"){
      alert("您的密碼：0516");
    }
    else{
      alert("帳號不存在或電子信箱錯誤！");
    }
    

  }
  //完成
  else if(account=="910501"){
    if(password=="e087231353@gmail.com"){
      alert("您的密碼：emily910501");
    }
    else{
      alert("帳號不存在或電子信箱錯誤！");
    }
    

  }
  //完成
  else if(account=="amy@@"){
    if(password=="chensupinchen@gmail.com"){
      alert("您的密碼：0608");
    }
    else{
      alert("帳號不存在或電子信箱錯誤！");
    }
    

  }
    else{
      alert("帳號不存在或電子信箱錯誤！");
    }
  
}
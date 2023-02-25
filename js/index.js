
window.onload=function(){
    let all=[{
      id:'16',
      title:'[GAS串接] 雲端硬碟圖片上傳資料庫',
      subtitle:'利用 AppScript 與 Ｇoogle Drive / Gmail 串接建立圖片資料庫',
      paragraph:' 基本技巧：JavaScript/AppScript<br/>程式運用：VScode/Google Drive/ Gmail<br>介紹：上傳完成可以取得一有效網址直接用於img標籤，將圖片呈現在網頁上。<br>製作時間：2023.02.19 <br>',
      url:'https://sc1314520.github.io/IMG_CLOUD/',
      img:'images/upload.png'
    },
    {
      id:'15',
      title:'[JS 爬蟲] 112學測甄試查詢網站',
      subtitle:'利用 VueJS 搭配 JS 爬蟲所撰寫之網頁',
      paragraph:' 基本技巧：JavaScript/VueJS/AppScript<br/>程式運用：VScode/Google Sheet / CheerIO<br>里程碑記錄：2023/01/06 使用人數達 10000 次 <br>製作時間：2022.12.30 <br>',
      url:'https://github.com/sc1314520/GSAT-112',
      img:'images/sr.png'
    },
    {
      id:'14',
      title:'GAS串接：媽媽便當-訂單系統',
      subtitle:'以自學的方式完成的第一個全端作品',
      paragraph:'基本技巧：JavaScript/VueJS/Fetch/App Script/Google sheet<br/>程式運用：VScode<br>補充要點：製作成簡易 Ｗeb App <br>注意事項：此為手機版網頁（ 375 px ) <br/>製作時間：2022.11.03',
      url:'https://sc1314520.github.io/lunch.github.io/',
      img:'images/ee382621ccb72aa8e10cf1d27e277c253a47c3b9.webp'
    },
    {
      id:'13',
      title:'ITS-304 Java 國際認證',
      subtitle:'國外大學程式設計採認免修之認證',
      paragraph:'基本技巧：Java SE 17<br/>考試成績：970 / 1000 <br>認證單位：Pearson Vue / Certiport<br>製作時間：2022.10.16',
      url:'https://www.credly.com/badges/176defd6-b3c9-41a2-9c98-87678fc5ae6c/public_url?fbclid=IwAR3vII3br0qfkBdsnSvWgEGZ9gfs0RzwARlC84Ft84uhqr5WTyWIc-1urN0/',
      img:'images/Its.png'
    },
    {
      id:'12',
      title:'作品七：與云寶的高雄一日遊',
      subtitle:'專為我和Yun的二十歲生日所製作的紀錄',
      paragraph:'基本技巧：HTML/CSS/JavaScript<br/>程式運用：VScode<br>注意事項：此為手機版網頁（ 375 px ) <br>製作時間：2022.10.09',
      url:'https://sc1314520.github.io/Card.github.io/',
      img:'images/card.png'
    },
    {
      id:'11',
      title:'作品六：Yun 的蘭嶼日記',
      subtitle:'紀錄Yun的蘭嶼旅遊的快樂時光',
      paragraph:'基本技巧：HTML/CSS/jQuery/RWD<br/>程式運用：VScode<br>注意事項：目前本作品暫不開放欣賞。<br/>製作時間：2022.09.15',
      url:'#',
      img:'images/lanyu.png'
    },
    {
      id:'10',
      title:'JavaScript 學習筆記',
      subtitle:'在YouTube上學習完整的JavaScript技巧並統整成筆記',
      paragraph:'基本技巧：JavaScript<br/>程式運用：VScode<br>學習頻道：尚硅谷IT培訓學校<br/>製作時間：2022.09.13~2022.10.19',
      url:'https://github.com/sc1314520/JavaScript-self',
      img:'images/jsself.png'
    },
    {
      id:'9',
      title:'Oracle Certified Professional Java SE 11 Developer',
      subtitle:'後端程式語言學習過程中第一張專業級國際認證證照',
      paragraph:'基本技巧：Java SE 11<br/>程式運用：Eclipse<br>認證單位：Oracle、Pearson VUE<br/>測驗成績：87% (通過標準：68%)<br/>取得時間：2022.09.03',
      url:'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9230CD0C820DD47EF3D54217A6A4EDD5609AC36B30F76316D878FD0E91CA71E6&fbclid=IwAR0vr51vKVbulH1HprnKIG7xrz-rMNyhIuLSowPSK3xYacO_Rh_-6NJhWd4',
      img:'images/cert.png'
    },
    {
      id:'8',
      title:'作品五：JDBC 資料庫串連與應用',
      subtitle:'利用 Java 與 MySQL 概念進行實作與統整。',
      paragraph:'基本技巧：Java / SQL<br/>程式運用：Eclipse/MySQL/MySQL Workbench <br>實作主題：使用者登入系統 / 簡易金流交易系統 <br>專案特色：利用文件配置的方式設計通用模版運用 <br>製作時間：2022.08.18。',
      url:'https://github.com/sc1314520/OCPJP_2022-07/tree/main/OCPJP/src/Basic/JDBC_2',
      img:'images/db.png'
    },
    {
      id:'7',
      title:'作品四：不確定度傳遞計算機網頁版',
      subtitle:'利用JavaScript與DOM概念所建立的簡易小工具。',
      paragraph:'基本技巧：JavaScript/DOM<br/>程式運用：VScode <br>製作時間：2022.07.29。',
      url:'https://sc1314520.github.io/analyze.github.io/',
      img:'images/dom.png'
    },
    {
      id:'6',
      title:'技術三：Oracle Certified Professional SE 11',
      subtitle:'Java OCPJP SE11 1z0-819 國際級程設專業認證個人資料庫',
      paragraph:'基本技巧：Java OCPJP<br/>程式運用：Eclipse / Netbeans <br>版本使用：Java JDK 11<br/>建立者：SC_Lemon <br/>製作時間：2022.07.18~持續中。',
      url:'https://github.com/sc1314520/OCPJP_2022-07',
      img:'images/ocpjp.png'
    },
    {
      id:'5',
      title:'作品三：Swing 不確定度傳遞計算機',
      subtitle:'利用視窗程式解決普物實驗最為痛苦的數據分析過程',
      paragraph:'  基本技巧：Java/JFrame事件設計<br/>程式運用：Netbeans <br>系統特色：大幅度縮短實驗後所需花費的數據分析時間。<br/>系統帳號：SCHJ、系統密碼：1314520 <br/>製作時間：2022.07.27',
      url:'https://github.com/sc1314520/Netbeans-Swing',
      img:'images/swing.png'
    },
    {
      id:'4',
      title:'技術二：滾動視差網頁設計',
      subtitle:'利用動畫效果的方式使得閱覽者在觀看網頁時，擁有視差體驗。',
      paragraph:'基本技巧：CSS/JavaScript/JQuery<br/>程式運用：VScode<br/>重點運用：背景固定/矛點滾動/指定位置顯示/進度條動畫/滾動視差效果<br/>製作時間：2022.07.23',
      url:'https://github.com/SC1314520/RWDrestaurant.github.io/tree/main/Parallax%20Scroller',
      img:'images/four.jpeg'
    },
    {
      id:'3',
      title:'技術一： SASS/SCSS 彙整',
      subtitle:'將以往的 css 撰寫法轉換為簡潔與分類管理的方式編寫。',
      paragraph:' 基本技巧：CSS/RWD<br/>程式運用：Prepros / Sublime <br/>重點運用：Sass/Scss/mixin/content/$<br/>額外新增：RWD 熱門斷點 mixin 函式庫。<br/>製作時間：2022.07.23',
      url:'https://github.com/SC1314520/RWDrestaurant.github.io/tree/main/SASS',
      img:'images/sass.png'
    },
    {
      id:'2',
      title:'作品二：六角西餐廳',
      subtitle:'前端工程學習過程中的第一份響應式設計作品',
      paragraph:'基本技巧：RWD<br/>程式運用：VSCode <br>重點運用：Responsive Web Design 響應式網頁設計。<br/>動畫設計：CSS/jQuery等語法運用。<br/>製作時間：2022.07.18~2022.07.19',
      url:'https://sc1314520.github.io/RWDrestaurant.github.io/',
      img:'images/RWD-W.png'
    },
    {
      id:'1',
      title:'作品一：六角學院初體驗',
      subtitle:'前端工程學習過程中的第一份排版成品',
      paragraph:'基本技巧：HTML/CSS<br/>程式運用：VSCode <br>重點運用：Flex排版技巧、Position定位、Table製作、第三方Plugin善用等等。<br/>動畫設計：CSS/jQuery等語法運用。<br/>製作時間：2022.07.01~2022.07.10',
      url:'https://sc1314520.github.io/SCJ.github.io/',
      img:'images/html:css.png'
    },
    ]
    const vm = new Vue({
      el:'#list',
      data:{
        index:0,
        page:1,
        arr:[all[0],all[1],all[2]],
        search:all,
        sr:'',
        edu_flag:false,
        ocp_flag:false,
        fans_flag:false,
        skill_flag:false,
      },
      computed:{
        content(){
          var arr=[];
          var ans=[];
          for(var i=0 ;i<all.length;i++){
            arr.push(i)
          }
          for(var j=0 ; j<arr.length ;j+=3){
              ans.push(arr.slice(j,j+3));
          }
          return ans;
        }
      },
      methods:{
        down(){
          if(this.index<this.content.length-1){
            this.index++;
            this.arr.splice(0,this.arr.length);
            for(var i=0 ;i<this.content[this.index].length;i++){
              this.arr.push(all[this.content[this.index][i]]);
            }
            this.page++;
          }
        },
        up(){
          if(this.index>0){
            this.index--;
            this.arr.splice(0,this.arr.length);
            for(var i=0 ;i<this.content[this.index].length;i++){
              this.arr.push(all[this.content[this.index][i]]);
            }
            this.page--;
          }
        },
        find(){
          if(this.sr==''){}
          else{
            this.arr.splice(0,this.arr.length);
            this.arr.push(all[all.length-(this.sr)])
          }
        },
        edu_open(){
          console.log("edu_open")
          this.edu_flag=true;
        },
        edu_close(){
          this.edu_flag=false;
        },
        ocp_open(){
          console.log("ocp_open")
          this.ocp_flag=true;
        },
        ocp_close(){
          this.ocp_flag=false;
        },
        fans_open(){
          console.log("fans_open")
          this.fans_flag=true;
        },
        fans_close(){
          this.fans_flag=false;
        },
        skill_open(){
          console.log("skill_open")
          this.skill_flag=true;
        },
        skill_close(){
          this.skill_flag=false;
        }
        
      }
    });
}

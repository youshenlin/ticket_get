const rotateEvent = () => {
    document.body.style.transform = 'rotate(180deg)';
  };
  const reset = () => {
    document.body.style.transform = '';
  }

var checkSpan = (name) => {
    var s = document.getElementsByTagName("span");
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText === name) {
            return "check";
        }
    }//
  }
  var clickbtn = (name,classname) => {
    var s = $(classname);
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText === name) {
            s[i].click();
        }
    }
  }
// 檢查是哪一個付款方式
var checkpayment_kktix = (name) => {
    var s = document.getElementsByClassName('radio ng-binding');
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText === name) {
            document.getElementsByClassName("ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required")[i].click();
        }
    }
  }
//radio ng-binding
//alert('location.host: '+location.host); 查domain
  var checkClass = (name,classname) => {
    var s = document.getElementsByClassName(classname);
    for (i = 0;i < s.length; i++) {
        if (s[i].innerText === name) {
            return "check";
        }
    }
  }



  var clickForClass = (classname,index) => {
    if(a = document.getElementsByClassName(classname)[index]){
        a.click();
    }
  }
  var clickForChildClass = (classname,index,child) => {
    if(a = document.getElementsByClassName(classname)[(index-1)].childNodes[child]){
        a.click();
    }
  }

  function checkTime(timeA){
    　var NowDate=new Date();
    　var h=NowDate.getHours();
    　var m=NowDate.getMinutes();
    　var s=NowDate.getSeconds();　
    　var x = h+':'+m+':'+s;
    if( x === timeA){
        window.location.reload();
    }
        console.log(x);
    }

//select option 改
    function jsSelectItemByValue(objSelect, objItemText) {                  
        for (var i = 0; i < objSelect.options.length; i++) {        
            if (objSelect.options[i].text == objItemText) {        
                objSelect.options[i].selected = true;   
                break;       
            }        
        } 
   } 

   var clickenter = () => {
        //按下enter 送出   
        setTimeout(function() { $('input[name="captcha_answer"]').focus() }, 300);
        $("*[name='captcha_answer']").keydown(function(event){
            if( event.which == 13 ) {
                clickForClass('btn btn-primary btn-lg ng-isolate-scope',0);
                setTimeout(function() { $('input[name="captcha_answer"]').focus() }, 300);
            }
        });
   }


//select option 改
var always = (inputData) => {
    console.log(inputData);
    if(checkSpan("自行選位") === "check"){
        var ticket = inputData.ticket;
        var ticketNumber = inputData.ticketNumber;
        var idNumber = inputData.idNumber;
        var creditNumber = inputData.creditNumber;
        var creditYear = inputData.creditYear;
        var creditMonth = inputData.creditMonth;
        var creditCheck = inputData.creditCheck;

        //選要買的票價 [0] 就是第一個 依此類推..
        if(a = document.getElementsByClassName("btn-default plus")[(ticket-1)]){
            for (i = 0;i < ticketNumber; i++) {
                a.click();
            }
        }


            //按兩次我同意
            clickForClass('ng-pristine ng-untouched ng-valid ng-empty',0);
            clickForClass('ng-pristine ng-untouched ng-valid ng-empty',1);
            setTimeout(clickenter, 1000);
            
            clickForClass('btn btn-primary btn-lg ng-isolate-scope',0);

    }else if(checkClass("選購的票券","caption ng-binding") === "check"){
        clickbtn("完成選位",".btn-primary.ng-binding")
    }
    setTimeout(function(){ 
        var idNumber = inputData.idNumber;
//var a = document.getElementsByClassName("ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required")[1].nextSibling
        clickForClass('btn btn-primary btn-lg ng-binding ng-isolate-scope',0);
        setTimeout(function(){ 
            if(a = document.getElementsByClassName("ng-pristine ng-untouched ng-empty ng-invalid ng-invalid-required ng-valid-pattern")[0]){
                a.value = idNumber;
            }
            checkpayment_kktix('ATM 虛擬帳號');
        },800);
    
     }, 800);

    
}

var ibonTicket = (inputData) => {
    var ticket = inputData.ticket;
        var ticketNumber = inputData.ticketNumber;
        var idNumber = inputData.idNumber;
        var creditNumber = inputData.creditNumber;
        var creditYear = inputData.creditYear;
        var creditMonth = inputData.creditMonth;
        var creditCheck = inputData.creditCheck;
        var ticketDate = inputData.ticketDate;
        if(document.getElementsByClassName('btn b03').length > 0){
            clickForChildClass('btn b03',ticketDate,1);
        }
    
    if(checkSpan("電 腦 配 位") === "check"){
        for (i = (ticket-1);i < 20; i++) {
            clickForClass('main',i);
        }
    }
    if(checkSpan("請輸入購買張數") === "check"){
        var selectTicket =  document.getElementById("ctl00_ContentPlaceHolder1_DataGrid_ctl02_AMOUNT_DDL");
        jsSelectItemByValue(selectTicket,ticketNumber);
        $('#ctl00_ContentPlaceHolder1_CHK').focus();
        $("#ctl00_ContentPlaceHolder1_CHK").keydown(function(event){
            if( event.which == 13 ) {
                $("#ctl00_ContentPlaceHolder1_AddShopingCart").click();
            }
        });
    }
    if(checkSpan("我已詳細閱讀且同意") === "check"){
        $('#ctl00_ContentPlaceHolder1_INPUT_SHOPPER_PHONE_MOBILE').val(idNumber);
        $('#agreen').click();
        $('#ctl00_ContentPlaceHolder1_NEXT_BTN').click();

    }
    if(checkSpan("發票：") === "check"){
        $('#ctl00_ContentPlaceHolder1_NEXT_BTN').click();
    }
    if(location.host == 'sslpayment.uwccb.com.tw')
    {
        $('#ctl00_ContentPlaceHolder1_strCardNo').val(creditNumber);
        $('#ctl00_ContentPlaceHolder1_strMM').val(creditMonth);
        $('#ctl00_ContentPlaceHolder1_strYY').val("20"+creditYear);
        $('#check_num').val(creditCheck);

    }
   /* //location.host: sslpayment.uwccb.com.tw
   信用卡好：ctl00_ContentPlaceHolder1_strCardNo
   ctl00_ContentPlaceHolder1_strMM 1 2 3 
   ctl00_ContentPlaceHolder1_strYY 2020
    後三碼 check_num
    確定 ctl00_ContentPlaceHolder1_btn_box*/
}


var getChrome = (checkFun) => {
    chrome.storage.local.get("checktest", items=>{
        if(items.checktest){
        var ticket = items.checktest.ticket;
        var ticketNumber = items.checktest.ticketNumber;
        var idNumber = items.checktest.idNumber;
        var timeCheckHour = items.checktest.timeCheckHour;
        var timeChecMin = items.checktest.timeChecMin;
        var timeCheckSecond = items.checktest.timeCheckSecond;
        var startCheck = items.checktest.startCheck;
        var chooseSystem = items.checktest.chooseSystem;
        var NowDate=new Date();
        var timeNow=(NowDate.getHours()*10000)+(NowDate.getMinutes()*100)+(NowDate.getSeconds());
        var timeInput = (timeCheckHour*10000)+(timeChecMin*100)+(timeCheckSecond*1);
            if(startCheck == '0' && checkFun == 'start' && chooseSystem == '0'){
                setTimeout(function(){always(items.checktest);}, 1000);
            }else if(startCheck == '0' && checkFun == 'start' && chooseSystem == '1'){
                setTimeout(function(){ibonTicket(items.checktest);}, 1000);
            }
            else if (startCheck == '0' && checkFun == 'time'){
                if(timeNow <= timeInput){
                    console.log("開始倒數");
                    console.log(timeInput);
                    var setTime = timeCheckHour+':'+timeChecMin+':'+timeCheckSecond;//設定時間
                    setInterval(function(){ checkTime(setTime); },1000);
                }
            }
        }
    });
}
  getChrome('start');

  const onMessage = async (message) => {
    switch (message.action) {
      case 'ROTATE':
        getChrome('time');
            break;
    
    case 'test':
        var openUrl= "http://localhost/line_notify/index2.php?mg="+"測試看看";
        var xhr = new XMLHttpRequest();
        xhr.open('GET',openUrl,true);
        xhr.send();
        break;

      case 'Save':
            window.location.reload();
        break;
      default:
        break;
    }
  }
  
  chrome.runtime.onMessage.addListener(onMessage);
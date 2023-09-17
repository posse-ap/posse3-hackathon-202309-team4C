//透明フッダー　制作者:

//タブ　制作者:

//画像の透明度を動かす　製作者:
const checkBox = document.querySelector('input[type="checkbox"]');
const presentImg = document.querySelector('.present-img');

presentImg.addEventListener("click",function(){

})

function present(){
    let obj = document.getElementsByClassName("present-img")[0];
    obj.style.opacity = 0.5; // 透明度を50%に指定
  }

for (var i = 0; i < document.form1.elements.length - 1; i++) {
    if (document.form1.elements[i].checked) {
    flag = true;
    }//trueとfaleが切り替わるらしい
}
if (flag = true) {present()
    
}





function butotnClick(){
  if (box1.checked){
    console.log('チェック');
  } else {
    console.log('なし');
  }
}

// submitフォーム制御　制作者:瀬戸裕文
const sgbutton = document.getElementById("sg-button")

console.log(sgbutton);


function OnButtonClickSg () {
    let sgform = document.getElementById("sg-form").value;
    let sgname = document.getElementById("sg-name").value;
    let now = new Date();
    let year = now.getFullYear();
	let mon = now.getMonth()+1; 
	let day = now.getDate();
    document.getElementById("sg-form").value="";
    sgform = "<div class='sg-formListItem'>" + "<p class='sg-formnd'>" + "name:" + sgname + "   " + "Date:" + year + "年" + mon + "月" + day + "日" + "</p>" + "<p class='sg-formListDetail'>" + sgform + "</p>";
    document.getElementById("sg-formList").innerHTML = document.getElementById("sg-formList").innerHTML + sgform;
}

// question フォーム制御 制作者:

// quiz フォーム制御　制作者:

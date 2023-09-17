//透明フッダー　制作者:

//タブ　制作者:

//画像の透明度を動かす　製作者:
const checkBox = document.querySelector('input[type="checkbox"]');
const presentImg = document.querySelector(.'present-img');

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


// submitフォーム制御　制作者:瀬戸裕文
const sgbutton = document.getElementById("sg-button")

console.log(sgbutton);


function OnButtonClickSg () {
    let sgform = document.getElementById("sg-form").value;
    document.getElementById("sg-form").value="";
    console.log(sgform);
    let id = 0;
    sgform = "<div class='sg-formListItem'>" + "<p>" + sgform + "</p>" +
    '<button id=`sggoodbutton${id}` onclick="goodbutton()">' + "いいね" + "</button>" + "<p id='sggoodnumber'>" + counter + "</p>";
    console.log(sgform);
    document.getElementById("sg-formList").innerHTML = document.getElementById("sg-formList").innerHTML + sgform;
    goodbutton(id);
    id= id + 1;
}


function goodbutton (x) {
        let counter = 0;
        counter += 1;
        document.getElementById("sggoodnumber").innerHTML = counter;
}
// question フォーム制御 制作者:

// quiz フォーム制御　制作者:

//透明フッダー　制作者:

//タブ　制作者:

//画像の透明度を動かす　製作者:荒谷英里
//let obj = document.getElementsByClassName("present-img")[0];
//    obj.style.opacity = 0.5;




//やり直し
const present = document.getElementsByClassName('present-img');

const btn1 = document.getElementById('box1');
btn1.addEventListener('click',function(){
  present.classList.add('first');
});







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

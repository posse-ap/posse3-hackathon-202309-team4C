//透明フッダー　制作者:

//タブ　制作者
//suggest スライド作成 制作者：伊東柚衣
const suggestSlideOptions={
  type:'loop',
  gap:40,
  perPage:3,
  pagination:true,
  focus:0,
  breakpoints:{
    768:{
      perPage:1
    }
  }
}
new Splide('#js-suggestSlide',suggestSlideOptions).mount();
//やり直し
//const present = document.getElementsByClassName('present-img');

//const btn1 = document.getElementById('box1');
//btn1.addEventListener('click',function(){
//  present.classList.add('first');
//});

function clear1() {
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('first');
  }

function clear2() {
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('second');



}

function clear3(){
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('third')
}

function clear4(){
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('fourth')
}

function clear5(){
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('fifth')
  const memo = document.getElementsByClassName('present-memo')[0]
  memo.classList.add('presentExplain')
}

// submitフォーム制御　制作者:瀬戸裕文
const sgbutton = document.getElementById("sg-button")

function OnButtonClickSg () {
    let sgform = document.getElementById("sg-form").value;
    let sgname = document.getElementById("sg-name").value;
    let now = new Date();
    let year = now.getFullYear();
	let mon = now.getMonth()+1; 
	let day = now.getDate();
    document.getElementById("sg-form").value="";
    sgform = "<div class='sg-formListItem'>" + "<p class='sg-formnd'>" + "name:" + sgname + "   " + "Date:" + year + "年" + mon + "月" + day + "日" + "</p>" + "<p class='sg-formListDetail'>" + sgform + "</p>";
    const sgformList =document.getElementById("sg-formList");
    sgformList.insertAdjacentHTML('afterbegin', sgform);
}

// question フォーム制御 制作者:瀬戸裕文
const qtbutton = document.getElementById("qt-form")

function  OnButtonClickQt () {
    let qtform = document.getElementById("qt-form").value;
    let qtname = document.getElementById("qt-name").value;
    let now = new Date();
    let year = now.getFullYear();
	let mon = now.getMonth()+1; 
	let day = now.getDate();
    document.getElementById("qt-form").value = "";
    qtform = "<div class='qt-formListItem'>" + "<p class='qt-formnd'>" + "name:" + qtname + "   " + "Date:" + year + "年" + mon + "月" + day + "日" + "</p>" + "<p class='qt-formListDetail'>" + qtform + "</p>";
    const qtformList =document.getElementById("qt-formList");
    qtformList.insertAdjacentHTML('afterbegin', qtform);
}

// quiz フォーム制御　制作者:

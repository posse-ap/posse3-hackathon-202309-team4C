//ハンバーガーメニュー　制作者:瀬戸裕文
const button = document.getElementById("js-headerButton");

button.addEventListener("click" , () => {
    const header = document.getElementById("js-header");
    header.classList.toggle("is-open");
})
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

//マイページの画像のアニメーション　制作者：荒谷英里

function clear1() {
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('first');
  const fin = document.getElementsByClassName('finish')[0];
  fin.classList.add('done')

  }

function clear2() {
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('second');
  const fin = document.getElementsByClassName('finish')[1];
  fin.classList.add('done')


}

function clear3(){
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('third')
  const fin = document.getElementsByClassName('finish')[2];
  fin.classList.add('done')
}

function clear4(){
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('fourth')
  const fin = document.getElementsByClassName('finish')[3];
  fin.classList.add('done')
}

function clear5(){
  const present = document.getElementsByClassName('present-img')[0];
  present.classList.add('fifth')
  const memo = document.getElementsByClassName('present-memo')[0]
  memo.classList.add('presentExplain')
  const fin = document.getElementsByClassName('finish')[4];
  fin.classList.add('done')
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
    sgform = "<div class='sg-formListItem'>" + "<p class='sg-formnd'>" + "Name:" + sgname + "   " + "Date:" + year + "年" + mon + "月" + day + "日" + "</p>" + "<p class='sg-formListDetail'>" + sgform + "</p>";
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
    if(document.getElementById("qt-check1").checked == true) {
        qtform = "<div class='qt-formListItem'>" + "<p class='qt-form-q'>" + "質問" + "</p>" +"<p class='qt-formnd'>" + "Name:" + qtname + "   " + "Date:" + year + "年" + mon + "月" + day + "日" + "</p>" + "<p class='qt-formListDetail'>" + qtform + "</p>";
    const qtformList =document.getElementById("qt-formList");
    qtformList.insertAdjacentHTML('afterbegin', qtform);
    } else {
    qtform = "<div class='qt-formListItem'>" + "<p class='qt-form-a'>" +  "返信" + "</p>" + "<p class='qt-formnd'>" + "Name:" + qtname + "   " + "Date:" + year + "年" + mon + "月" + day + "日" + "</p>" + "<p class='qt-formListDetail'>" + qtform + "</p>";
    const qtformList =document.getElementById("qt-formList");
    qtformList.insertAdjacentHTML('afterbegin', qtform);
    }
}

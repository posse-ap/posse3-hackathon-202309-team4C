//透明フッダー　制作者:

//タブ　制作者

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

// question フォーム制御 制作者:

// quiz フォーム制御　制作者:

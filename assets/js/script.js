//透明フッダー　制作者:

//タブ　制作者

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

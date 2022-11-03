// ====================================================TASK 1=============================================================
function calculation() {
    var f_No = document.getElementById("fNo");
    var s_No = document.getElementById("lNo");
    var result = document.getElementById("cal");
    var addd = document.getElementById("")
    result.innerHTML = "<p>First Num + Last Num  =<strong>" + (Number(f_No.value) + Number(s_No.value)) + "</strong></p > " +
        "<p>First Num - Last Num  =<strong>" + (Number(f_No.value) - Number(s_No.value)) + "</strong></p>" +
        "<p>First Num * Last Num  =<strong>" + (Number(f_No.value) * Number(s_No.value)) + "</strong></p>" +
        "<p>First Num / Last Num  =<strong>" + (Number(f_No.value) / Number(s_No.value)) + "</strong></p>" +
        "<p>First Num square root of Last Num  =<strong>" + (Math.pow(Number(f_No.value), 2)) + "</strong>&nbsp;and&nbsp;<strong>" + (Math.pow(Number(s_No.value), 2)) + "</strong></p>" +
        "<p>The Sum Of tan Value =<strong>" + (Math.tan(Number(f_No.value) + Number(s_No.value))) + "</strong></p>" +
        "<p>The Sum Of sin Value  =<strong>" + (Math.sin(Number(f_No.value) + Number(s_No.value))) + "</strong></p>" +
        "<p>The Sum Of cos Value  =<strong>" + (Math.cos(Number(f_No.value) + Number(s_No.value))) + "</strong></p>";

}

// ========================================================TASK 2=================================================================================

var f_No1 = document.getElementById("frNo");
var s_No1 = document.getElementById("laNo");
var btn = document.getElementById("btn")
var validation = document.getElementById("validation");

s_No1.addEventListener('keyup', () => {
    (Number(f_No1.value) > Number(s_No1.value)) ? validation.innerHTML = "Plz enter higher value": validation.innerHTML = "";
    if (validation.innerHTML == "") {
        document.getElementById("btn").style.visibility = "visible"
    }
})

function open1() {
    document.getElementById("card1").style.display = "block";
    document.getElementById("card2").style.display = "none";
    document.getElementById("card3").style.display = "none";
}

function open2() {
    document.getElementById("card1").style.display = "none";
    document.getElementById("card2").style.display = "block";
    document.getElementById("card3").style.display = "none";
}

function open3() {
    document.getElementById("card1").style.display = "none"
    document.getElementById("card2").style.display = "none"
    document.getElementById("card3").style.display = "block"
}


function myFunction() {
    var obj = {
        evenArr: [],
        oddArr: []
    }
    var oddNo = 0
    var evenNo = 0
    for (let i = Number(f_No1.value); i <= s_No1.value; i++) {
        if (i % 2 == 0) {
            obj.evenArr.push(i);
            evenNo += i;
        } else {
            obj.oddArr.push(i);
            oddNo += i;

        }
    }
    document.getElementById('cal2').innerHTML = "<p>The sum of total numbers b/w the two inputfield is " + (evenNo + oddNo) + "</p>" +
        "<p>The total numbers b/w the two inputfield is " + (Number(obj.evenArr.length) + Number(obj.oddArr.length)) + "</p>" +
        "<p>Even numbers b/w the two inputfield are " + obj.evenArr + "</p>" +
        "<p>Odd numbers b/w the two inputfield are " + obj.oddArr + "</p>" +
        "<p>The sum of even num is " + evenNo + "</p>" + "<p>The sum of odd num is " + oddNo + "</p>";
}
// ======================================================================TASK 3=======================================================================

var textarea = document.getElementById("char");

textarea.addEventListener('keyup', () => {
    document.getElementById("print").innerHTML = "";
    var char = textarea.value

    if (char.length == 0) {
        console.log("Invalid string")
        return;
    }

    for (let i = 0; i < char.length; i++) {
        let count = 0;
        for (let j = 0; j < char.length; j++) {
            if (char[i] == char[j] && i > j) {
                break;
            }
            if (char[i] == char[j]) {
                count++;
            }
        }
        if (count > 0) {
            if (document.getElementById("print").innerHTML == "") {
                document.getElementById("print").innerHTML = "<p>The total length in the text is:<b> " + char.length + "</b></p>" +
                    "<p>the" + "&nbsp&nbsp" + (`${char[i]}`) + "&nbsp&nbsp" + " length in the text:<b> " + (`${count}`); + "</b></p>"
            } else {
                document.getElementById("print").innerHTML += "<p>the" + "&nbsp&nbsp" + (`${char[i]}`) + "&nbsp&nbsp" + " length in the text:<b> " + (`${count}`); + "</b></p>"
            }
        }

    }
})
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



var f_No1 = document.getElementById("frNo");
var s_No1 = document.getElementById("laNo");
var btn = document.getElementById("btn")
var validation = document.getElementById("validation");
// btn.addEventListener('click', () => {

// })


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
    var obj = { evenArr: [], oddArr: [] }
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
var textarea = document.getElementById("text")
var btn = document.getElementById("btn")

function result() {
    document.getElementById('print').innerHTML = ""
    var text_value = document.getElementById("text");
    var trim_value = text_value.value.trim().split(" ").join("");
    var ori = trim_value;
    var ori_len = trim_value.length;
    var totlen = trim_value.length;
    var chararr = trim_value.split("");
    console.log(chararr)
    var charlen
    for (let i = 0; i < chararr.length; i++) {
        ori = ori.replaceAll(chararr[i], '');
        console.log(ori)
        charlen = ori_len - ori.length;
        ori_len = ori.length;
        if (charlen == 0) {
            console.log(charlen);
        } else {
            if (document.getElementById('print').innerHTML == "") {
                document.getElementById('print').innerHTML = "<p> The length in the text is " + totlen + "</p>" + "<p> The " + chararr[i] + " length in the text is " + charlen + "</p>"
            } else {
                document.getElementById('print').innerHTML += "<p> The " + chararr[i] + " length in the text is " + charlen + "</p>"
            }
        }
    }
    // })
}
// function odd_even_calculation() {
//     var obj = { evenArr: [], oddArr: [] }
//     var oddNo = 0
//     var evenNo = 0
//     for (let i = Number(f_No1.value); i <= s_No1.value; i++) {
//         if (i % 2 == 0) {
//             obj.evenArr.push(i);
//             evenNo += i;
//         } else {
//             obj.oddArr.push(i);
//             oddNo += i;

//         }
//     }
//     document.getElementById('odd_even_calc').innerHTML = "<p>The sum of total numbers b/w the two inputfield is " + (evenNo + oddNo) + "</p>" +
//         "<p>The total numbers b/w the two inputfield is " + (Number(obj.evenArr.length) + Number(obj.oddArr.length)) + "</p>" +
//         "<p>Even numbers b/w the two inputfield are " + obj.evenArr + "</p>" +
//         "<p>Odd numbers b/w the two inputfield are " + obj.oddArr + "</p>" +
//         "<p>The sum of even num is " + sum_of_evenNo + "</p>" + "<p>The sum of odd num is " + sum_of_oddNo + "</p>";
// }
"use strict";
var IB = document.querySelector("#IB");
var IS = document.querySelector("#IS");
// const tab = document.querySelector(".tab") as HTMLElement
// const txt = document.querySelector(".txt") as HTMLElement
var IF = document.querySelector(".IF");
var ma = document.querySelector(".main");
function rand() {
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var a = "";
    for (var i = 0; i < 6; i++) {
        a += Math.floor(Math.random() * arr.length);
    }
    return a;
}
var taskArr = [];
IF.addEventListener("submit", function (e) {
    e.preventDefault();
    if (IB.value == "") {
        IB.classList.add("err");
        setTimeout(function () {
            IB.classList.remove("err");
        }, 2000);
    }
    else {
        //  let item = ` <div class="tab" data-id="${rand()}">
        //       <div class="text"><h1 class="txt">${IB.value}</h1></div>
        //       <div class="but">
        //         <button type="submit" class="CO">done</button>
        //         <button type="submit" class="DE">delete</button>
        //       </div>
        //     </div>`
        taskArr.push({
            cont: IB.value,
            uid: rand()
        });
        // console.log(taskArr);
        ma.innerHTML = "";
        taskArr.map(function (er) {
            var cont = er.cont, uid = er.uid;
            var q = " <div class=\"tab\" data-id=\"" + uid + "\">\n          <div class=\"text\"><h1 class=\"txt\">" + cont + "</h1></div>\n          <div class=\"but\">\n            <button type=\"submit\" class=\"CO\">done</button>\n            <button type=\"submit\" class=\"DE\">delete</button>\n          </div>\n        </div>";
            ma.innerHTML += q;
        });
        IB.value = "";
    }
});
ma.addEventListener("click", function (e) {
    var _a, _b, _c, _d, _e, _f, _g;
    var q = e.target;
    if (q.className == "CO") {
        if (q.innerText == "DONE") {
            var s = (_b = (_a = q.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.children[0];
            (_c = s.parentElement) === null || _c === void 0 ? void 0 : _c.classList.add("co");
            s.children[0].classList.add("co");
            s.children[0].classList.forEach(function (a) {
                if (a == "co") {
                    q.innerText = "UNDO";
                }
            });
        }
        else if (q.innerText == "UNDO") {
            var s = (_e = (_d = q.parentElement) === null || _d === void 0 ? void 0 : _d.parentElement) === null || _e === void 0 ? void 0 : _e.children[0];
            (_f = s.parentElement) === null || _f === void 0 ? void 0 : _f.classList.remove("co");
            s.children[0].classList.remove("co");
            s.children[0].classList.forEach(function (a) {
                if (a != "co") {
                    q.innerText = "DONE";
                }
            });
        }
    }
    if (q.className == "DE") {
        var s = (_g = q.parentElement) === null || _g === void 0 ? void 0 : _g.parentElement;
        var id_1 = s === null || s === void 0 ? void 0 : s.dataset.id;
        var newArr = taskArr.filter(function (each) { return each.uid !== id_1; });
        ma.innerHTML = "";
        taskArr = newArr;
        taskArr.map(function (er) {
            var cont = er.cont, uid = er.uid;
            var q = " <div class=\"tab\" data-id=\"" + uid + "\">\n          <div class=\"text\"><h1 class=\"txt\">" + cont + "</h1></div>\n          <div class=\"but\">\n            <button type=\"submit\" class=\"CO\">done</button>\n            <button type=\"submit\" class=\"DE\">delete</button>\n          </div>\n        </div>";
            ma.innerHTML += q;
        });
    }
});

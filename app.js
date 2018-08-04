document.addEventListener("DOMContentLoaded", function (event) {
    let godDiv = document.createElement("div")
    document.body.appendChild(godDiv)
    let list = [
        { friend: "Dana" },
        { friend: "Karl" },
        { friend: "Luke" },
        { friend: "Bailey" },
        { friend: "Taylor" }
    ]


    let button = document.getElementById("btn")
    button.addEventListener("click", function linesofcode() {

        list.forEach(function ({ friend }) {

            let div1 = document.createElement("div")
            let p = document.createElement("P")
            let header = document.createElement("h3")
            let name = document.createTextNode(friend)
            header.appendChild(name)
            div1.appendChild(header)
            godDiv.appendChild(div1)
            div1.className = "Friends"
            let lines;

            for (let n = 99; n > 0; n--) {

                let n = 99

                let = (minusOne = n - 1)


                if (n > 2) {
                    (lines = document.createTextNode(n + " lines of code in the file, " + n + " lines of code, " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file!"))

                } else if (n === 2) {
                    (lines = document.createTextNode(n + " lines of code in the file, " + n + " lines of code, " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file!"))
                } else {
                    (lines = document.createTextNode("1 line of code in the file, 1 line of code, " + friend + " strikes one out, clears it all out, no more lines of code in the file!"));

                }
            }
            p.appendChild(lines)
            div1.appendChild(p)
        });

    });


});
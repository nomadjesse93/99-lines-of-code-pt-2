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
            let header = document.createElement("h3")
            let name = document.createTextNode(friend)
            div1.appendChild(header)
            header.appendChild(name)

            for (let n = 99; n > 0; n--) {

                let p = document.createElement("P")

                let lines;

                let = (minusOne = n - 1)

                if (n > 1) {
                    lines = document.createTextNode(n + " lines of code in the file, " + n + " lines of code, " + friend + " strikes one out, clears it all out, " + minusOne + " lines of code in the file!")

                } else {
                    lines = document.createTextNode("1 line of code in the file, 1 line of code, " + friend + " strikes one out, clears it all out, no more lines of code in the file!");

                }

                p.appendChild(lines)
                div1.appendChild(p)
                godDiv.appendChild(div1)
                div1.className = "Friends"

            }

        });

    });


});
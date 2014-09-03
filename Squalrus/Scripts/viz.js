(function () {
    "use strict";

    var site = "Squalrus",
        bod = document.body;

    // Clear the body
    bod.innerHTML = "";

    // Set a bg color
    bod.style.backgroundColor = "#3D8BFF";

    // Create the sitename
    var siteNameElement = document.createElement("h1");
    siteNameElement.textContent = site;
    bod.appendChild(siteNameElement);

    (function twitch(tagName) {
        var interval = 10,
            element = document.getElementsByTagName("h1")[0],

            // Original positions
            bounds = element.getBoundingClientRect(),
            originalLeft = bounds.left,
            originalTop = bounds.top,

            // Twitch offset
            twitchLeft = 0,
            twitchTop = 0;

        console.log("L: " + originalLeft);

        setInterval(function () {
            setTimeout(function () {
                twitchLeft = Math.random() * 4;
                twitchTop = Math.random() * 4;

                element.style.left = (originalLeft + twitchLeft) + "px";
                element.style.top = (originalTop + twitchTop) + "px";
            });
        }, interval);
    })();

})();
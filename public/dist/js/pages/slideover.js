(() => {
    (function () {
        "use strict";
        $("#programmatically-show-slideover").on("click", function () {
            let e = document.querySelector("#programmatically-slideover");
            tailwind.Modal.getOrCreateInstance(e).show();
        }),
            $("#programmatically-hide-slideover").on("click", function () {
                let e = document.querySelector("#programmatically-slideover");
                tailwind.Modal.getOrCreateInstance(e).hide();
            }),
            $("#programmatically-toggle-slideover").on("click", function () {
                let e = document.querySelector("#programmatically-slideover");
                tailwind.Modal.getOrCreateInstance(e).toggle();
            });
    })();
})();

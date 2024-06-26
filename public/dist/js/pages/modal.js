(() => {
    (function () {
        "use strict";
        $("#programmatically-show-modal").on("click", function () {
            let o = document.querySelector("#programmatically-modal");
            tailwind.Modal.getOrCreateInstance(o).show();
        }),
            $("#programmatically-hide-modal").on("click", function () {
                let o = document.querySelector("#programmatically-modal");
                tailwind.Modal.getOrCreateInstance(o).hide();
            }),
            $("#programmatically-toggle-modal").on("click", function () {
                let o = document.querySelector("#programmatically-modal");
                tailwind.Modal.getOrCreateInstance(o).toggle();
            });
    })();
})();

(() => {
    (function () {
        "use strict";
        function i(e) {
            e.validate()
                ? Toastify({
                      node: $("#success-notification-content")
                          .clone()
                          .removeClass("hidden")[0],
                      duration: 3e3,
                      newWindow: !0,
                      close: !0,
                      gravity: "top",
                      position: "right",
                      stopOnFocus: !0,
                  }).showToast()
                : Toastify({
                      node: $("#failed-notification-content")
                          .clone()
                          .removeClass("hidden")[0],
                      duration: 3e3,
                      newWindow: !0,
                      close: !0,
                      gravity: "top",
                      position: "right",
                      stopOnFocus: !0,
                  }).showToast();
        }
        $(".validate-form").each(function () {
            let e = new Pristine(this, {
                classTo: "input-form",
                errorClass: "has-error",
                errorTextParent: "input-form",
                errorTextClass: "text-danger mt-2",
            });
            e.addValidator(
                $(this).find('input[type="url"]')[0],
                function (t) {
                    let n =
                            /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
                        o = new RegExp(n);
                    return !!(!t.length || (t.length && t.match(o)));
                },
                "This field is URL format only",
                2,
                !1
            ),
                $(this).on("submit", function (t) {
                    t.preventDefault(), i(e);
                });
        });
    })();
})();

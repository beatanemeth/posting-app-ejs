/* Accordion - About Page */
$(document).ready(function () {
    $(function () {
        var icons = {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s"
        };
        $("#accordion").accordion({
            heightStyle: "content",
            icons: icons
        });
        $("#toggle").button().on("click", function () {
            if ($("#accordion").accordion("option", "icons")) {
                $("#accordion").accordion("option", "icons", null);
            } else {
                $("#accordion").accordion("option", "icons", icons);
            }
        });
    });
});


/* Toggle Read More & Read Less Button - Home Page */
$("#moreBtn").click(function () {
    const button = $("#moreBtn").text();
    if (button == "Read More") {
        // to do when btn is in the read more state
        $("#moreBtn").text("Read Less");
        $("#dots").css("display", "none");
        $("#more").css("display", "inline");
    } else {
        // to do when btn is in the read less state
        $("#moreBtn").text("Read More");
        $("#dots").css("display", "inline");
        $("#more").css("display", "none");
    }
});


/* Toggle Login & Register Forms - Auth Page */
$("#toggleLoginRegister").click(function () {
    $("#loginContainer, #registerContainer").toggle();
    const toggleBtn = $("#toggleLoginRegister");
    if (toggleBtn.text() == "Not registered yet? Create an account!") {
        toggleBtn.text("Already registered? Login!");
    } else {
        toggleBtn.text("Not registered yet? Create an account!");
    }
});

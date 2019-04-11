jQuery(document).ready(function () {
    //reset();
    // $("#warning").removeClass();
    $("#AuthenticationForm").submit(function () {
        return validateForm();
    });
    $("#warning").addClass("alert alert-warning hide");

    $("#OwnerAuthenticationForm").submit(function () {
        return validateOwnerForm();
    });
});

function validateForm() {
    var userCredentials = {
        username: jQuery("#username").val(),
        password: jQuery("#password").val(),
        challenge: jQuery("#hidChallenge").val()
    };
    if (!userCredentials.username) {
        $(".alert-warning").html("Please enter user name.");
        $(".alert-warning").removeClass("hide");
    }
    if (!userCredentials.password) {
        $(".alert-warning").html("Please enter password.");
        // $("#warning").removeClass("hide");
        $(".alert-warning").addClass("alert alert-warning show");
    }
    if (!userCredentials.password && !userCredentials.username) {
        $(".alert-warning").html("Please enter valid credentials.");
        // $("#warning").removeClass("hide");
        $(".alert-warning").addClass("alert alert-warning show");
    }

    if (userCredentials.username && userCredentials.password) {
        var passwordHash = CryptoJS.MD5(userCredentials.password);
        var challenge = $("#lblChallange").html();
        var fhashValue = hex_sha512("kr9rk" + passwordHash.toString() + "kr9rk");

        var shashValue = hex_sha512(challenge + fhashValue);

        var leng = userCredentials.password.length;
        userCredentials.password = "";
        var ps = '';
        for (var i = 0; i < leng; i++)
            ps += "r";

        $("#password").val(ps);
        $("#hidPassword").val(shashValue);
        $(".btn-logging").prop('disabled', true);
        return true;
    }

    return false;
}

function validateOwnerForm() {


    var userCredentials = {
        username: $("#ownerUsername").val(),
        password: $("#ownerPassword").val(),
        challenge: $("#hidChallenge").val()
    };
    if (!userCredentials.username) {
        $(".owner-alert-warning").html("Please enter user name.");
        $(".owner-alert-warning").removeClass("hide");
    }
    if (!userCredentials.password) {
        $(".owner-alert-warning").html("Please enter password.");
        // $("#warning").removeClass("hide");
        $(".owner-alert-warning").addClass("alert alert-warning show");
    }
    if (!userCredentials.password && !userCredentials.username) {
        $(".owner-alert-warning").html("Please enter valid credentials.");
        // $("#warning").removeClass("hide");
        $(".owner-alert-warning").addClass("alert alert-warning show");
    }

    if (userCredentials.username && userCredentials.password) {
        var passwordHash = CryptoJS.MD5(userCredentials.password);
        var challenge = $("#ownerLblChallange").html();
        var fhashValue = hex_sha512("kr9rk" + passwordHash.toString() + "kr9rk");
        var shashValue = hex_sha512(challenge + fhashValue);
        console.log('Owner  ' + shashValue);
        var leng = userCredentials.password.length;
        userCredentials.password = "";
        var ps = '';
        for (var i = 0; i < leng; i++)
            ps += "r";

        $("#ownerPassword").val(ps);
        $("#ownerHidPassword").val(shashValue);
        return true;
    }

    return false;
}

function reset(resetUrl) {
    document.AuthenticationForm.action = resetUrl; //'/epfo/no-auth/forgotPass/viewForgotPass';
    document.AuthenticationForm.submit();
    /*	jQuery("#password").val("");
    	jQuery("#username").val("");
    	// jQuery(".login-wrap .alert").html("");
            $("#warning").text("");
            $("#warning").removeClass();
            $("#toggleCaptcha").hide();
    	// jQuery(".login-wrap .alert").show("slow");*/
}

function forgotPassword() {

    document.AuthenticationForm.action = hostname + '/no-auth/forgotPass/viewForgotPass';
    document.AuthenticationForm.submit();

}
$(document).ready(function () {
    $(".forgotPasswordLink").click(function () {
        $(".registerDiv").fadeOut("fast");
        $(".loginDiv").fadeOut("fast");
        $(".forgotPasswordDiv").fadeIn("fast");
        $(".dropDown").fadeIn("fast");
    });
    $(".registerLink").click(function () {
        $(".registerDiv").fadeIn("fast");
        $(".loginDiv").fadeOut("fast");
        $(".forgotPasswordDiv").fadeOut("fast");
        $(".dropDown").fadeIn("fast");
    });

    $(".loginLink").click(function () {
        $(".registerDiv").fadeOut("fast");
        $(".loginDiv").fadeIn("fast");
        $(".forgotPasswordDiv").fadeOut("fast");
        $(".dropDown").fadeIn("fast");
        $(this).scrollTo($(".registerDiv"));
    });

    $('.btn-file :file').on('fileselect', function (event, numFiles, label) {
        console.log(numFiles);
        console.log(label);
    });

    $(".registerDiv").hide();
    $(".loginDiv").hide();
    $(".forgotPasswordDiv").hide();
    $(".dropDown").hide();

    var beginning_color = new $.Color('rgb(142, 204, 148)');
    $('body').animate({
        backgroundColor: beginning_color
    }, 0);

    //** notice we are including jquery and the color plugin at 
    //** http://code.jquery.com/color/jquery.color-2.1.0.js

    $(document).ready(function () {
        //** notice we are including jquery and the color plugin at 
        //** http://code.jquery.com/color/jquery.color-2.1.0.js

        var scroll_pos = 0;
        var animation_begin_pos = 0; //where you want the animation to begin
        var animation_end_pos = 1000; //where you want the animation to stop
        var beginning_color = new $.Color('rgb(142, 204, 148)'); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
        var ending_color = new $.Color('rgb(0,197,209)');; //what color we want to use in the end
        $(document).scroll(function () {
            scroll_pos = $(this).scrollTop();
            if (scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos) {
                // console.log( 'scrolling and animating' );
                //we want to calculate the relevant transitional rgb value
                var percentScrolled = scroll_pos / (animation_end_pos - animation_begin_pos);
                var newRed = beginning_color.red() + ((ending_color.red() - beginning_color.red()) * percentScrolled);
                var newGreen = beginning_color.green() + ((ending_color.green() - beginning_color.green()) * percentScrolled);
                var newBlue = beginning_color.blue() + ((ending_color.blue() - beginning_color.blue()) * percentScrolled);
                var newColor = new $.Color(newRed, newGreen, newBlue);
                //console.log( newColor.red(), newColor.green(), newColor.blue() );
                $('body').animate({
                    backgroundColor: newColor
                }, 0);
            } else if (scroll_pos > animation_end_pos) {
                $('body').animate({
                    backgroundColor: ending_color
                }, 0);
            } else if (scroll_pos < animation_begin_pos) {
                $('body').animate({
                    backgroundColor: beginning_color
                }, 0);
            } else {
                $('body').animate({
                    backgroundColor: ending_color
                }, 0);
            }
        });
    });

});

function checkPassword(password) {
    var strengths = ["Very Weak", "Weak", "Medium", "Strong", "Very Strong"];
    var colors = ["#FF0000", "#FFBBAA", "#FFCC00", "#19D119", "#006600"];
    var score = 0;
    var regLower = /[a-z]/,
        regUpper = /[A-Z]/,
        regNumber = /\d/,
        regPunctuation = /[.,!@#$%^&*?_~\-£()]/;

    if (password.length < 2) {
        score = 0;
    } else if (password.length < 4) {
        score = 1;
    } else if (password.length <= 7) {
        score = 2;
    } else {
        // length is >= 8 in here
        if (regLower.test(password) && regUpper.test(password) && regNumber.test(password)) {
            // if it also has punctuation, then it gets a 5, otherwise just a 4
            if (regPunctuation.test(password)) {
                score = 4;
            } else {
                score = 3;
            }
        } else {
            // if doesn't have upper, lower and numbers, then it gets a 3
            score = 2;
        }
    }
    var spanPwd = document.getElementById('passwordStrength');
    spanPwd.innerHTML = strengths[score];
    spanPwd.style.color = colors[score];
}

function passwordChanged(value) {
    checkPassword(value);
}

function validatePassword() {

    if (document.getElementById('pswd').value === document.getElementById('cpswd').value) {
        document.getElementById('registerForm').submit();

    } else {
        document.getElementById('validPassword').innerHTML = 'Password is incorrect';
    }
}

function validateForm() {

    if (document.getElementById('pswd').value === document.getElementById('cpswd').value) {
        document.getElementById('validPassword').innerHTML = '';

    } else {
        document.getElementById('validPassword').innerHTML = 'Password is incorrect';
    }
}
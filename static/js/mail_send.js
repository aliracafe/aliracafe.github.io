
function send_mail() {
    var name = jQuery("#name").val();
    var email = jQuery("#email").val();
    var subject = jQuery("#subject").val();
    var message = jQuery("#message").val();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var flag = 0;

    // Name validation
    if (name == "") {
        jQuery("#name").addClass('border-danger');
        jQuery("#val_user_name").html("Your Name is Required");
        flag = 1;
    } else {
        jQuery("#name").removeClass('border-danger');
        jQuery("#val_user_name").html("");
    }

    // Email validation
    if (email == "") {
        jQuery("#email").addClass('border-danger');
        jQuery("#val_user_email").html("Please Enter Email");
        flag = 1;
    } else if (!email.match(mailformat)) {
        jQuery("#email").addClass('border-danger');
        jQuery("#val_user_email").html("Please Enter Valid Email");
        flag = 1;
    } else {
        jQuery("#email").removeClass('border-danger');
        jQuery("#val_user_email").html("");
    }

    // Subject validation
    if (subject == "") {
        jQuery("#subject").addClass('border-danger');
        jQuery("#val_subject").html("Subject is Required");
        flag = 1;
    } else {
        jQuery("#subject").removeClass('border-danger');
        jQuery("#val_subject").html("");
    }

    // Message validation
    if (message == "") {
        jQuery("#message").addClass('border-danger');
        jQuery("#val_message").html("Please Describe your thoughts");
        flag = 1;
    } else {
        jQuery("#message").removeClass('border-danger');
        jQuery("#val_message").html("");
    }

    // If there are validation errors, don't submit the form
    if (flag == 1) {
        return false;
    }

    // Prepare data to send
    var data = {
        "name": name,
        "email": email,
        "subject": subject,
        "message": message,
    };

    // AJAX request
    jQuery.ajax({
        type: "POST",
        url: "process_form.php", // Ensure this URL is correct
        data: data,
        success: function(response) {
            if (response == '1') {
                jQuery('#suce_message').show();
                jQuery("#contact-form")[0].reset(); // Reset form after success
            } else {
                jQuery('#err_message').show(); // Show error message if something went wrong
            }
        }
    });
}

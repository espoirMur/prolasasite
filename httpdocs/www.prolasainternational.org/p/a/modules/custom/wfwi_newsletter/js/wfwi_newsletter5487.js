(function ($) {

    Drupal.behaviors.wfwi_newsletter = {
        attach: function (context) {

            function thanks(country)
            {
                var fromEmailAddress = "general@womenforwomen.org";
                if (country == "uk")
                {
                    fromEmailAddress = "onlineuk@womenforwomen.org";
                }
                var message = 'Thank you for joining our online community! To ensure delivery of Women for Women International e-mails, please add our reply address ' + fromEmailAddress + ' to your Address Book or Safe Sender List.';
                alert(message);
            }

            function register(form)
            {
                var country = $(form).find("[name='country']").val();

                $.ajax({
                    type: 'POST',
                    url: $(form).attr('action'),
                    data: $(form).serialize(),
                    cache: false,
                    error: function (httpReq, status, exception) {
//              console.log('error');
//              console.log(httpReq);
//              console.log(httpReq.responseText);
//              console.log(status + " " + exception);
                    },
                    success: function (data) {
//              console.log('success');
//              console.log(data);
                        thanks(country);
                    },
                    complete: function (data) {
//              console.log('complete');
//              console.log(data);
                        $(form)[0].reset();

                    }
                });
            }

            $(document).ready(function () {
                // Get the header and footer forms.
                $('form.form-email-signup').each(function(){
                    $(this).validate({
                        rules: {
                            email: {
                                required: true,
                                email: true
                            }
                        },
                        messages: {
                            email: {
                                required: "We need your email address to contact you",
                                email: "Your email address must be in the format of name@domain.com"
                            }
                        },
                        submitHandler: function (form) {
                            // If form validates, submit with ajax.
                            register($(form));
                        }
                    });
                });

            });
        }
    }

})(jQuery);
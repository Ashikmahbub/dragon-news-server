<!-- Custom Checkout Form Validation Script -->
<script type="text/javascript">
    jQuery(document).ready(function($) {
        // Form submit event handler
        $('#custom_checkout_form').submit(function(event) {
            // Prevent form submission
            event.preventDefault();

            // Perform form validation
            var isValid = true;

            // Validate First Name and Last Name fields
            $('.firstname_lastname input').each(function() {
                if ($(this).val() === '') {
                    isValid = false;
                    $(this).addClass('error');
                } else {
                    $(this).removeClass('error');
                }
            });

            // Validate Email field
            var emailField = $('.email input');
            var emailValue = emailField.val();
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailValue === '' || !emailRegex.test(emailValue)) {
                isValid = false;
                emailField.addClass('error');
            } else {
                emailField.removeClass('error');
            }

            // Validate Cell Phone field
            var cellPhoneField = $('.cell-phone input');
            var cellPhoneValue = cellPhoneField.val();
            var cellPhoneRegex = /^\d{10}$/;
            if (cellPhoneValue === '' || !cellPhoneRegex.test(cellPhoneValue)) {
                isValid = false;
                cellPhoneField.addClass('error');
            } else {
                cellPhoneField.removeClass('error');
            }

            // Validate Phone and Fax fields
            $('.phone-fax input').each(function() {
                if ($(this).val() === '') {
                    isValid = false;
                    $(this).addClass('error');
                } else {
                    $(this).removeClass('error');
                }
            });

            // Validate Street Address and Town/City fields
            $('.street-city input').each(function() {
                if ($(this).val() === '') {
                    isValid = false;
                    $(this).addClass('error');
                } else {
                    $(this).removeClass('error');
                }
            });

            // Validate Zip Code, Country, and State fields
            $('.zip-code-state-country input').each(function() {
                if ($(this).val() === '') {
                    isValid = false;
                    $(this).addClass('error');
                } else {
                    $(this).removeClass('error');
                }
            });

            // Validate Date of Birth field
            var dobField = $('.zip-code-state-country #date_of_birth');
            if (dobField.val() === '') {
                isValid = false;
                dobField.addClass('error');
            } else {
                dobField.removeClass('error');
            }

            // Validate Your Desired Referral ID field
            var refIdField = $('.desired-refferl-id-and-password #refid');
            if (refIdField.val() === '') {
                isValid = false;
                refIdField.addClass('error');
            } else {
                refIdField.removeClass('error');
            }

            // If the form is valid, submit it
            if (isValid) {
                this.submit();
            }
        });
    });
</script>

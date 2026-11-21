/* Local only. The waitlist form never sends data to a server. */
(function () {
  "use strict";

  var form = document.getElementById("waitlist");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = document.getElementById("waitlist-status");
      var email = form.querySelector('input[type="email"]');
      if (status) {
        status.dataset.state = "ok";
        status.textContent =
          "Thanks — the waitlist is not live yet, so this form did not send or store your email. Check back when GuardianOrbit launches on the App Store.";
      }
      if (email) {
        email.value = "";
      }
    });
  }

  var forms = document.querySelectorAll("form#waitlist-footer");
  forms.forEach(function (footerForm) {
    footerForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var status = document.getElementById("waitlist-footer-status");
      var email = footerForm.querySelector('input[type="email"]');
      if (status) {
        status.dataset.state = "ok";
        status.textContent =
          "Thanks — the waitlist is not live yet, so this form did not send or store your email.";
      }
      if (email) {
        email.value = "";
      }
    });
  });
})();

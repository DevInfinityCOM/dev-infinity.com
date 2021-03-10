/*
 * DevInfinity 2019-2021
 *
 * https://dev-infinity.com
 */
document.querySelectorAll('[data-encoded-email]').forEach(function (el) {
    const email = atob(el.dataset.encodedEmail);

    el.innerHTML = '<a href="mailto:' + email + '">' + email + '</a>';
});

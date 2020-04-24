/*
 * (C) DevInfinity.io 2020
 */
document.querySelectorAll('[data-encoded-email]').forEach(function (el) {
    const mail = atob(el.dataset.encodedEmail);

    el.innerHTML = '<a href="mailto:' + mail + '">' + mail + '</a>';
});

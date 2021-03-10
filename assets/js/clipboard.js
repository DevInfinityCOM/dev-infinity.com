/*
 * DevInfinity 2019-2021
 *
 * https://dev-infinity.com
 */
function isCopySupported() {
    return document.queryCommandSupported('copy');
}

function copyClipboardElement(target) {
    target.select();
    target[0].setSelectionRange(0, target.val().length);

    if (isCopySupported()) {
        try {
            if (document.execCommand('copy')) {
                target.blur();
                window.getSelection().removeAllRanges();
                return true;
            }
        } catch (ex) {
            console.log("Error: " + ex);
        }
    }
    return false;
}

function copyClipboard(button, target) {
    const oldTitle = button.attr('data-original-title');
    const copied = copyClipboardElement(target);

    if ($.fn.tooltip) {
        button.attr('data-original-title', copied ? 'Copié !' : 'CTRL + C pour copier').tooltip('show');
        button.attr('data-original-title', oldTitle === undefined ? '' : oldTitle);
    }
}

$('.copy-clipboard').on('click', function (e) {
    e.preventDefault();

    const copyButton = $(this);
    const target = $(document.getElementById(copyButton.attr('data-copy-target')));

    copyClipboard(copyButton, target);
});

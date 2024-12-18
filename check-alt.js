javascript: (() => {
    const imgTagList = Array.from(document.getElementsByTagName('img'));
    imgTagList.forEach(imgTag => {
        if (!imgTag.hasAttribute('alt')) {
            console.log('%c alt 属性がありません', 'color: red;', '');
        } else if ('' == imgTag.getAttribute('alt').trim()) {
            console.log('%c alt が空欄です', 'color: red;', '');
        } else {
            console.log('alt=', imgTag.getAttribute('alt').trim());
        }

        console.groupCollapsed('↳画像タグ');
        console.log(imgTag);
        console.groupEnd();
    });
})();
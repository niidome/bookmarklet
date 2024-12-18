javascript: (() => {
    const whitelist = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
    ];

    const aTagList = Array.from(document.getElementsByTagName('a'));
    aTagList.forEach(aTag => {
        const targetAttr = aTag.getAttribute('target');
        let message = '';
        let color = '';

        if (null == targetAttr || '_self' == targetAttr) {
            const hrefAttr = aTag.getAttribute('href');


            if (/^https?:\/\//.test(hrefAttr) && !inWhitelist(hrefAttr)) {
                message = 'http(s):// から始まる URL に target="_blank" がありません', 'color: orange;';
                color = 'orange';
            }
        } else {
            const relString = aTag.getAttribute('rel');

            if (relString) {
                const relAttr = relString.split(' ');

                if (!relAttr.includes('noopener')) {
                    message = 'rel 属性に noopener がありません';
                    color = 'red';
                }
            } else {
                message = 'target 指定のある a タグに rel 属性がありません';
                color = 'red';
            }
        }

        if (message) {
            console.log('%c' + message, `color: ${color}`, '');
        } else {
            return;
        }

        console.groupCollapsed(' ↳ a タグ');
        console.log(aTag);
        console.groupEnd();
    });

    function inWhitelist(url) {
        try {
            const parsedUrl = new URL(url);
            const hostname = parsedUrl.hostname;

            return whitelist.some(entry =>
                hostname === entry || parsedUrl.href.startsWith(entry)
            );
        } catch (e) {
            return false;
        }
    }
})();
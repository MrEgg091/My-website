let lastScroll = 0;
window.addEventListener('scroll', () => {
    const current = window.scrollY;
    if (current > lastScroll) {
        document.querySelector('nav').style.top = '-100px';
    } else {
        document.querySelector('nav').style.top = '0';
    }
    lastScroll = current;
});
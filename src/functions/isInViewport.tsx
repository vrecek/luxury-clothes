let el:HTMLElement
let elAnim:HTMLElement

function isInViewport(element:HTMLElement) {
    const rect = element.getBoundingClientRect();
    const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function handleFunction() {
    if(isInViewport(el)) {
        elAnim.classList.add('moveFromLeft')
        window.removeEventListener('scroll', handleFunction)
    }
}

export default function handleView(elementToView:HTMLElement, elementToAnimate:HTMLElement) {
    el = elementToView
    elAnim = elementToAnimate

    window.addEventListener('scroll', handleFunction)
}
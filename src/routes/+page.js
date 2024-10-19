/**
 * @param {{ preventDefault: () => void; currentTarget: any; }} event
 */
function handleAnchorClick (event) {
    event.preventDefault()
    const link = event.currentTarget
    const anchorId = new URL(link.href).hash.replace('#', '')
    const anchor = document.getElementById(anchorId)
    window.scrollTo({
        // @ts-ignore
        top: anchor.offsetTop - 32,
        behavior: 'smooth'
    })
}
const logoEl = document.getElementById('mainLogo')

console.log(mainLogo)

console.log(document.body.clientWidth)



function resizeLogo(event) {
    const bodySize = document.body.clientWidth
    if (bodySize <= 816) {
       return logoEl.innerHTML = 'Liszka'
    }
    return logoEl.innerHTML = 'Agnieszka Liszka'
}

window.addEventListener('resize', resizeLogo)
resizeLogo()
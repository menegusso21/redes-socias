const getCSS = (varieavel) => {
    return getComputedStyle(document.body).getPropertyValue(varieavel)

}

export {getCSS}
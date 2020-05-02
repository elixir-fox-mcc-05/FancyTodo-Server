const nextweek = () => {
    let today = new Date()
    return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6)
}

module.exports = nextweek
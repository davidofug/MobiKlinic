
export const _removeStorageItem = (key) => {
    AsyncStorage.removeItem(key)
}

export const generateRandomCode = length  => {
    const USABLE_CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

    return new Array(length).fill(null).map(() => USABLE_CHARACTERS[Math.floor(Math.random() * USABLE_CHARACTERS.length)]).join("")
}

export const MyDate = () => {
    const myDate = new Date()
    return `${myDate.getMonth() + 1}-${myDate.getDate()}-${myDate.getFullYear()} ${myDate.getHours()}:${myDate.getMinutes()}:${myDate.getSeconds()}`
}
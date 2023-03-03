export default function verificaArray(array, palavra) {
    let contador = 0
    array.filter((r) => {
        if (r === palavra) {
            contador++
        }
    })
    if (contador > 0) {
        return false
    }
    return true
}
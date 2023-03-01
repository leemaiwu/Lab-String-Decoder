

const decoder = code => {
    let brokenArr = []
    let eachStr = ""
    for (let i = 0; i < code.length; i++) {
        if (!isNaN(code[i])) {
            if (eachStr !== "") {
                brokenArr.push(eachStr)
            }
            eachStr = code[i]
        } else {
            eachStr += code[i]
        }
    }
    if (eachStr !== "") {
        brokenArr.push(eachStr)
    }
    console.log(brokenArr)
    let newArr = brokenArr.map((str) => {
        let num = +str[0]
        return str[num + 1]
    })
    return newArr.join("")
}



console.log(decoder("0y4akjfe0s"))
let mobiles = {
    iphone : {
        x10 : {
            ram : 2,
            rom : 32,
            price : 12000
        },
        x10Pro : {
            ram : 4,
            rom : 34,
            price : 15000
        },
        x11 : {
            ram : 6,
            rom : 36,
            price : 20000
        },
        x11Pro : {
            ram : 8,
            rom : 38,
            price : 25000
        },
    },
    samsung : {
        s5 : {
            ram : 512,
            rom : 16,
            price : 4000
        },
        s6 : {
            ram : 2,
            rom : 32,
            price : 8000
        },
        s7 : {
            ram : 4,
            rom : 34,
            price : 16000
        },
        s8 : {
            ram : 8,
            rom : 64,
            price : 24000
        },
    },
    xiomi : {
        i5 : {
            ram : 2,
            rom : 32,
            price : 7000
        },
        i6 : {
            ram : 4,
            rom : 36,
            price : 14000
        },
        i7 : {
            ram : 8,
            rom : 64,
            price : 21000
        },
        i8 : {
            ram : 16,
            rom : 120,
            price : 28000
        },
    },
    infinix : {
        Hot8 : {
            ram : 2,
            rom : 32,
            price : 125550
        },
        Hot8Pro : {
            ram : 4,
            rom : 32,
            price : 125550
        },
        Hot9 : {
            ram : 6,
            rom : 32,
            price : 125550
        },
        Hot9Pro : {
            ram : 8,
            rom : 32,
            price : 125550
        },
    }}

// let copyObj = {...mobiles}

// let MobileName = Object.keys(copyObj);
// let IphoneModel = Object.keys(copyObj.iphone)
// let samsungModel = Object.keys(copyObj.samsung)
// let xiomiModel = Object.keys(copyObj.xiomi)
// let infinixModel = Object.keys(copyObj.infinix)


// let models = [...IphoneModel,...samsungModel,...xiomiModel,...infinixModel]
// console.log(models)


// let mobileNames = document.getElementById("mobileName")
// let modelNames = document.getElementById("modelName")

// for(var i=0;i<MobileName.length;i++){
//     mobileNames.innerHTML += `<option value = ${MobileName[i]}>${MobileName[i]}</option>`
// }

// for(var i=0;i<models.length;i++){
//     modelNames.innerHTML += `<option value = ${models[i]}>${models[i]}</option>`
// }
// let unorder = document.getElementById("unorder")
// function finalResult() {
//     unorder.innerHTML = "";
//     let res = Object.keys(copyObj[mobileNames.value][modelNames.value])
//     let res1 = Object.values(copyObj[mobileNames.value][modelNames.value])
        
//     for(var i=0;i<res.length;i++){    
//     unorder.innerHTML += `<li>${res[i]} ${res1[i]}</li>`
//     }
// }



let copyOfObj = {...mobiles}


let mobileNames = Object.keys(copyOfObj)

let modelIphones = Object.keys(copyOfObj.iphone)
let modelSamsung = Object.keys(copyOfObj.samsung)
let modelXiomi = Object.keys(copyOfObj.xiomi)
let modelInfinix = Object.keys(copyOfObj.infinix)

let models = [...modelIphones,...modelSamsung,...modelXiomi,...modelInfinix]





let IphoneModel1Keys = Object.keys(copyOfObj.iphone.x10)
let IphoneModel1Values = Object.values(copyOfObj.iphone.x10)

let IphoneModel2Keys = Object.keys(copyOfObj.iphone.x10Pro)
let IphoneModel2Values = Object.values(copyOfObj.iphone.x10Pro)

let IphoneModel3Keys = Object.keys(copyOfObj.iphone.x11)
let IphoneModel3Values = Object.values(copyOfObj.iphone.x11)

let IphoneModel4Keys = Object.keys(copyOfObj.iphone.x11Pro)
let IphoneModel4Values = Object.values(copyOfObj.iphone.x11Pro)



document.write(`<h1>${mobileNames[0]}</h1>`)

document.write(`<h2>${modelIphones[0]}</h2>`)
for (var i=0;i<IphoneModel1Keys.length;i++){
    document.write(`<li>${IphoneModel1Keys[i]} : ${[IphoneModel1Values[i]]}</li>`)
}

document.write(`<h2>${modelIphones[1]}</h2>`)
for (var i=0;i<IphoneModel1Keys.length;i++){
    document.write(`<li>${IphoneModel1Keys[i]} : ${[IphoneModel2Values[i]]}</li>`)
}
document.write(`<h2>${modelIphones[2]}</h2>`)
for (var i=0;i<IphoneModel1Keys.length;i++){
    document.write(`<li>${IphoneModel1Keys[i]} : ${[IphoneModel3Values[i]]}</li>`)
}
document.write(`<h2>${modelIphones[3]}</h2>`)
for (var i=0;i<IphoneModel1Keys.length;i++){
    document.write(`<li>${IphoneModel1Keys[i]} : ${[IphoneModel4Values[i]]}</li>`)
}
    

let samsungModelKeys = Object.keys(copyOfObj.samsung.s5)
let samsungModel1Values = Object.values(copyOfObj.samsung.s5)
let samsungModel2Values = Object.values(copyOfObj.samsung.s6)
let samsungModel3Values = Object.values(copyOfObj.samsung.s7)
let samsungModel4Values = Object.values(copyOfObj.samsung.s8)



document.write(`<h1>${mobileNames[1]}</h1>`)

document.write(`<h2>${modelSamsung[0]}</h2>`)
for (var i=0;i<samsungModelKeys.length;i++){
    document.write(`<li>${samsungModelKeys[i]} : ${[samsungModel1Values[i]]}</li>`)
}


document.write(`<h2>${modelSamsung[1]}</h2>`)
for (var i=0;i<samsungModelKeys.length;i++){
    document.write(`<li>${samsungModelKeys[i]} : ${[samsungModel2Values[i]]}</li>`)
}

document.write(`<h2>${modelSamsung[2]}</h2>`)
for (var i=0;i<samsungModelKeys.length;i++){
    document.write(`<li>${samsungModelKeys[i]} : ${[samsungModel3Values[i]]}</li>`)
}


document.write(`<h2>${modelSamsung[3]}</h2>`)
for (var i=0;i<samsungModelKeys.length;i++){
    document.write(`<li>${samsungModelKeys[i]} : ${[samsungModel4Values[i]]}</li>`)
}
    

let xiomiModelKeys = Object.keys(copyOfObj.xiomi.i5)
let xiomiModel1Values = Object.values(copyOfObj.xiomi.i5)
let xiomiModel2Values = Object.values(copyOfObj.xiomi.i6)
let xiomiModel3Values = Object.values(copyOfObj.xiomi.i7)
let xiomiModel4Values = Object.values(copyOfObj.xiomi.i8)


document.write(`<h1>${mobileNames[2]}</h1>`)

document.write(`<h2>${modelXiomi[0]}</h2>`)
for (var i=0;i<xiomiModelKeys.length;i++){
    document.write(`<li>${xiomiModelKeys[i]} : ${[xiomiModel1Values[i]]}</li>`)
}

document.write(`<h2>${modelXiomi[1]}</h2>`)
for (var i=0;i<xiomiModelKeys.length;i++){
    document.write(`<li>${xiomiModelKeys[i]} : ${[xiomiModel2Values[i]]}</li>`)
}

document.write(`<h2>${modelXiomi[2]}</h2>`)
for (var i=0;i<xiomiModelKeys.length;i++){
    document.write(`<li>${xiomiModelKeys[i]} : ${[xiomiModel3Values[i]]}</li>`)
}

document.write(`<h2>${modelXiomi[3]}</h2>`)
for (var i=0;i<xiomiModelKeys.length;i++){
    document.write(`<li>${xiomiModelKeys[i]} : ${[xiomiModel4Values[i]]}</li>`)
}

let infinixModelKeys = Object.keys(copyOfObj.infinix.Hot8)
let infinixModel1Values = Object.values(copyOfObj.infinix.Hot8)
let infinixModel2Values = Object.values(copyOfObj.infinix.Hot8Pro)
let infinixModel3Values = Object.values(copyOfObj.infinix.Hot9)
let infinixModel4Values = Object.values(copyOfObj.infinix.Hot9Pro)

document.write(`<h1>${mobileNames[3]}</h1>`)

document.write(`<h2>${modelInfinix[0]}</h2>`)
for (var i=0;i<infinixModelKeys.length;i++){
    document.write(`<li>${infinixModelKeys[i]} : ${[infinixModel1Values[i]]}</li>`)
}

document.write(`<h2>${modelInfinix[1]}</h2>`)
for (var i=0;i<infinixModelKeys.length;i++){
    document.write(`<li>${infinixModelKeys[i]} : ${[infinixModel2Values[i]]}</li>`)
}

document.write(`<h2>${modelInfinix[2]}</h2>`)
for (var i=0;i<infinixModelKeys.length;i++){
    document.write(`<li>${infinixModelKeys[i]} : ${[infinixModel3Values[i]]}</li>`)
}

document.write(`<h2>${modelInfinix[3]}</h2>`)
for (var i=0;i<infinixModelKeys.length;i++){
    document.write(`<li>${infinixModelKeys[i]} : ${[infinixModel4Values[i]]}</li>`)
}




const asycnAwaitComponent = (element)={


}


const promesaLenta = ()=>new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Promesa Lenta")
    }, 5000);
})

const promesaRapida = ()=>new Promise((resolve)=>{
setTimeout(() => {
    resolve("Promesa Rapida")
}, 1000);
})

const promesaMedio = ()=>new Promise((resolve)=>{
setTimeout(() => {
    resolve("Promesa media")
}, 1000);
})
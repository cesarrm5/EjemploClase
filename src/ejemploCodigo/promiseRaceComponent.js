

export const promiseRaceComponent = (element)=>{
    console.log("race")

    const rederTitle = (value)=>{
        element.innerHTML = value;
    }

    Promise.race([
        promesaLenta(),
        promesaMedio(),
        promesaRapida()
    ]).then(rederTitle)
    

}

const promesaLenta = ()=>new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Promesa Lenta")
        }, 3000);
    })

const promesaRapida = ()=>new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Promesa Rapida")
    }, 8000);
})

const promesaMedio = ()=>new Promise((resolve)=>{
    setTimeout(() => {
        resolve("Promesa media")
    }, 2000);
})
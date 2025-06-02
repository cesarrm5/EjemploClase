import {heroes} from "../data/heroes" 

export const promesa = (element)=>{
    let id1= "5d86371f1efebc31def272e2";
    let id2= "5d86371f2343e37870b91ef1";
    const heroData = encontrarHeroe(id1);
    const heroData2 = encontrarHeroe(id2);

    Promise.all([
        heroData,
        heroData2
    ]).then(
        ([hero1, hero2])=>{element.innerHTML = `${hero1.name}/${hero2.name}`}
    )
    .catch(
        error => element.innerHTML = error
    )
  

    /*let heroe1 = "";
    const heroData = encontrarHeroe(id1);
    heroData.then(
        //hero => element.innerHTML = hero
        //(hero) => {element.innerHTML = hero.name}
       hero => heroe1 = hero.name
    )
    .catch(
        error => element.innerHTML = error
    )
    const heroData2 = encontrarHeroe(id2);
    heroData2.then(
        //hero => element.innerHTML = hero
        (hero) => {element.innerHTML = `${heroe1}/${hero.name}`}
    )
    .catch(
        error => element.innerHTML = error
    )
    console.log ()
    */
}

const encontrarHeroe = (id)=>{
    const promesa1  = new Promise((resolve, reject)=>{
        console.log("ejecuntado Promesa");
        const hero =  heroes.find(heroe => heroe.id===id)
        if(hero){
            resolve(hero)
            return;
        }
        reject (`El heroe con el id ${id} no existe`)
    });
    return promesa1;
}
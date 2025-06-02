import { heroes } from "../data/heroes"

export const callback = (elemento) =>{

    let id;
    id= "5d86371f1efebc31def272e2";
    //id = "5d86371f2343e37870b91e"
    /*const hero = findHero(id);

    const printName = (elemento) => {
        elemento.innerHTML = hero.name
    }

    printName(elemento)*/
    
    const findHero = (id,printName)=> {
        const hero = heroes.find(hero=>hero.id===id)
        printName(hero,elemento)
        return hero
       }

    findHero(id, (hero, elemento) => {
        if(hero) {
            elemento.innerHTML = hero.name  
        }
        else {elemento.innerHTML =`El elemento con el ID ${id} no existe`}
    });


}




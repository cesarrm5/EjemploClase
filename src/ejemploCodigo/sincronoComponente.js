import { heroes} from "../data/heroes"
import { callback } from "./callback";

export const sincronoComponente = async(element)=>{
    console.log("sincronoComponente");
    const id = "5d86371f1efebc31def272e2";
    /*const heroe = buscarhero(id);
    heroe.then(heroe=>element.innerHTML=heroe.name)
    .catch(error=>element.innerHTML=error)
    */
    const heroe = await buscarhero(id);
    element.innerHTML = heroe.name;
    console.log(heroe);
} 
const buscarhero= async (id)=>{
    const heroe=heroes.find(hero=>hero.id===id)
    if(!heroe)
        throw `El heroe con el id ${id} no existe` 
    return heroe
}

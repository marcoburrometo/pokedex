import { useState } from "react";
import lista from '../constants/pokemonList'
import Input from "./input/input";
import "./ListaPoke.scss"
import PokeCard from './PokeCard';

function ListaPoke() {
    const [filtro, setFiltro] = useState("");
    const listaFiltrata = lista.filter(item => {
        return (
            item.name.toLowerCase().indexOf(filtro.toLowerCase()) > -1
        )
    });

    return (
        <div className='container-list'>
            {/* <input value={filtro} onChange={function (ev) {
                setFiltro(ev.target.value.toUppercase());
            }} /> */}
            <Input value={filtro} onChange={setFiltro} />

            {
                listaFiltrata.map((item) => (
                    <PokeCard
                        key={item.name}
                        name={item.name}
                        image={item.image}
                        types={item.types}
                    />
                )
                )
            }
        </div>

    )
}
export default ListaPoke;
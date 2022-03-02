import { useEffect, useState } from "react";
import Input from "./input/input";
import "./ListaPoke.scss"
import PokeCard from './PokeCard';
import { Audio } from 'react-loader-spinner'

function ListaPoke() {
    const [filtro, setFiltro] = useState("");
    const [lista, setLista] = useState([]);
    const [loading, setloading] = useState(true);

    const fetchPoke = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => {
                return response.json();
            }).then(data => {
                // Questi sono i risultati effettivi
                console.log(data);
                setLista(data.results);
                setloading(false);
            }).catch(err => {
                console.error('ops', err);
            });
    };

    // All'avvio, chiamo API per lista
    useEffect(() => {
        fetchPoke();
    }, []);

    return (
        <div className='container-list'>
            {/* <input value={filtro} onChange={function (ev) {
                setFiltro(ev.target.value.toUppercase());
            }} /> */}

            {loading ? (<Audio color="#00BFFF" height={120} width={120} />) : (
                <>
                    <Input value={filtro} onChange={(nuovoValore) => {
                        setFiltro(nuovoValore);
                    }} />
                    {
                        lista.map((item) => (
                            <PokeCard
                                key={item.name}
                                url={item.url}
                                nascosto={item.name.toLowerCase().indexOf(filtro.toLowerCase()) === -1}
                            />
                        ))
                    }
                </>
            )}

        </div>

    )
}
export default ListaPoke;
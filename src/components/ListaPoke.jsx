import { useEffect, useState } from "react";
import Input from "./input/input";
import "./ListaPoke.scss"
import PokeCard from './PokeCard';
import { Audio } from 'react-loader-spinner'
import TextField from '@mui/material/TextField';

function ListaPoke() {
    const [filtro, setFiltro] = useState("");
    const [lista, setLista] = useState([]);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(true);

    const fetchPoke = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then(response => {
                // throw Error('No internet');
                return response.json();
            }).then(data => {
                // Questi sono i risultati effettivi
                console.log(data);
                setError('');
                setLista(data.results);
            }).catch(err => {
                console.error('ops', err);
                setError('Si è verificato un errore: ' + err);
            }).finally(() => {
                setloading(false);
            });
    };

    // All'avvio, chiamo API per lista
    useEffect(() => {
        fetchPoke();
    }, []);

    if (error.length > 0) {
        return (
            <h2>{error}</h2>
        )
    }

    return (
        <div className='container-list'>
            {/* <input value={filtro} onChange={function (ev) {
                setFiltro(ev.target.value.toUppercase());
            }} /> */}

            {loading ? (<Audio color="#00BFFF" height={120} width={120} />) : (
                <>
                    {/* <Input value={filtro} onChange={(nuovoValore) => {
                        setFiltro(nuovoValore);
                    }} /> */}
                    <TextField
                        label="Cerca un pokemon"
                        variant="standard"
                        fullWidth={true}
                        value={filtro}
                        margin="normal"
                        onChange={(ev) => {
                            setFiltro(ev.target.value);
                        }}
                    />

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
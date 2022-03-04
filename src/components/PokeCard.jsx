import { useEffect, useState } from "react";
import Badge from "./badge/badge";
import { Audio } from 'react-loader-spinner'
import "./PokeCard.scss"

// Se ho il mouse sopra alla PokeCard
// voglio vedere l'immagine front_shiny
// altrimenti voglio vedere l'immagine front_default

function PokeCard({ url, nascosto }) {
    const [data, setData] = useState();
    const [loading, setloading] = useState(true);
    const [mouseOver, setMouseOver] = useState(false);
    const fetchPokeDetails = () => {
        fetch(url)
            .then(response => {
                return response.json();
            }).then(remoteData => {
                // Questi sono i risultati effettivi
                console.log(remoteData);
                setData(remoteData);
                setloading(false);
            }).catch(err => {
                console.error('ops', err);
            });
    };
    useEffect(() => {
        fetchPokeDetails();
    }, [url]);

    if (nascosto) {
        return null;
    }

    if (loading) {
        return (
            <div className='item-list'>
                <Audio color="#ff00aa" height={40} width={40} />
            </div>
        );
    }

    return (
        <div
            className="item-list"
            onMouseOver={() => {
                setMouseOver(true);
            }}
            onMouseOut={() => {
                setMouseOver(false);
            }}
        >
            <div>
                <h1 className="title">{data.name} {mouseOver ? '*' : ''}</h1>
            </div>
            <div className='properties'>
                <img
                    src={mouseOver ? data.sprites.front_default : data.sprites.back_default}
                    alt={data.name}
                />
                <div className="type">
                    {data.types.map((item) => {
                        return (
                            <Badge key={item.type.name}>
                                {item.type.name}
                            </Badge>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default PokeCard;
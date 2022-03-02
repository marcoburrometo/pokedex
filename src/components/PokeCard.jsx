import Badge from "./badge/badge";
import "./PokeCard.scss"


function PokeCard({ name, image, types }) {
    return (
        <div className='item-list'>
            <div>
                <h1 className="title">{name}</h1>
            </div>
            <div className='properties'>
                <img src={image} alt={name}></img>
                <div className="type">
                    {types.map((item) => {
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
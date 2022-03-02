import './badge.scss';

function Badge(props) {
    return (
        <div className="badge">
            {props.children}
        </ div>
    )
}

export default Badge;
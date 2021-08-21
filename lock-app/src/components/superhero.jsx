function Hero(props) {
    return (
        <div className="hero-card">
            <img src={props.url}/>
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe">{props.universe}</div>
            <div className="hero-ego">{props.ego}</div>
            <div className="hero-cereer">{props.career}</div>
            <div className="hero-friends">{props.friends}</div>
            <div className="hero-power">{props.power}</div>
            <div className="hero-more">{props.more}</div>
        </div>
    );
}

export default Hero;
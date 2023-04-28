

export const ItemFooter = (props) => {
    return(
        <div className="footerItem">
           <img className="footerImg" src={props.img}/>
            <h1>{props.titel}</h1>
            <p className="footerP">{props.text}</p>
        </div>
    )
}
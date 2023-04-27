

export const AboutUs = (props) => {
    return(
        <div className="aboutUs">
            <div className="aboutUsH">
               <h1>{props.h}</h1> 
            </div>
            <div className="aboutUsP">
               <p>{props.text}</p> 
            </div>
        </div>
    )
}
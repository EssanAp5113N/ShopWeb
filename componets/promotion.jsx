import { ItemProm } from "./itemProm"

export const Promotion = () => {
    return(
        <div className="promotion">
            <div className="promP" >
               <p>Акции</p> 
            </div>
            <div className="promItem">
                <ItemProm img="https://ohpizza.ru/wp-content/uploads/2021/04/2.jpg"/>
                <ItemProm img="https://ohpizza.ru/wp-content/uploads/2021/04/2.jpg"/>
            </div>
        </div>
    )
}
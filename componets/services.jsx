import { ItemSer } from "./itemSer"

export const Services = () => {

    return(
        <div className="servicesB">
            <p>Услуги</p>
            <div className="servicesI">
                <div>
                <ItemSer  img = "https://www.welcome-group.ru/upload/iblock/c80/c8095b7c312885029fa6149c9b751015.jpg" title = "Боулинг" tit="Jkkk" />
                <ItemSer  img = "https://www.welcome-group.ru/upload/iblock/c80/c8095b7c312885029fa6149c9b751015.jpg" title = "Боулинг" /> 
                </div>
                <div>
                   <ItemSer  img = "https://www.welcome-group.ru/upload/iblock/c80/c8095b7c312885029fa6149c9b751015.jpg" title = "Боулинг" />
                <ItemSer  img = "https://www.welcome-group.ru/upload/iblock/c80/c8095b7c312885029fa6149c9b751015.jpg" title = "Боулинг" /> 
                </div>
            </div>
        </div>

    )
}
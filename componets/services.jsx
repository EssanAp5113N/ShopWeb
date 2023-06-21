import { ItemSer } from "./itemSer"

export const Services = () => {

    return(
        <div className="servicesB">
            <p>Услуги</p>
            <div className="servicesI">
                <div>
                <ItemSer  img = "https://www.welcome-group.ru/upload/iblock/c80/c8095b7c312885029fa6149c9b751015.jpg"  title = "Боулинг" link="#" />
                <ItemSer  img = "https://n1s1.elle.ru/0f/ad/c3/0fadc3dee09bd6109a851542fe3354a5/728x485_1_d52ced0fe308deae81379fa55ab33b00@1242x828_0xac120003_8904654641573647523.jpeg" title = "Бар" link=""/> 
                </div>
                <div>
                   <ItemSer  img = "https://iz-dereva-rukami.ru/wp-content/uploads/c/e/3/ce3d4aaa528bdf54a47977eeb481c57c.jpeg" title = "Кофе" link="#" />
                <ItemSer  img = "https://avatars.mds.yandex.net/get-altay/7379963/2a00000183bb9e12e697494b1e548fe773c1/XXL" title = "Бильярд" link="#"/> 
                </div>
            </div>
        </div>

    )
}
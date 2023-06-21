import { ItemFooter } from "./itemFooter"

export const Footer = () => {
    return(
        <footer>
            <div className="footerI">
                <ItemFooter img="https://avatars.mds.yandex.net/i?id=2517c9da1f09f38fb20e9e9255194de0e8a667bb-9220933-images-thumbs&n=13" titel="Контакты" text="+7 999 176 28 68"/>
                <ItemFooter img="https://avatars.mds.yandex.net/i?id=760a0436aec7199600eab33e4db66f8097c5c7d2-8199955-images-thumbs&n=13" titel="Адрес" text="ХМАО-Югра, г. Нижневартовск,ул. 60 лет Октября, д.18/1,отдельный вход со стороны стадиона"/>
                <ItemFooter img="https://avatars.mds.yandex.net/i?id=d11a7459b5570a3bbb44b4d914bb9caeeeaf13e6-7886515-images-thumbs&n=13" titel="Время работы" text="Ежедневно с 19.00 до 1.00"/>
            </div>
            <div> ©️ 2023 Все права защищены</div>
        </footer>
    )
}
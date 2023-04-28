import { ItemFooter } from "./itemFooter"

export const Footer = () => {
    return(
        <footer>
            <div className="footerI">
                <ItemFooter img="https://png.pngtree.com/png-vector/20191011/ourlarge/pngtree-phone-icon-png-image_1817554.jpg" titel="Контакты" text="+7 999 176 28 68"/>
                <ItemFooter img="https://png.pngtree.com/png-vector/20191011/ourlarge/pngtree-phone-icon-png-image_1817554.jpg" titel="Адрес" text="ХМАО-Югра, г. Нижневартовск,ул. 60 лет Октября, д.18/1,отдельный вход со стороны стадиона"/>
                <ItemFooter img="https://png.pngtree.com/png-vector/20191011/ourlarge/pngtree-phone-icon-png-image_1817554.jpg" titel="Время работы" text="Ежедневно с 19.00 до 1.00"/>
            </div>
            <div> ©️ 2023 Все права защищены</div>
        </footer>
    )
}
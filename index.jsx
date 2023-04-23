import { Header } from "./componets/header"
import { AboutUs } from "./componets/aboutUs"
import { Services } from "./componets/services"
import { Footer } from "./componets/footer"


const Home = () => {
    return(
        <div className="wrapper">
            <Header />
            <AboutUs h = "О нас" text = "Клуб «Братец кролик» приглашает вас провести несколько незабываемых часов за игрой в боулинг или бильярд. Выбирая наш боулинг-клуб для проведения корпоративного праздника или хорошего время препровождения, Вы гарантированно получаете элемент азарта, и возможность пообщаться с друзьями и коллегами в непринужденной обстановке."/>
            <Services/>
            <Footer />
        </div>
    )
}

export default Home
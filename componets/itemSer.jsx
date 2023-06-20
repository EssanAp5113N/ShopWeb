

export const ItemSer = (props) => {
    const servPanels = [
        { id: 1,
        title: "Боулинг",
        img: "" 
    },
        { id: 2,
        title: "Бар",
        img: ""
    },
        { id: 3,
        title: "Бильярд",
        img: ""
    },
        { id: 4,
        title: "Кофе",
        img: ""
    }
    ]


    const PanelsName = servPanels.map((serv) => {
        <div>
            <img src={serv.img}/>
            <h1>{serv.title}</h1>
        </div>
    })


    return(
        <div className="serDop">
            <img className="serI" src={props.img}/>
            <div className="nameSer">
                <h1 className="serH">{props.title}</h1>
                <a className="serA" href={props.link}>Подробнее</a>
            </div>
            
        </div>
    )
}
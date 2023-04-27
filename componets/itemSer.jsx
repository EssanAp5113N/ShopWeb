

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
            <h1 className="nameSer">{props.title}</h1>
            <div className="nameSer">{props.tit}</div>
        </div>
    )
}
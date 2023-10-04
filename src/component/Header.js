

export default function Headerjs(props){
   

    
    return(
        <>
        <div className="header">
            <div className="header1">
                <h1><a href=""><img src="./img/logo.svg" alt="" /></a></h1>
            </div>
            <div className="header2  mb-sm-1 mb-md-2 mb-lg-5">
                <ul id="gnb" className="d-flex justify-content-center justify-content-md-start">
                    {props.data.Hdata.map((item, index)=>{
                        return(
                            <li className="ms-4">
                                <a href="">{item.name}</a>
                                <ul>
                                    <li><a href=""></a></li>
                                </ul>
                            </li>
                        )
                    })
                    }
                </ul>
                <div>

                </div>
            </div>
        </div>
        </>
        )
    }
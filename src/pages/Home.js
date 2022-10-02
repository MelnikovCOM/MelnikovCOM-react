import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = ({userName}) =>{

    return(
        <div style={{display:'flex', alignItems:'center',justifyContent:"center", flexGrow:1}}>
            <h1>Добро пожаловать, {userName}</h1>
        </div>
    )
}

export default HomePage
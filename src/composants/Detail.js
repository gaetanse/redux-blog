import { Card } from "react-bootstrap"
import { useLocation,useNavigate } from "react-router-dom"

function Detail(){
    const {state} = useLocation()
    const {title,body} = state.element
    const navigate = useNavigate()
    return(
        <Card style={{boxShadow: "inset 0 0 5px 5px grey" }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{body}</Card.Text>
                <button className="btn btn-primary" onClick={()=>navigate('/')}>Retour</button>
            </Card.Body>
        </Card>
    )
}
export default Detail
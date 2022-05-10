import { useEffect, useState } from "react"
import axios from 'axios'
import { Card,Col,Row } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

function Accueil(_props){

    const listeArticles = useSelector(state => state.listeArticles)
    const nosArticles = useSelector(state => state.nosArticles)

    const [jsonCharger,setjsonCharger] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    useEffect(() => {
        if(!jsonCharger){
            setjsonCharger(true)
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
              const articles = res.data
              articles.map(e=>{
                  return(
                    dispatch({
                        type: "UPDATEJSON",
                        payload: e
                    })
                  )
              })
            })
        }
    })

    function afficherDetail(e,el){
        e.preventDefault()
        navigate('/detail', { state: { element: el } });
    }

    const autreSens = [...nosArticles].reverse()

    const tousEnsemble = autreSens.concat(listeArticles)

        return ( 
        <div>
            
            {
                tousEnsemble.length === 0 ? <p>Aucun article personnel</p>
                : 
                <Row xs={1} md={4} className="g-2">
                {tousEnsemble.map((e,i)=>{

                    let color = ""

                    if(e.id>=500){
                        color = "inset 0 0 5px 5px blue"
                    }
                    else{
                        color = "inset 0 0 5px 5px red"
                    }

                    return(
                        <Col key={i}>
                            <Card style={{ width: '200px', height: '200px', boxShadow: color }}>
                                <Card.Body>
                                    <Card.Title>{e.title}</Card.Title>
                                    <Card.Text>{e.contenu}</Card.Text>
                                    <button className="btn btn-primary" onClick={event=>afficherDetail(event,e)}>Détail</button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
                </Row>
            }

        </div> 
        );
    }
 
export default Accueil;
import { useState } from "react"
import { Form,Button } from "react-bootstrap"
import { useDispatch,useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom'

function Ecrire(){
    const [titre,setTitre] = useState(undefined)
    const [contenu,setContenu] = useState(undefined)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const nosArticles = useSelector(state => state.nosArticles)
    function ajouterArticle(e){
        e.preventDefault()
        dispatch({
            type: "UPDATEPERSO",
            payload: {
                id: nosArticles.length+500,
                title: titre,
                body: contenu
            }
        })
        navigate('/')
    }
        return ( 
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titre</Form.Label>
                    <Form.Control onChange={(e)=>setTitre(e.target.value)} defaultValue={titre} type="text" placeholder="Entrez le titre" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Contenu</Form.Label>
                    <Form.Control  as="textarea" rows={10} onChange={(e)=>setContenu(e.target.value)} defaultValue={contenu} type="text" placeholder="Entrez le contenu" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={e=>ajouterArticle(e)}>
                    Ajouter l'article
                </Button>
            </Form>
         );
}
 
export default Ecrire;
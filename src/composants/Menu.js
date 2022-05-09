import { Component } from "react"
import { Link } from "react-router-dom"

class Menu extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/ecrire">Ecrire</Link>
                <Link to="/contact">Contact</Link>
            </div>
         );
    }
}
 
export default Menu;
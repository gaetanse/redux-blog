import { Component } from "react"
import axios from 'axios'

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            listeArticles: [],
            nosArticles: []
        }
    }
    render() { 
        return ( 
        <div>
            {this.state.nosArticles.map(e=>{
                return(
                    <>
                        <p>{e.title}</p>
                        <button>Lien</button>
                    </>
                )
            })}
            {this.state.listeArticles.map(e=>{
                return(
                    <>
                        <p>{e.title}</p>
                        <button>Lien</button>
                    </>
                )
            })}
        </div> 
        );
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
          const articles = res.data;
          console.log(articles)
          this.setState({ nosArticles: articles });
        })
    }
}
 
export default Accueil;
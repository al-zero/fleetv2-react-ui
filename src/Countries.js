import React,{Component} from "react";
import axios from "axios";


class Countries extends Component{

    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }
    componentDidMount(){
        axios.get('http://127.0.0.1:8082/api/countries').then(response => {
            console.log(response);
        })
    }
    render() {
        return (
            <div><h1>Country list</h1></div>
        )
    }
}

export default Countries
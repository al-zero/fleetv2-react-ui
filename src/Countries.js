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
            this.setState({countries:response.data})
        })
    }
    render() {
        const {countries} = this.state
        return (
            <div className={'container'}><h2>Country list</h2>
                <table className="table table-striped table-advance table-hover">
                    <thead>
                    <tr>
                        <td>Id</td>
                        <td>Description</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        countries.map(function (country) {
                           return <tr>
                                <td>{country.id}</td>
                                <td>{country.description}</td>
                            </tr>

                        })
                    }
                    </tbody>
                </table>
            </div>

        )
    }
}

export default Countries
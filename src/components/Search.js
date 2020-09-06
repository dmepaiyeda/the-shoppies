import React from 'react';
import {Form, Col} from 'react-bootstrap';

class Search extends React.Component{
    
    constructor(props){
        super(props);
        const movieName = "";
        this.state = {
            movieData: [],
        }
    }
    
    //http://www.omdbapi.com/?t=Guardians+of+the+Galaxy&y=2017

    componentDidMount(){

        Promise.all([
            fetch(
                "http://www.omdbapi.com/?i=tt3896198&apikey=5895d968"
            ),
        ])
        .then((responses) => 
            Promise.all(responses.map((response) => response.json())) 
        )
        .then((data) => {
            console.log(data[0]);
            this.setState({
                movieData: data,
            });
        })
        .catch((error) => console.log(error));

    }

    render(){
        const searchBox = (
            <div>
                
                <Form>
                    <Col md="auto" sm={5}>
                        <h6>Movie title</h6>
                        <Form.Control className="search-box" type="text" placeholder="Search for a movie"/>
                    </Col>
                </Form>
            </div>
        );

        return(
            <div>
                
                {searchBox}

            </div>

        );
    }
}

export default Search;
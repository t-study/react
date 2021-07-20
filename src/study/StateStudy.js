import react, {Component} from 'react';

class StateStudy extends Component{
    constructor(props){
        super(props);

        this.state = {
            number : 0
        };
    }
    render(){
        const number = this.state.number;
        return (
            <div>
                <h1>{number}</h1>
                <button onClick=
                {
                    (e) => {
                        console.log(this);
                        console.log(e);
                        this.setState({number : number + 1});
                        console.log(this.state.number);
                    }
                    /**
                    function(e){
                        console.log(this);
                        console.log(e);
                        this.setState({number : number + 1});
                    }.bind(this)
                    */
                    
                }
                >
                    +1
                </button>
            </div>            
        )
    }
}

export default StateStudy;
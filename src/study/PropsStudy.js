import react, {Component} from 'react';

class PropsStudy extends Component{
    render(){
        const style = {
            backgroundColor : 'yellow'
            , width : '100%'
            , height : '300px'
        }
        return (
            <div style={style}>
                {this.props.txt} <br/>
                {this.props.defaultTest} <br/>
                {this.props.changeable} <br/>
            </div>
        );
    }
}

PropsStudy.defaultProps = {
    defaultTest : '기본 props 입니다.'
};

export default PropsStudy;
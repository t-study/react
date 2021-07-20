import react, {Component} from 'react';
import PropsStudy from './PropsStudy';
import StateStudy from './StateStudy';
/** class 방식을 사용할 경우 필수 */

class Study extends Component{
    name;
    text = '문자열';
    
    /** 생성자 변경 시 에러 발생
    constructor(){
        this.name = '생성자 name'
        this.text = '생성자 문자열'
    }
    */

    render(){
        const style = {
            backgroundColor : 'red'
        }
        /**
        * var scope 가 함수 단위
        * let, const scope 가 Block 단위
        */
        var name = 'Class_var';
        name = this.text;
        // const name = 'Class_const';  
        // let name = 'Class_let';
        let changeable = '변경가능';
        return (
            <div style={style}>
                {name}
                <br/>
                <PropsStudy txt="props 확인하기" changeable={changeable} />
                <StateStudy />
            </div>
        );
    }
  }

export default Study;
import * as React from 'react';

class MyList extends React.Component{
    render(){
        const {items}=this.props;
        return(
            items.map((i)=>(
                <ul>
                    <li key={i}>{i}</li>
                </ul>
            ))
        )
    }
}
export default MyList;
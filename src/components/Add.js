import React from 'react';

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            input: '',
            price: 1
        };
    }
    
    render() {
        console.log( 'cmp/Add#render this.props', this.props);

        return (
            <div>
                Add
            </div>
        );
    }
}
export default Add;
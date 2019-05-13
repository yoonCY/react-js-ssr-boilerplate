import React from 'react';

class App extends React.Component {

    constructor(props){
        super(props)
        console.log( "props",props );
    }

    render() {
        return <h1>SSR Hello World {this.props.id} </h1>;
    }
}

export default App;

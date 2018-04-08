import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div>
                <p>Running this app now...</p>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
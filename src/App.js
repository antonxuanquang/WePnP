import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home/Body';
import './static/css/dashicons.min.css';
import './static/css/editor.min.css';
import './static/css/inline.css';
import './static/css/style.min.css';
import './static/css/custom.css';

class App extends Component {
    render() {
		return (
			<div>
                <Header />
        		{this.props.children || <Home/>}
        		<Footer />
			</div>
		)
	}
}

export default App;
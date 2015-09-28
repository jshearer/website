import React from 'react';

import './styles.scss';

import '../../semantic/dist/components/grid.css';
import '../../semantic/dist/components/segment.css';

import {Navbar} from '../Navbar/Navbar';

export class App extends React.Component {
  render() {
    return (
    	<div>
	    	<div id="masthead" className="ui inverted vertical center aligned segment">
	    		<h1 className="header">
	    			Joseph Shearer
	    		</h1>
	    		<h4 className="subHeader">
	    			.net
	    		</h4>
	    	</div>
	    	<div className="ui ten column page grid">
	    		<div className="ui two wide column">
		    		<Navbar routes={this.props.routes[0].childRoutes}/>
		    	</div>
		    	<div className="ui one wide column"/>
		    	<div className="ui six wide column">
			    	{this.props.children}
			    </div>
		    </div>
	    </div>
    );
  }
}

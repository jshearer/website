import React from 'react';

import visitor from '../../ga';

import './styles.scss';

import '../../semantic/dist/components/grid.css';
import '../../semantic/dist/components/segment.css';
import '../../semantic/dist/components/rail.css';

import {Navbar} from '../Navbar/Navbar';
import FluxComponent from 'flummox/component';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			active_page: null
		}
		visitor.pageview('/').send();
	}

	getStateFromFlux() {
    var flux = this.getFlux();
    return flux.store("PageStateStore").getState();
  }

  static willTransitionTo(){
  	alert(arguments);
  }

  render() {
  	let a = 1;
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
	    	<div className="ui stackable grid">
		    	<div className="ui one wide column" />
		    	<div className="ui two wide computer sixteen wide mobile column">
			    	<FluxComponent>
		    			<Navbar routes={this.props.routes[0].childRoutes} active_page={this.state.active_page} vertical={true} stickyTo="#page-container"/>
		    		</FluxComponent>
		    	</div>
		    	<div className="ui twelve wide computer sixteen wide mobile column">
			    	<div className="ui segment" id="page-container">
			    		<FluxComponent>
					    	{this.props.children}
					    </FluxComponent>
	    			</div>
			    </div>
		    </div>
	    </div>
    );
  }
}

export {App};
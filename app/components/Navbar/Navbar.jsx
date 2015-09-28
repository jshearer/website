import '../../semantic/dist/components/menu.css';

import React from 'react'; 
import { Link } from 'react-router';
import _ from 'lodash';

let letter_words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen']

export class Navbar extends React.Component {

	render() {
		let layout = (
				<div className={"ui vertical menu"}>
					{
						_.map(this.props.routes, (item, index)=>{
							let active = '';
							// if (item.isMounted()){
							// 	active = 'active';
							// }

							return (
										<a className={"ui "+active+" item"} href={"#/"+item.path}>
											{item.path.charAt(0).toUpperCase() + item.path.slice(1)}
										</a>
									)
						})
					}
				</div>
			);
		return layout;
	}
}

Navbar.propTypes = {
		routes: React.PropTypes.array
	}
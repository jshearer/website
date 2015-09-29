import '../../semantic/dist/components/menu.css';
import $ from 'jquery';
import '../../semantic/dist/components/sticky.css';
import '../../semantic/dist/components/sticky.js';

import visitor from '../../ga';

import size from 'window-size';

import React from 'react'; 
import { Link } from 'react-router';
import _ from 'lodash';

let letter_words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen']

export class Navbar extends React.Component {

	nagivateTo(page,evt){
		visitor.pageview('/'+page.path).send();
		this.props.flux.getActions('pages').changePage(page.path);
	}

	componentDidMount(){
		if(this.props.stickyTo){
			$('.ui.sticky').sticky({
				offset: 20,
				context: this.props.stickyTo
			});
		}
	}

	render() {
		let that = this;

		let vertical = '';
		if(this.props.vertical){
			vertical = 'vertical';
		}

		let layout = (
				<div className={"ui "+vertical+" fluid sticky menu"}>
					{
						_.map(this.props.routes, (item, index)=>{
							let active = '';
							if (that.props.flux.getStore('pages').isActive(item.path)){
								active = 'active';
							}

							let disabled = '';
							if(!item.component){
								disabled = 'disabled';
							}

							return (
										<a className={"ui "+active+" "+disabled+" item"} onClick={_.bind(this.nagivateTo,that,item)} href={(()=>{
											if(item.component){
												return "#/"+item.path;
											} else{
												return null;
											}
										})()}>
											{item.path.charAt(0).toUpperCase() + item.path.slice(1)}
										</a>
									)
						})
					}
					<a className="ui disabled item"/>
					<div className="ui active item">
						More coming soon!
					</div>
				</div>
			);
		return layout;
	}
}

Navbar.propTypes = {
		routes: React.PropTypes.array
	}
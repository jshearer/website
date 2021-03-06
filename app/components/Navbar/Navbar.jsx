import '../../semantic/dist/components/menu.css';
import $ from 'jquery';
import '../../semantic/dist/components/sticky.css';
import '../../semantic/dist/components/sticky.js';

import styles from '!!style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!./_navbar.css';

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
		if(this.props.stickyTo && size.width>990){
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
										<a className={"ui "+active+" "+disabled+" item "+styles.menu_item} onClick={_.bind(this.nagivateTo,that,item)} href={(()=>{
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
				</div>
			);
		return layout;
	}
}

Navbar.propTypes = {
		routes: React.PropTypes.array
	}
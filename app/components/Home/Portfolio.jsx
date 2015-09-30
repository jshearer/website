import React from 'react';
import '../../semantic/dist/components/header.css';
import '../../semantic/dist/components/button.css';


export class Portfolio extends React.Component {
	render() {
		return (
			<div>
				<h2 className="ui dividing header">Google Drive</h2>
				<p>In the future, this page will have interactive demos of my work (mostly the front-end stuff, graphs, maps etc.), as well as videos and pictures of the projects I've done.
				While I get that set up, have a look around this google drive folder, which has pictures and videos of most of the things I've done.</p>
				<a className="ui primary big button" href="https://drive.google.com/open?id=0BwD_YYNSPXCHTi1iQ29qSTNpYmc">Pictures!</a>
				<h2 className="ui dividing header">Github</h2>
				<p>I also have a Github account where I try to store all of my work, polished or not. For example, the source code for this site is available here: <a href="https://github.com/jshearer/website">github.com/jshearer/website</a></p>
				<a className="ui primary big button" href="https://github.com/jshearer">Check out my Github!</a>
			</div>
		);
	}
}
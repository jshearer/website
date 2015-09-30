import React from 'react';
import '../../semantic/dist/components/image.css';
import '../../semantic/dist/components/segment.css';
import styles from '!!style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!./_about.css';
import me from '../../images/profile.jpg';

export class About extends React.Component {
	render() {
		return (
			<div>
				<img className="ui medium circular left floated image" src={me}/>
				<p className={styles.p}>Hey! I'm Joseph. I grew up in the middle of the woods and have been programming since I was 8 or 9. I'm a student at RIT studying Computer Science, though I'm considering switching to either Software Engineering or New Media Interactive Development, depending on how things go.</p>
				<p className={styles.p}>I really enjoy working on projects that have meaning or value to people. For example, this summer (summer of 2015) I worked at Boston Children's Hospital on software to manage a study of some 2000 teenagers' drug use. That work I did is potentially indirectly saving lives is amazing to me.</p>
				<p className={styles.p}>As well as impactful and world-changing, I also enjoy projects that are technically challenging (and as a result, technically rewarding to get right). Before I went to BCH for the summer, I worked with a long-time friend on a project to build a computer-controlled harpsichord. This project required an in-depth design phase in which we worked through many different designs and ideas before coming up with the one we ultimately used. The feeling of success when, after a week of actually implementing  months of hashed out designs, everything falls into place and works perfectly, is what motivates me. Eureka moment: <a href="https://goo.gl/photos/NcP63MsBqGG2FwLL7">here</a> </p> 
				<p className={styles.p}>I'm not only a coder though! I love photography, and have had a few exhibitions and art shows in the Rochester area (I won an award! Shiny!). I was an exchange student in Finland from the August 2012 to July 2013, where among other things, I did a lot of photography. My photos aren't currently online, but that is one of my many personal projects I have planned when I get time.</p>
				<div className={styles.p}>I also enjoy the outdoors and nature. I grew up in the woods of upstate New York, and as a result I've always had a fondness in my heart for all things <p className="ui green basic label">green</p> and not manmade. I love hiking, whittling, and making <p className="ui orange basic label">bonfires</p> of all sizes, as well as the inevitable deep and philosophical conversations that only occur when all participants are staring deeply into the heart of a bonfire.</div>
			</div>
		);
	}
}
import React from 'react';
import styles from '!!style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]!./_resume.css';

import '../../semantic/dist/components/label.css';

import '../../semantic/dist/components/progress.css';
import '../../semantic/dist/components/progress.js';

class SubjectContainer extends React.Component{
	render(){
		return (
			<div className={styles.subject_container}>
				<h2 className={styles['subject-title']}>{this.props.label}</h2>
				{this.props.children}
			</div>
		)
	}
}
SubjectContainer.propTypes = {
	label: React.PropTypes.string,
	children: React.PropTypes.arrayOf(ComponentContainer)
}

//Enforce that SubjectContainer's children must be ComponentContainers

class ComponentContainer extends React.Component{
	render(){
		let skills = _.map(this.props.skills, (skill) => {
			if(skill.bar){
				return <SkillBar {...skill}/>
			} else{
				return <Skill {...skill}/>;
			}
		})
		let right_info = ((skills) => {
		          		if(this.props.location||this.props.time||this.props.website){
		          			return (
			          					<div>
			          						<strong>{this.props.location}</strong><br />
			            					<em>{this.props.time}</em><br />
			            					<a href={this.props.website}>{this.props.website}</a>
			            					{this.props.right_info}
			            					{skills}
			            				</div>
		            				)
		          		} else {
		          			return this.props.right_info;
		          		}
		          	})(skills);
		return (
			<div className={styles["component-container"]}>
				<h3 className={styles.title}>{this.props.title}</h3>

		        <div className={styles["info-wrapper"]+" ui grid"}>
		          <div className="twelve wide column">
		           {this.props.children}
		          </div>

		          <div className="four wide column">
		          	{right_info}
		          </div>
		        </div>
			</div>
		)
	}
}

class SkillBar extends React.Component{
	render(){
		return (
				<div className={"ui tiny "+this.props.color+" progress"} data-percent={this.props.pct}>
				  <div className="bar" style={{"transition-duration": "300ms", "width": this.props.pct+"%"}}></div>
				  <div className="label">{this.props.name}</div>
				</div>
			);
	}
}

class Skill extends React.Component{
	render(){
		return (
				<div className={"ui medium "+this.props.color+" label "+styles['label-fix']} data-percent={this.props.pct}>{this.props.name}: {this.props.pct}%</div>
			);
	}
}


export class Resume extends React.Component {
	render() {
		return (
			<div className={styles.body}>
				<SubjectContainer label="Education">
					<ComponentContainer title="Rochester Institute of Technology" location="Rochester, NY" time="May 2020" 
						skills={[
								{"name":"Studying","pct":65,"color":"green","bar":true},
								{"name":"Learning","pct":80,"color":"blue","bar":true},
								{"name":"Sleeping","pct":0,"color":"olive","bar":true}
								]}>
						<p className={styles.p}>B.S Computer Science</p>
					</ComponentContainer>
				</SubjectContainer>
				<SubjectContainer label="Work Experience">
					<ComponentContainer title="CeASAR - The Center for Adolescent Substance Abuse Research @ Harvard Medical School" 
										location="Boston, MA" 
										time="June - August 2015"
										website="www.ceasar.org">
						<p className={styles.p}>Worked with other developers on multiple parts of the software supporting a multiple-thousand participant study, including:</p>
						<ul className={styles.ul}>
							<li className={styles.li}>Automated study participant call-back</li>
							<li className={styles.li}>Drip email system</li>
							<li className={styles.li}>Participant contact information verification</li>
							<li className={styles.li}>Application deployment, server provisioning on Heroku, AWS</li>
						</ul>
						<p className={styles.p}>Tools, languages, libraries used include:</p>
						<ul className={styles.ul}>
							<li className={styles.li}>Java web services with Jetty, Jackson etc.</li>
							<li className={styles.li}>Clientside interactive javascript communicating with remote APIs</li>
							<li className={styles.li}>Clojure data processing/email sending with Twilio/Mandrill</li>
							<li className={styles.li}>Angular/Jade/Sass/Scss/NodeJS</li>
						</ul>
					</ComponentContainer>
					<ComponentContainer title="Narwhal Systems" 
										location="Rochester, NY" 
										time="October 2014 - Present"
										website="www.narwhalsystems.com">
						<p className={styles.p}>Building reactive data visualizations and tools for ecological survey apps 
												for field biology research on (currently) Sea Turtles in Florida, 
												and Cotton Topped Tamarins in the Amazon rain forest, using:</p>
			            <ul className={styles.ul}>
			              <li className={styles.li}>Clientside Javascript frameworks</li>
			              <li className={styles.li}>Backend API server interactions</li>
			              <li className={styles.li}>Custom build tools (for Javascript preprocessing, concatenation, etc.)</li>
			              <li className={styles.li}>HTML/CSS for layout+styling</li>
			            </ul>
			            <p className={styles.p}>Visualizations and tools include:</p>
			            <ul className={styles.ul}>
			              <li className={styles.li}>Quantity of each type of food eaten by each cottontop clan</li>
			              <li className={styles.li}>Clan membership over time</li>
			              <li className={styles.li}>Sea Turtle nests on a geographic map</li>
			              <li className={styles.li}>Custom field collection editor</li>
			            </ul>
			            <p className={styles.p}>Other projects I am working on with Narwhal Systems include:</p>
			            <ul className={styles.ul}>
			              <li className={styles.li}>Planning the next phase: a fully clientside Javascript app that interacts with the server solely via RESTful apis.</li>
			              <li className={styles.li}>Built front facing website using WordPress &ndash; www.narwhalsystems.com</li>
			            </ul>
					</ComponentContainer>
					<ComponentContainer title="Designspring, Inc." 
										location="Westport, CT" 
										time="December 2014 - May 2015"
										website="www.designspring.com">
						<h3 className={styles.sub_title}>Harpsichord Project</h3>
						<p className={styles.p}>Working in collaboration with Designspring Inc. and the music department
			            at McGill University to design and develop a computer controlled analog
			            harpsichord. The computer will record and control the position of the
			            instrument&rsquo;s keys as they are played. This is useful to study how it is
			            played in different situations, as well as to play back recorded music at
			            higher resolution and accuracy that would be normally possible using a
			            standard MIDI file.</p>

			            <ul className={styles.ul}>
			              <li className={styles.li}>Developing interactive Web UI to control the harpsichord&rsquo;s state,
			              including starting and stopping playback, record mode, MIDI input mode,
			              etc.</li>

			              <li className={styles.li}>Designing and implementing a state machine and series of states and
			              possible transitions to control the harpsichord&rsquo;s different modes of
			              operation</li>

			              <li className={styles.li}>Designing and implementing the control systems that run the
			              harpsichord. Including reading from low level inputs, writing to outputs,
			              keeping time in sync, etc.</li>

			              <li className={styles.li}>Reading a subset of the MIDI protocol so the device can act as a simple
			              MIDI instrument</li>
			            </ul>

			            <h3 className={styles.sub_title}>Plasma Physics</h3>
			            <p className={styles.p}>This is an ongoing astrophysics research project with an astrophysicist
			            professor interested in planetary ring formation theory. The goal of the
			            project is to simulate the environment in the rings of Saturn. I am
			            collaborating in the design and implementation of the simulator architecture,
			            where my task is to write the code that runs on the parallel computer.</p>

			            <ul className={styles.ul}>
			              <li className={styles.li}>Wrote a fractal generator, written as an exercise to learn parallel
			              computation:

			                <ul className={styles.ul}>
			                  <li className={styles.li}>Using CUDA, a subset of C as the language that runs the
			                  calculation</li>

			                  <li className={styles.li}>Using Python and PyCUDA to interact with the CUDA runtime and
			                  launch/interact with the calculation</li>

			                  <li className={styles.li}>Using Python for data collection and visualization</li>

			                  <li className={styles.li}>Timing various parameters</li>
			                </ul>
			              </li>

			              <li className={styles.li}>Planning the implementation of an N-body simulator, the goal of my side
			              of the project:

			                <ul className={styles.ul}>
			                  <li className={styles.li}>Designing distributed system for running and managing multiple
			                  simulations at once on multiple systems</li>

			                  <li className={styles.li}>Designing the data structures that will hold all of the simulation
			                  data and metadata</li>
			                </ul>
			              </li>
			            </ul>
					</ComponentContainer>
				</SubjectContainer>
			</div>
		);
	}
}
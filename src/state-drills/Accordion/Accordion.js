import React from 'react'

class Accordion extends React.Component {

	state = {
		sectionIndex: ''
	}
	
	onClickHandler = (i) => {
		this.setState({ sectionIndex: i})
	}
	
	
	render() {
		let output = <li></li>
		
		if (this.props.sections){
			output = this.props.sections.map((section, i)=>{
				return ( 
						<li key={i}>
							<button onClick={()=> this.onClickHandler(i)}> 	
								{section.title}
							</button>

							{this.state.sectionIndex !== '' && this.state.sectionIndex === i ? <p>{this.props.sections[this.state.sectionIndex].content}</p> : null }
						</li>
				)
			})
			
		}

		return <ul>{output}</ul>
	}
}

export default Accordion
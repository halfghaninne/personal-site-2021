import * as React from "react"
import parse from 'html-react-parser'

//styles
const entryBody = {
	fontWeight: 300
}

const entryHeader = {
	display: 'flex',
	justifyContent: 'space-between',
	fontWeight: 100,
	marginTop: '30px',
	marginBottom: 0,
	fontSize: '24px'
}

const skillsStyle = {
	textTransform: 'uppercase',
	fontWeight: 100,
	marginTop: '1em',
	marginBottom: '1em'
}


const Entry = ({data}) => {
	const content = data.content?.map((para) => { return (
		<p>
			{parse(para)}
		</p>
	)})

	const renderSkills = () => {
		const acc = []

		Object.keys(data.skills).map((section) => {
			acc.push(<span>{data.skills[section].join(", ")}</span>)
		})

		return acc;
	}
	
	return (
		<div class="">
			<h3 class="" style={entryHeader}>
				<span>{data.position}, {data.company}</span>
				<span class="timeline" style={{fontStyle: 'italic'}}>{data.timeline.join(" - ")}</span>
			</h3>
			<h6 class="tech-stack" style={skillsStyle}>
				{ renderSkills() }
			</h6>
			<div style={entryBody}>
				{content}
			</div>
		</div>
	)
}

const EntryGroup = ({ data }) => {
	console.log(data);

	const renderMarkup = (data) => {
		return data.map((entry) => <Entry data={entry}/>)
	}

  return (
		renderMarkup(data)
	);
}

export default EntryGroup
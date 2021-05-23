import * as React from "react"

const Entry = ({data}) => {
	console.log('data: ', data);
	const content = data.content.map((section) => { return (
		<p>
			{section}
		</p>
	)})

	console.log('content: ', content);

	return (
		<div class="">
			<h3 class="">
				<span>{data.position}, {data.company}</span>
				<span class="timeline">{data.timeline.join(" - ")}</span>
			</h3>
			<h6 class="tech-stack">
				{data.skills.join(", ")}
			</h6>
			{content}
			{/* <p>
				Maintain and build product at <a href="https://newsela.com/" target="_blank">Newsela</a>, an instructional content platform that helps students read by delivering articles and comprehension assessments tailored to their individual reading levels.
			</p>
			<p>
				As part of the Wire team, support editors and writers by developing a digital publishing suite that will better-support their workflows and allow for the addition of more-dynamic types of content.
			</p> */}
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
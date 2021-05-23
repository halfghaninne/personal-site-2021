import * as React from "react"
import EntryGroup from "../components/EntryGroup"

const TechPage = () => {
	const data = [
		{
			position: "Senior Software Engineer",
			company: "Newsela",
			timeline: ["2018", "present"],
			skills: ["React", "Redux", "GraphQL", "Python3", "Django", "A/B Testing", "Kinesis", "Sass", "CSS-in-JS", "CircleCI", "Docker"],
			content: [
				"Maintain and build product at Newsela, an instructional content platform that helps students read by delivering articles and comprehension assessments tailored to their individual reading levels.",
				"As part of the Alexandria team, support editors and writers by developing a digital publishing suite that will better-support their workflows and allow for the addition of more-dynamic types of content."
			]
		}
	]
  return (
		<div>
			<EntryGroup data={data} />
		</div>
	);
}

export default TechPage

import * as React from "react"
import EntryGroup from "../components/EntryGroup"

import data from "../data/tech"

const pageStyles = {
  color: "#232129",
  paddingTop: 96,
	paddingBottom: 96,
	paddingLeft: 200,
	paddingRight: 200,
  fontFamily: "Roboto, Helvetica Neue, Helvetica, Arial, sans-serif",
	fontWeight: 100,
	letterSpacing: '-0.02em'
}

const TechPage = () => {

	console.log(data);
  return (
		<div style={pageStyles}>
			<EntryGroup data={data} />
		</div>
	);
}

export default TechPage

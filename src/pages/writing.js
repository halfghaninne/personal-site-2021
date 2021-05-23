import * as React from "react"
import EntryGroup from "../components/EntryGroup"

const WritingPage = () => {
	const data = [{company: "Newsela"}]
  return (
		<div>
			<EntryGroup data={data} />
		</div>
	);
}

export default WritingPage
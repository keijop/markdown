import React from "react"


function Preview(props){


	return 	<div>
				<header className="sub">preview

				</header>
				<div id="preview" dangerouslySetInnerHTML={{ __html: window.marked(props.output,
	 			{breaks: true, gfm: true}) }} />
			</div>
	 		
}

export default Preview


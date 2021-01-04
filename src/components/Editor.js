import React from "react"


function Editor(props){
return( 		
			<form>
				<header className="sub">editor
				
				</header>
          		<textarea onChange={props.onChange} id="editor" value={props.value}>
          		</textarea>
         	</form>
)
};



export default Editor


import React from "react"
import Preview from "./components/Preview.js"
import Editor from "./components/Editor.js"



class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      input : placeHolderr,
      
    }
    
    this.handleChange = this.handleChange.bind(this);
  }
    
    
    handleChange(e){
    this.setState({input : e.target.value});
      };

    
    
    
  render(){ 
    console.log(this.state.zoom)
    return (
      <div className="App">
        <header id="header">Github flavoured Markdown Editor</header>
        <div className="wrapper">
          <div className="window left">
            <Editor click={this.handleZoom}  onChange={this.handleChange} value={this.state.input} />
          </div>
          <div className="window right"> 
          <Preview output={this.state.input}/>
          </div>
        </div>
      </div>
    );
  };
}


const placeHolderr =`# H1 heading  
## H2 heading
**Written in Markdown**  
>This here is a block quote!  
1. list item
2. list item
- list item  
- list item  

\`<div>inline code</div>\`   

    <body>  
      <p>block code</p>  
    </body>  

Basic syntax for [Markdown](https://www.markdownguide.org/basic-syntax).  

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.SdH34MSYlnWw9cY7ZajgWAAAAA%26pid%3DApi&f=1). 
![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.SdH34MSYlnWw9cY7ZajgWAAAAA%26pid%3DApi&f=1). 
![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.SdH34MSYlnWw9cY7ZajgWAAAAA%26pid%3DApi&f=1)`

export default App;

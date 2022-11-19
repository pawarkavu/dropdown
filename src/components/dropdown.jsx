import { useRef, useState } from "react";

// Used props functionalty to pass argument to Dropdown function
function Dropdown(props) {
    let [show,setshow]=useState(false);
    function mouseenter(){                     // Hovering in Dropdown element
        setshow(true);
    }
    function mouseleave(){                      // Hovering out of Dropdown element
        setshow(false);
    }
    let arrowClass = show?"icon-arrow open":"icon-arrow close"              // Dropdown arror indicator
    let menuClass = show?"dropdown-menu show":"dropdown-menu hide"
    function handle(str){
console.log(str);
props.setselection(str.title);
setshow(false)
    }
    
  let arr= props.options
    return (                                        // returning the dropdown component
    <div className="dropdown" onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
        <a href="#" data-toggle="dropdown">{props.name} <i className={arrowClass}></i></a>
        <ul className={menuClass}>
        {arr.map(title => {
        return <li key={title} onClick={()=>{handle({title})}}><a>{title}</a></li>;
      })}            
        </ul>
    </div>);
}

export default Dropdown;
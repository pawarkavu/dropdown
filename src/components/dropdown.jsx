import { useRef, useState } from "react";

function Dropdown(props) {
    let [show,setshow]=useState(false);
    function mouseenter(){
        setshow(true);
    }
    function mouseleave(){
        setshow(false);
    }
    let arrowClass = show?"icon-arrow open":"icon-arrow close"
    let menuClass = show?"dropdown-menu show":"dropdown-menu hide"
    function handle(str){
console.log(str);
props.setselection(str.title);
setshow(false)
    }
    
  let arr= props.options
    return (
    <div className="dropdown" onMouseEnter={mouseenter} onMouseLeave={mouseleave}>
        <a href="#" data-toggle="dropdown">{props.name} <i className={arrowClass}></i></a>
        <ul className={menuClass}>
        {arr.map(title => {
        return <li key={title} onClick={()=>{handle({title})}}><a>{title}</a></li>;
      })}
            
        </ul></div>);
}

export default Dropdown;
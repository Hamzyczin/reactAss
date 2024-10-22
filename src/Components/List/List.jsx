import "./List.css"

const List = (props) =>{
  return(
    <div className="Container">
      <div className={`product ${props.color}`}>
       <img id="img" src={props.image} alt="" />
        <h3 >{props.prodname}</h3>
         <p>{props.price}</p>  <a href={props.link}>  <h6>{props.word}</h6></a>
        <p>{props.description}</p>
       

      </div>

    </div>
  )
}

export default List 
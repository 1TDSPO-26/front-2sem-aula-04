type TipoProps = {
    title:string;
}

export default function Card(props) {
  return (
      <div>
        <h2>{props.title}</h2>
      </div>


  )
}

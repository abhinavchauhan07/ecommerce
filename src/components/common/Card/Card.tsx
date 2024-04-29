
import './Card.css'
import { Link } from 'react-router-dom';

import { Products } from '../../DataTypes'
type CardProps = {
  res: Products;
};

const Card = ({res}:CardProps) => {
  return (
<>
     <div className="card">
      <Link to={`/products/${res.id}`}>
  <div className="photo">
    <img src={res.images[0]}/>
  </div>
  <div className="description">
    <h2>{res.title.length<15?res.title:`${res.title.slice(0,15)}...`}</h2>
    <h1>${res.price}</h1>
    <p>{res.description.length < 60
      ? res.description
      : `${res.description.slice(0, 60)} ....`
    }</p>
  </div>
  
  <button className='card-button'>Check Out</button>
  </Link>
</div>
</>
  )
}

export default Card

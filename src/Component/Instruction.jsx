import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import img from './youtube-logo-png-2069.png';
import './Instruction.css'

export default function Instruction() {
  const [info, setInfo] = useState();

  const { idMeal } = useParams();
  const apiId = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

  const infoHandler = async () => {
    const response = await fetch(`${apiId + idMeal}`);
    const data = await response.json();

    setInfo(data.meals[0]);
  };

  useEffect(() => {
    if (idMeal !== "") {
      infoHandler();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {!info ? "" :
        <div className='instruction'>
          <img src={info.strMealThumb} alt="img" />
          <div className="info">
            <h2>{info.strMeal}</h2>
            <h5>{info.strInstructions}</h5>
            <a href={info.strYoutube}><button><img src={img} alt="img" />Watch on YouTube</button></a>
          </div>
        </div>
      }
    </>
  )
}

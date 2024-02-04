import {Link} from 'react-router-dom'

export const Card = (props) => {
  const data = props.searchData;
  const movies = props.Movies;

  // Check if data has length greater than 0
  const isData = data.length > 0;

  return (
    <>
   
      {
        // Use ternary operator to conditionally render based on isData
        isData
          ? data.map((item) => (
            <Link key={item.id} to={`/${item.id}`}>
              <div className="card" >
                <img className="card-image" src={item.image} alt="Card Image" />
                <div className="card-text">
                
                  <h4>{item.title}</h4>
                  <h5>{item.year}</h5>
                  <p>a very cool movie</p>
                </div>
              </div>
              </Link>
            ))
          : movies.map((item) => (
            <Link key={item.id} to={`/${item.id}`}>
              <div className="card" >
                <img className="card-image" src={item.image} alt="Card Image" />
                <div className="card-text">
            
                  <h4>{item.title}</h4>
                  <h5>{item.year}</h5>
                  <p>a very cool movie</p>
                </div>
              </div>
              </Link>
            ))
      }
    </>
  );
};

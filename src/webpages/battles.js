import React from 'react';
import { useState, useEffect }  from 'react';
const Battles = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setBattles] = useState([]);
    useEffect(() => {
        fetch("http://ec2-3-110-128-242.ap-south-1.compute.amazonaws.com:5000/getbattles")
            .then(res => res.json())
            .then(
                (data) => {
                    console.log("data: ",typeof(data.data));
                    var endData = [];
                    endData = data.data;
                    console.log("data: ",typeof(endData));

                    setIsLoaded(true);
                    setBattles(endData);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])

      if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            
            <ul>
                {users.map(user => (
                <li>
                    {user} 
                </li>
                ))}
            </ul>
        );
    }
}

// return(
//         <div>
//             <h1>Battles Lists</h1>
//         </div>
//     );
//}
export default Battles;

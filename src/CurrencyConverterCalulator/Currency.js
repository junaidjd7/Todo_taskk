import axios from "axios";

import React, { useState, useEffect } from "react";

export default function Currency() {

  const [rates, setRates] = useState([])




  useEffect(() => { getApi(); }, []);

  const getApi = () => {
    axios
      .get("http://api.coinlayer.com/api/live?access_key=2d1959ae1b73ad775e0b993f1b4f926a")
      .then((res) => {
        setRates(res.data.rates);
        console.log(res.data);
      });
  };

  return (
    <div>

      
{/* object.map((key,i) =>( */}

))

      

    </div>
  );
}
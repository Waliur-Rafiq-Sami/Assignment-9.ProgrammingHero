/**
 https://i.ibb.co.com/7tsqqyp6/pexels-binyaminmellish-106399.jpg
 https://i.ibb.co.com/xqv3jS7B/pexels-binyaminmellish-1396132.jpg
 https://i.ibb.co.com/pB1Rv4LR/pexels-expect-best-79873-323772.jpg
 https://i.ibb.co.com/TxVWNF7C/pexels-expect-best-79873-323780.jpg
 https://i.ibb.co.com/rGDVyX2G/pexels-luis-yanez-57302-206172.jpg
 https://i.ibb.co.com/JRqmNJ91/pexels-pixabay-53610.jpg
 https://i.ibb.co.com/HL5sxj8n/pexels-pixabay-208736.jpg
 https://i.ibb.co.com/nNRzP3L2/pexels-pixabay-209296-1.jpg
 https://i.ibb.co.com/Rkr26cmV/pexels-pixabay-209315.jpg
 https://i.ibb.co.com/4ZG8WZ0w/pexels-pixabay-221540.jpg
 https://i.ibb.co.com/qFx8pzY2/pexels-pixabay-262405.jpg
 https://i.ibb.co.com/TxQQL0G0/pexels-pixabay-277667.jpg
 https://i.ibb.co.com/8nfpW9gC/pexels-pixabay-280229.jpg
 https://i.ibb.co.com/PGPL5cJV/pexels-pixasquare-1115804.jpg
 https://i.ibb.co.com/84PXfrGB/pexels-thgusstavo-2102587.jpg
 https://i.ibb.co.com/8nfpW9gC/pexels-pixabay-280229.jpg
 */

import { useEffect, useState } from "react";
import SingleCard from "./singleCard";
import Header from "../SharedStyle/Header";

const CardComponents = () => {
  const [houseInfo, setHouseInfo] = useState([]);

  useEffect(() => {
    fetch("/houseData.json")
      .then((res) => res.json())
      .then((data) => setHouseInfo(data));
  }, []);

  return (
    <div>
      <Header></Header>
      <div className="container mx-auto scroll-smooth" id="House">
        <h2 className="text-center md:py-8 md:text-6xl font-bold font-dancing">
          House information
        </h2>
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {houseInfo.map((house) => (
            <SingleCard house={house} key={house.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponents;

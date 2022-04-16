import { useEffect, useState } from "react";

const useDinner = () => {
  const [dinner, setDinner] = useState([]);

  useEffect(() => {
    fetch("FakeData/Dinner/dinner.json")
      .then((res) => res.json())
      .then((data) => setDinner(data));
  }, []);

  return [dinner, setDinner];
};

export default useDinner;

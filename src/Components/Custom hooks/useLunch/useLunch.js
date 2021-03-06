import { useEffect, useState } from "react";

const useLunch = () => {
  const [lunch, setLunch] = useState([]);

  useEffect(() => {
    fetch("FakeData/Lunch/lunch.json")
      .then((res) => res.json())
      .then((data) => setLunch(data));
  }, []);

  return [lunch, setLunch];
};

export default useLunch;

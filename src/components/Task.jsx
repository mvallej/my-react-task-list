import { useState } from "react";
export const Task = (props) => {
  const { item } = props;
  const [check, setCheck] = useState(item.state);
  return (
    <div>
      <li>
        <input
          onChange={() => setCheck(!check)}
          type="checkbox"
          checked={check}
        />
        <h3>{item.name}</h3>
        <p>{item.desc}</p>
      </li>
    </div>
  );
};
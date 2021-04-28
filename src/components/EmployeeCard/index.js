import React from "react";
import "./style.css";

function EmployeeCard({ name, image, phoneNumber, email }) {
  return (
    <tr>
      <td className="tableCol">
        {name}
      </td>
      <td className="img-container">
        <img alt={name} src={image} />
      </td>
      <td className="tableCol">
        {phoneNumber}
      </td>
      <td className="tableCol">
        {email}
      </td>
    </tr>

  );
}

export default EmployeeCard;

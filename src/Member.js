import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Member({ member }) {
  const color = member.attended ? "#242e4c" : "#9297a6";
  return (
    <>
      <tr>
        <td>
          <FontAwesomeIcon icon={faUser} style={{ color: color }} />
          <span style={{ color: color, margin: "5px" }}>{member.name}</span>
        </td>
        <td className="checkbox">
          <input type="checkbox" />
        </td>
      </tr>
    </>
  );
}

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function SearchBar({}) {
  return (
    <tr className="search-bar ">
      <td>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ color: "#989dab" }}
        />
        <span style={{ color: "#9297a6", marginLeft: "15px" }}>
          Find member
        </span>
      </td>
    </tr>
  );
}

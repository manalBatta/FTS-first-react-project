import Member from "../Member/Member";
import SearchBar from "../SearchBar/SearchBar";

const fakeMembers = [
  { id: 1, name: "Carolien Bloeme", attended: false },
  { id: 2, name: "Sun Jun", attended: true },
  { id: 3, name: "Song Bao", attended: false },
  { id: 4, name: "Olivia Arribas", attended: true },
  { id: 5, name: "Bonginkosi Mdladlana", attended: false },
  { id: 6, name: "Arina Belomestnykh", attended: true },
  { id: 7, name: "Jacqueline Likoki", attended: true },
];
export default function MembersList() {
  return (
    <table>
      <tbody>
        <SearchBar></SearchBar>
        {fakeMembers.map((member) => (
          <Member member={member} key={member.id}></Member>
        ))}
      </tbody>
    </table>
  );
}

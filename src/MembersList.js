import Member from "./Member";
import SearchBar from "./SearchBar";

export default function MembersList() {
  const fakeMembers = [
    { id: 1, name: "Carolien Bloeme", attended: false },
    { id: 2, name: "Sun Jun", attended: true },
    { id: 3, name: "Song Bao", attended: false },
    { id: 4, name: "Olivia Arribas", attended: true },
    { id: 5, name: "Bonginkosi Mdladlana", attended: false },
    { id: 6, name: "Arina Belomestnykh", attended: true },
    { id: 7, name: "Jacqueline Likoki", attended: true },
  ];
  const fakeMembersTable = fakeMembers.map((member) => (
    <Member member={member} key={member.id}></Member>
  ));
  return (
    <table>
      <tbody>
        <SearchBar></SearchBar>
        {fakeMembersTable}
      </tbody>
    </table>
  );
}

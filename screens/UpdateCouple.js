import AddPage from "../components/Add/AddPage";
function UpdateCouple({ navigation, route }) {
  const member = route.params;
  return <AddPage defvalue={member.member} />;
}

export default UpdateCouple;

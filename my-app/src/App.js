import VoteMain from "./views/VoteMain";
import VoteHeader from "./views/VoteHeader";
import VoteFooter from "./views/VoteFooter";


function App() {
  return (
    <div className="App">
      <VoteHeader></VoteHeader>
      <VoteMain></VoteMain>
      <VoteFooter></VoteFooter>
    </div>
  );
}

export default App;

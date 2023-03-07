import LoadersProvider from "./contexts/loaders-context";
import Discover from "./views/discover";


function App() {
  return (
    <LoadersProvider>
      <Discover />
    </LoadersProvider>
  )
}

export default App;

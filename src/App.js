import LoadersProvider from "./contexts/loaders-context";
import MuiTheme from "./css/mui-theme";
import Discover from "./views/discover";


function App(props) {
  return (
    <MuiTheme>
      <LoadersProvider>
        <Discover />
      </LoadersProvider>
    </MuiTheme>
  )
}

export default App;

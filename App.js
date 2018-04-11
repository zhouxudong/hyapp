import {StackNavigator} from 'react-navigation'
import MainScreen from "./pages/main"
import Company from "./pages/company/index"
// import ProfileScreen from "./pages/profile"

const App = StackNavigator({
    Main: {screen: MainScreen},
    Company: {screen: Company}
    // Profile: {screen: ProfileScreen}
})


export default App;
import { Grommet } from 'grommet';
import Navigation from '../Navigation';
import Footer from '../Footer';
import Civilization from '../../hooks/API/Civilization'; 
import Unit from '../../hooks/API/Unit';
import Technology from '../../hooks/API/Technology';
import Structure from '../../hooks/API/Structure';
import Theme from '../../theme';

const App = () => {
  const data = Civilization();
  const data2 = Unit();
  const data3 = Technology();
  const data4 = Structure();
  console.log(data);
  console.log(data2);
  console.log(data3)
  console.log(data4);
return(
  <Grommet theme={Theme}>
    <Navigation />
  </Grommet>
)};

export default App;

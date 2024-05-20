import { Mobile } from "./pages/Mobile";
import { PageList } from "./router/Router";
import { useMediaQuery } from 'react-responsive';

function App() {

  const isSmallScreen = useMediaQuery({ maxWidth: 1023 });

  return (
    <>
      {!isSmallScreen ? <PageList /> : <Mobile />}
    </>
  );
}

export default App;

import { PageList } from "./router/Router";
import { useMediaQuery } from 'react-responsive';

function App() {

  const isSmallScreen = useMediaQuery({ maxWidth: 1023 });

  return (
    <>
      {!isSmallScreen ? <PageList /> : null}
    </>
  );
}

export default App;

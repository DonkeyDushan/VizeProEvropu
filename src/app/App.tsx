import { AppWrapper } from './components';
import { MainSection } from './sections/MainSection';
import { AuthorsSection } from './sections/AuthorsSection';

const App = () => {
  return (
    <AppWrapper>
      <MainSection />
      <AuthorsSection />
    </AppWrapper>
  );
};

export default App;

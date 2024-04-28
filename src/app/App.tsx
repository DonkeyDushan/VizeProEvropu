import { AppWrapper } from './components';
import { MainSection } from './sections/MainSection';
import { AuthorsSection } from './sections/AuthorsSection';
import { FooterSection } from './sections/FooterSection';

const App = () => {
  return (
    <AppWrapper>
      <MainSection />
      <AuthorsSection />
      <FooterSection />
    </AppWrapper>
  );
};

export default App;

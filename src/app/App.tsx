import { AppWrapper } from './components';
import { MainSection } from './sections/MainSection';
import { AuthorsSection } from './sections/AuthorsSection';
import { FooterSection } from './sections/FooterSection';
import { TimerSection } from './sections/TimerSection';
import { RELEASE_TIME } from './content/releaseTime';
import { useEffect, useState } from 'react';

const App = () => {
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    if (currentTime < RELEASE_TIME) {
      setTimeout(() => {
        setCurrentTime(new Date().getTime());
      }, 1000);
    } else return;
  }, [currentTime]);

  if (currentTime < RELEASE_TIME) {
    return <TimerSection />;
  } else
    return (
      <AppWrapper>
        <MainSection />
        <AuthorsSection />
        <FooterSection />
      </AppWrapper>
    );
};

export default App;

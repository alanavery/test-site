'use client'
import Countdown from 'react-countdown';

const Page = () => {
  return (
    <main>
      <h1>Timer</h1>
      <Countdown date={Date.now() + (60000 * 2)} />
    </main>
  );
};

export default Page;

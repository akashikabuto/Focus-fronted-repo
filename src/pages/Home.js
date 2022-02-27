import { lazy, Suspense } from 'react';

const CardComponent = lazy(() => import('../components/Card'));

function Home() {
  return (
    <div className='Home' >
      <Suspense fallback={<div className='loader' >loading.......</div>} >
        <CardComponent />
      </Suspense>
    </div>
  );
}

export default Home;
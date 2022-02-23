import Card from '../components/Card';
import Info from '../components/Info';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className='Home' >
      <div className='first-panel' >
        <Card />
      </div>
      <div className='middle-panel'  >
        <Info />
      </div>
      <div className='last-panel'>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
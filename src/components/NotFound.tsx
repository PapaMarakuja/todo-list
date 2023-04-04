import Lottie from 'react-lottie-player';
import animationData from '../assets/lootie-not-found.json';

function NotFound() {
  return (
    <div className='grid place-items-center'>
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: 150, height: 150 }}
      />
      <span>It seems you have nothing to show here!</span>
    </div>
  );
}

export default NotFound;

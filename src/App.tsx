import { Hello } from '@src/components/Helloo';
import logo from '@public/images/logo512.png';
import './styles/index.scss';

function App() {
  return (
    <div>
      <Hello />
      <img src={logo} alt="" />
      <div
        style={{
          height: 50,
          background: `url(${logo}) 50% 50% no-repeat`,
          backgroundSize: 'auto 100%',
        }}
      />
      <div className="logo">
        <p>
          React <span>settup</span>
        </p>
      </div>
    </div>
  );
}

export default App;

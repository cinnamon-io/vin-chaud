import { Hello } from '@src/components/Helloo';
import logo from '@public/images/logo512.png';
import lockUrl, { ReactComponent as Lock } from '@public/images/icon-interlock-success.svg';
import './styles/index.scss';

function App() {
  return (
    <div>
      <h1>Vin-CHAUD</h1>

      <Hello />
      <h2>url</h2>
      <img src={logo} alt="" />
      <h2>style bg</h2>
      <div
        style={{
          height: 50,
          background: `url(${logo}) 50% 50% no-repeat`,
          backgroundSize: 'auto 100%',
        }}
      />
      <h2>css bg</h2>
      <div className="logo">
        <p>
          React <span>settup</span>
        </p>
      </div>
      <h2>svg url</h2>
      <img src={lockUrl} alt="" />
      <h2>svg component</h2>
      <Lock />
    </div>
  );
}

export default App;

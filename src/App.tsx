import { Routes, Route, Link, Outlet } from 'react-router-dom';
import { Hello } from '@src/components/Helloo';
import logo from '@public/images/logo512.png';
import lockUrl, { ReactComponent as Lock } from '@public/images/icon-interlock-success.svg';
import './styles/index.scss';
import React from 'react';

// Layout 위주 route 컴포넌트 구성.
const DefaultLayout = () => {
  return (
    <>
      <header>
        <h1>Vin-CHAUD</h1>
        Header
      </header>
      <main>
        <article>
          <Outlet />
        </article>
      </main>
      <footer>Footer</footer>
    </>
  );
};
const SideLayout = () => {
  return (
    <>
      <header>
        <h1>Vin-CHAUD</h1>
        Header
      </header>
      <main>
        <aside>Side</aside>
        <article>
          <Outlet />
        </article>
      </main>
      <footer>Footer</footer>
    </>
  );
};

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">홈</Link>
          </li>
          <li>
            <Link to="/detail">상세</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            index
            element={
              <>
                <Hello />
                <p>Home</p>
                <h2>image 사용 예시</h2>
                <h3>url</h3>
                <img src={logo} alt="" />
                <h3>style bg</h3>
                <div
                  style={{
                    height: 50,
                    background: `url(${logo}) 50% 50% no-repeat`,
                    backgroundSize: 'auto 100%',
                  }}
                />
                <h3>css bg</h3>
                <div className="logo">
                  <p>
                    React <span>settup</span>
                  </p>
                </div>
                <h3>svg url</h3>
                <img src={lockUrl} alt="" />
                <h3>svg component</h3>
                <Lock />
              </>
            }
          />
        </Route>
        <Route path="detail" element={<SideLayout />}>
          <Route index element={<>상세</>} />
        </Route>
        <Route path="*" element={<>404</>} />
      </Routes>
    </>
  );
}

export default App;

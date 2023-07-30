import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from 'react-router-dom';
import { getTitle } from "../../store/header";
import avatar from "../../assets/images/header/avatar.png";
import { ExportOutlined } from '@ant-design/icons';
import "./header.scss";

const useOutsideClick = (callback) => {
  const ref = React.useRef();

  React.useEffect(() => {
    const handleClick = (event) => {
      // prevent its own element and log out
      if (ref.current && !ref.current.contains(event.target) && event.target.innerText !== 'Log out') {
        callback();
      }
    };

    document.addEventListener('click', handleClick, true);

    return () => {
      document.removeEventListener('click', handleClick, true);
    };
  }, [ref, callback]);

  return ref;
};

function Header() {
  const title = useSelector(getTitle);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickOutside = () => {
    if (showLogout) {
      setShowLogout(false);
    }
  };

  const ref = useOutsideClick(handleClickOutside);

  const handleLogoutClick = (event) => {
    setShowLogout(false);
    localStorage.removeItem('accessToken')
    // navigate('/login')

    // set the last page (location) path before logout
    navigate('/login', { replace: true, state: { from: location }});
    event.stopPropagation();
  };

  return (
    <div className="layout-header-box">
      <div className="title">{ title }</div>
      <div className="avatar-box" style={{ display: 'flex', position: 'relative' }}>
        <div className="name-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginRight: '16px' }}>
          <div className="av-name" style={{ lineHeight: '14px' }}>
            John Doe
          </div>
          <div className="av-role" style={{ lineHeight: '14px' }}>
            Admin
          </div>
        </div>
        <div
          className="avatar-box"
          style={{ width: '40px', cursor: 'pointer' }}
          onClick={ () => setShowLogout(!showLogout)}
          ref={ref}
        >
          <img src={avatar} alt="avatar" style={{ width: '100%', height: 'auto' }} />
        </div>
        {
          showLogout && 
            <div className="avatar-menu" style={{ position: 'absolute', top: '68px', width: '100%' }}>
              <ul style={{ background: '#fff', borderRadius: '4px', boxShadow: 'rgba(76, 79, 84, 0.16) 0px 4px 8px' }}>
                <li className="logout-context-menu">
                  <div style={{ lineHeight: '14px' }} onClick={handleLogoutClick}>
                    <ExportOutlined /> 
                    <span style={{ marginLeft: '4px' }}>Log out</span>
                  </div>
                </li>
              </ul>
            </div>
        }
      </div>
    </div>
  )
}

export default Header;
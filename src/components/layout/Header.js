import { useSelector } from "react-redux";
import { getTitle } from "../../store/header";
import avatar from "../../assets/images/header/avatar.png";

function Header() {
  const title = useSelector(getTitle);

  return (
    <div className="layout-header-box">
      <div className="title">{ title }</div>
      <div className="avatar-box" style={{ display: 'flex', position: 'relative' }}>
        <div className="name-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="av-name" style={{ lineHeight: '14px' }}>
            John Doe
          </div>
          <div className="av-role" style={{ lineHeight: '14px' }}>
            Admin
          </div>
        </div>
        <div className="avatar-box" style={{ width: '64px', cursor: 'pointer' }}>
          <img src={avatar} alt="avatar" style={{ width: '100%', height: 'auto' }} />
        </div>
        <div className="avatar-menu" style={{ position: 'absolute', top: '68px', width: '100%' }}>
          <ul style={{ border: '1px solid', borderRadius: '4px' }}>
            <li>
              <div style={{ lineHeight: '14px' }}>Log out</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
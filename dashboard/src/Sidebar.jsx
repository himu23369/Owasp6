import React, { useContext } from 'react'
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsClipboard2PulseFill } from 'react-icons/bs'
import userContext from './context/users/userContext'
import { Link} from 'react-router-dom';
function Sidebar({ openSidebarToggle, OpenSidebar }) {

    const { user } = useContext(userContext);
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> Patient Id:{user['id']}
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/">
                    <BsGrid1X2Fill className='icon' /> Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsFillArchiveFill className='icon' /> Caretaker Contact
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsFillGrid3X3GapFill className='icon' /> Contact Us
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <BsPeopleFill className='icon' /> Inbox
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="/addReport">
                    <BsClipboard2PulseFill className='icon' /> Add Report
                </Link>
            </li>
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Inventory
                </a>
            </li> */}
            {/* <li className='sidebar-list-item'>
                <a href="">
                    <BsMenuButtonWideFill className='icon'/> Reports
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li> */}
        </ul>
        </aside >
    )
}

export default Sidebar
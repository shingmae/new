import React, { useContext, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import { RiImageAddLine } from 'react-icons/ri';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';

export const User = () => {
  const user = true;

  const [profileOpen, setProfileOpen] = useState(true);

  const close = () => {
    setProfileOpen(false);
  };
  return (
    <>
      <div className="profile">
        <button className="img">
          <img
            src="https://images.pexels.com/photos/14680621/pexels-photo-14680621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="avatar"
          />
        </button>
        <div className="openProfile boxItems">
          <Link to="account">
            <div className="image">
              <div className="img">
                <img
                  src="https://images.pexels.com/photos/14680621/pexels-photo-14680621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="avatar"
                />
              </div>
              <div className="text">
                <h4>Shing Mae Mae</h4>
                <p>Lorem Ipsum. DC</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

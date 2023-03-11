import React from 'react';
import { useGetIsLoggedIn } from '@multiversx/sdk-dapp/hooks';
import { logout } from '@multiversx/sdk-dapp/utils';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
// import { dAppName } from '../../../config';
// import { routeNames } from '../../../routes';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const isLoggedIn = useGetIsLoggedIn();

  const handleLogout = () => {
    logout(`${window.location.origin}/unlock`);
  };

  return (
    <BsNavbar className="px-4 py-3 bg-dark border-bottom">
      <div className="container-fluid">
        <Link
          className="mr-0 d-flex align-items-center navbar-brand"
          href="/"
          //   href={isLoggedIn ? routeNames.dashboard : routeNames.home}
        >
          <Image
            src="/assets/img/multiversx.svg"
            className="multiversx-logo"
            width={100}
            height={100}
            alt="MultiversX"
          />
          {/* <span className="dapp-name text-muted">{dAppName}</span> */}
          <span className="dapp-name text-muted">Game</span>
        </Link>

        <Nav className="ml-auto">
          {isLoggedIn && (
            <>
              <NavItem>
                <Link
                  // href={routeNames.statistics}
                  href="/"
                  className="nav-link"
                >
                  <FontAwesomeIcon
                    icon={faChartSimple}
                    className="text-muted"
                  />
                </Link>
              </NavItem>
              <NavItem>
                <button className="btn btn-link" onClick={handleLogout}>
                  Close
                </button>
              </NavItem>
            </>
          )}
        </Nav>
      </div>
    </BsNavbar>
  );
};

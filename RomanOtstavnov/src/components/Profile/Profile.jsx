import styles from './profile.scss';
import classnames from 'classnames/bind';
import React from 'react';
import Link from "@material-ui/core/Link";

const cx = classnames.bind(styles);

const Profile = ({ name, avatar_url, html_url }) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('content')}>
        <img src={avatar_url} className={cx('avatar')} />
        <h2>{name}</h2>
        <h3><Link href={html_url} target='_blank'>Github profile</Link></h3>
      </div>
    </div>
  );
};

export default Profile;


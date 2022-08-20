import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import "./SideBar.css"

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
  return (
    <Menu {...props}>
      <Link to="/mypage">
        マイページ
      </Link>
      <Link to="/book">
        本を登録する
      </Link>
      <Link to="/summary">
        サマリー
      </Link>
      <Link to="/inquiry">
        お問い合わせ
      </Link>
    </Menu>
  )
}
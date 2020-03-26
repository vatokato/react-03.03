import React from 'react';
import {connect} from "react-redux";
import Header from "../components/Header/Header";

const mapStateToProps = ({profile}) => ({...profile});

export default connect(mapStateToProps)(Header);

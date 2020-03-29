import React from 'react';
import {connect} from "react-redux";
import Profile from "../components/Profile/Profile";

const mapStateToProps = ({profile}) => ({...profile});

export default connect(mapStateToProps)(Profile);

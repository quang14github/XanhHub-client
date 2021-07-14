import React from 'react'
import styles from 'Assets/Stylesheets/SCSS/Components/MainPanel.module.scss'
import Profile from './Profile'
import Setting from './Setting'
import History from './History'
import {Switch,Route} from 'react-router-dom'
export default function MainPanel() {
    return (
        <div className={styles.container}>
            <Switch>
                <Route exact path="/user/profile">
                    <Profile/>
                </Route>
                <Route exact path="/user/history">
                    <History/>
                </Route>
                <Route exact path="/user/setting">
                    <Setting/>
                </Route>
            </Switch>
        </div>
    )
}

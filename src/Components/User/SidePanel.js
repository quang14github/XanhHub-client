import React from 'react'
import styles from 'Assets/Stylesheets/SCSS/Components/SidePanel.module.scss'
import Avatar from 'Components/Avatar'
import {useHistory} from 'react-router-dom'
const tabs=[
    {name:"Profile",id:"profile"},
    {name:"History",id:"history"},
    
    {name:"Settings",id:"setting"},
]
export default function SidePanel() {
    const url=useHistory()
    return (
        <div className={styles.container}>
            <div className={styles.userInfor}>
                <Avatar/>
                <p>User name</p>
            </div>
            <div className={styles.tabsContainer}>
                {tabs.map(e=>(<div key={e.id} className={styles.tabItem}>
                    <p className={styles.mainTabs}
                    onClick={()=>{url.push(`/user/${e.id}`)}}
                    >{e.name}</p>
                   
                </div>))}
            </div>
        </div>
    )
}

import React from 'react'
import styles from 'Assets/Stylesheets/SCSS/Components/SearchBar.module.scss'
import ico from 'Assets/Images/search.svg'
export default function SearchBar({value,onChange}) {
    return (
        <form className={styles.root}>
            <input type="text" required placeholder="search for any thing!" />
            <button className="button" type="submit"><img alt="search" src={ico}/> </button>
        </form>
    )
}

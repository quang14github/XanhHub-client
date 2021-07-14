import React from 'react'
import styles from 'Assets/Stylesheets/SCSS/Components/Avatar.module.scss'
export default function Avatar({image,alt}) {
    return (
        <div className={styles.container}>
            <img src="https://lh3.googleusercontent.com/proxy/NIh65YhCRIjQTk9B0HqaXpdT2PVObwURv2-VXmPvNovyDsoYLf2moV9yBsIk0uJBFppKFHgt5uKZuuS-8VXG-_IL5guiQhbLCIoWqjTeaEkxkhEZ3q3tBJo" alt={alt}/>
        </div>
    )
}

import React from 'react'
import styles from './PopupEditFormCard.module.css'
import { useSelector } from 'react-redux'
export default function PopupFormEditCard() {
    const top = useSelector(state => state.favorites.popupPositionTop)
    console.log(top)
    return (
        <div className={styles.wrapper} style={{top:top}}>
            <form>
                
            </form>
        </div>
    )
}

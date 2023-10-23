import React from 'react'
import styles from './Card.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToFavorite, deleteFromFavorite, editDirName, popupPositionTopEdit , editSelectedCardId } from '../../store/favoriteSlice'
export default function Card({ title, price, img, id ,dirName }) {
    const dirname = useSelector((state) => state.favorites.dirName)
    const selectedId = useSelector((state) => state.favorites.selectedCardId)
    const [styleBool, setStylesBool] = useState(false)
    const favoritesId = useSelector(state => state.favorites.favoritesId)
    const boolFavotite = favoritesId.length > 0 ? favoritesId.includes(id) : false
    const style = styleBool ? { opacity: 1, top: 0 } : {}
    const width = window.innerWidth
    const dispatch = useDispatch()
    function popupToggle(e) {
        dispatch(popupPositionTopEdit(e.pageY - 450))
        dispatch(editDirName(dirName))
        dispatch(editSelectedCardId(id))
        // console.log({dirName,selectedId,id}) 
    }
    return (
        <div className={styles.card_body}
            onMouseOver={() => setStylesBool(true)}
            onMouseOut={() => setStylesBool(false)}
        >
            <div className={styles.card}>
                <div className={styles.img_wrapper}>
                    <img src={img} alt="" className={styles.img} />
                </div>
                <div className={styles.description_wrapper}>
                    <div className={styles.price}>{price} p/кг</div>
                    <div className={styles.title}>{title}</div>
                </div>
                <div className={styles.block_none}
                    style={style}>
                    <button className={styles.btn_order}>ЗАКАЗАТЬ</button>
                    {
                        boolFavotite ?
                            <img className={styles.favorite}
                                src="./components/card/remove_from_favorite.png"
                                onClick={() => dispatch(deleteFromFavorite({ id }))}
                                alt=""
                            /> :
                            <img
                                className={styles.favorite}
                                src="./components/card/add_to_favorite.png"
                                onClick={() => dispatch(addToFavorite({ title, price, id, img }))}
                                alt="" />
                    }
                    {
                        width > 960 &&
                        <img src="./components/card/edit.png"
                            className={styles.edit}
                            onClick={(e) => popupToggle(e)}
                            alt="" />
                    }
                </div>
            </div>
        </div>
    )
}



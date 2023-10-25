import React, { useState } from 'react'
import styles from './PopupEditFormCard.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { editSelectedCardId, popupPositionTopEdit } from '../../store/favoriteSlice'
import { useEffect } from 'react'
export default function PopupFormEditCard({data}) {
    const top = useSelector(state => state.favorites.popupPositionTop)
    const dirName = useSelector(state => state.favorites.dirName)
    const selectedId = useSelector(state => state.favorites.selectedCardId)
    const [selectedFile, setSelectedFile] = useState(null)
    const dispatch = useDispatch()
    let result = []
    function handleChange(e) {
        console.log(e.target.files)
        setSelectedFile(e.target.files[0])
    }
    async function update(e) {
        e.preventDefault()
        const title = e.target.title.value.trim()
        const price = e.target.price.value.trim()
        dispatch(popupPositionTopEdit(-3000))
        const formData = new FormData()
        if (selectedFile) {
            formData.append('file', selectedFile)
        }
        console.log({title:e.target.title.value,price:e.target.price.value,id:selectedId})
        const res = await fetch(`/api?update=true&post=${selectedFile !== null ? 'uploads' : null}&dirname=${dirName}&id=${selectedId}&price=${price}&title=${title}`,
            { method: 'POST', body: formData })
        result = await res.json()
        // window.forceUpdate()
        window.location. reload()
        // Обнуления
        dispatch(editSelectedCardId(null))
        setSelectedFile(null)
        e.target.title.value = ''
        e.target.price.value = ''
    }

    return (
        <div className={styles.wrapper} style={{ top: top }}>
            <div className={styles.btn_close_wrapper}>
                <img
                    onClick={() => dispatch(popupPositionTopEdit(-3000))}
                    src="./components/popupEdit/btn-close.png"
                    alt="" />
            </div>
            <form
                className={styles.popup_form}
                onSubmit={(e) => update(e)}>
                <div className={styles.input_wrapper}>
                    <div className={styles.input_name}>
                        Названия товара
                    </div>
                    <input
                        className={styles.input}
                        name='title'
                        type="text" />
                </div>
                <div className={styles.input_wrapper}>
                    <div className={styles.input_name}>
                        Цена товара
                    </div>
                    <input
                        className={styles.input}
                        name='price'
                        type="number" />
                </div>
                <div className={styles.input_wrapper}>
                    <div className={styles.input_name}>
                        Цена товара
                    </div>
                    <input
                        className={styles.input}
                        name='image'
                        type="file"
                        accept='.png, .jpg, .jpeg, .gif, .web '
                        onChange={handleChange} />
                </div>
                <button>
                    Обновить
                </button>
            </form>
        </div>
    )
}

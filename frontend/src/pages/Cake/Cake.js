import React from 'react';
import styles from './Cake.module.css';
import { useLocation } from 'react-router-dom';
import SizeControl from './sizeControl/sizeControl';
import { useState } from 'react';
import Choose_filling from './choose_filling/choose_filling'
import { useRef } from 'react';
import ChangeFillingPopup from './change_filling_popup/Change_filling_popup';
import Block_right from './block_right/Block_right';
const Cake = () => {
    const location = useLocation().state
    const img = location.img.split('').filter((img, index) => index !== 0 && true).join('')
    const [bool, setBool] = useState(true)
    const [selectedSize, setSeledSize] = useState(0)
    const message = useRef('')
    const [tableBool, setTableBool] = useState(false)
    const [fillingPopup, setFillingPopup] = useState(false)
    const [arr, setArr] = useState([
        { path: '/nachinka-jogurtovaya.jpg',bigImagePath:'/nachinka-jogurtovaya-big.jpg', title: 'ЙОГУРТОВАЯ' ,description:'Нежнейшие ангельские бисквиты, которые буквально тают во рту, йогуртовый мусс и конфи из вишни. Одна из самых нежных и воздушных начинок с едва уловимыми нотками свежих ягод',compound:'Мука, сахар, яйцо, сливки растительные, вишня консервированная, сгущённое молоко, вишневый конфитюр.'},
        { path: '/nachinka-klubnichnyj-muss.jpg',bigImagePath:'/nachinka-klubnichnyj-muss-big.jpg', title: 'КЛУБНИЧНЫЙ МУСС',description:'Начинка, которая пахнет летом. В ней скрываются нежные, но в то же пряные ванильные бисквиты, слой из клубничного мусса со вкусом пломбира и тонкие ноты клубничного конфи. Воздушный, невесомый вкус с запахом любимых ягод и привкусом ванили.',compound:'Мука, сахар, яйцо, сливки животные, клубника свежая замороженная, желатин, ванилин.' },
        { path: '/nachinka-krasnyj-barhat.jpg',bigImagePath:'/nachinka-krasnyj-barhat-big.jpg', title: 'КРАСНЫЙ БАРХАТ' ,description:'Контраст ярких красных коржей и белоснежного крема заставляет многих удивиться после разреза торта с такой начинкой. Но самое приятное впереди: по вкусу вас ожидает сочетание пористых влажных бисквитов и легкого сметанного крема, который буквально тает во рту.',compound:'Мука, сахар, яйцо, какао, сметана, сахарная пудра, крахмал,кефир, подсолнечное масло, сода, разрыхлитель, соль, ванилин, пищевой краситель.'},
        { path: '/nachinka-malinovyj-krem-chiz.jpg',bigImagePath:'/nachinka-malinovyj-krem-chiz-big.jpg', title: 'МАЛИНОВЫЙ КРЕМ-ЧИЗ',description:'Начинка для любителей сочетания свежих ягод и бельгийского шоколада. Состоит из влажных шоколадных бисквитов, невесомого сырного крема и малинового конфи. Купаж свежих ягод добавляет нежное послевкусие. Идеально для праздников.',compound:'Мука, сахар, яйцо,какао-порошок (высшей категории), сливки животные, сыр сливочный творожный, сахарная пудра, ванилин.' },
        { path: '/nachinka-medovaya.jpg',bigImagePath:'/nachinka-medovaya-big.jpg', title: 'МЕДОВАЯ' ,description:'Воздушные пряные медовые бисквиты гармонируют с нежным сметанным кремом. Мягкая ароматная начинка с медовым послевкусием, от которой веет уютом и теплом.',compound:'Мука, сахар, яйцо, мёд, сливочное масло, сгущённое молоко, сметана, сода пищевая, уксус.'},
        { path: '/nachinka-pancho.jpg',bigImagePath:'/nachinka-pancho-big.jpg', title: 'ПАНЧО' ,description:'Легкий вариант традиционного торта. Шифоновые бисквиты, пропитанные сливочно-молочным сиропом, влажные шоколадные коржи и нежный сметанный мусс позволяют влюбиться в этот вкус еще раз.',compound:'Мука, сахар, яйцо, какао, сметана, масло сливочное, сода, ванилин.'},
        { path: '/nachinka-rafaello.jpg',bigImagePath:'/nachinka-rafaello-big.jpg', title: 'РАФАЭЛЛО' ,description:'Кокосовый вкус, легкая кремовая прослойка, известное послевкусие - все как в оригинальной конфете. Добились мы этого с помощью нежного крема из мякоти кокоса, хрустящего слоя из бельгийской вафли, едва ощутимой полоски шоколада, фундука и воздушного бисквита.',compound:'Мука, сахар, яйцо, сливочное масло, сливки молочные 35%, сыр творожный, сахарная пудра, кокосовое пюре, карамелизированная вафля.'},
        { path: '/nachinka-tri-shokolada.jpg',bigImagePath:'/nachinka-tri-shokolada-big.jpg', title: 'ТРИ ШОКОЛАДА' ,description:' В основе этой начинки лежит, конечно, шоколад. Если быть точнее, то симфония из трех видов шоколада: белого, молочного и темного. Муссы каждого из них притаились на ароматном шоколадном бисквите, который помогаюет раскрыться всем трем вкусам одновременно. Остается только закатить от блаженства глаза и наслаждаться этим сладким шоколадным раем.',compound:'Белый шоколад, молочный шоколад, горький шоколад, молочные сливки, творожный сыр, яйцо, сахар, мука, коньяк, желатин.'},
        { path: '/nachinka-shokoladnaya.jpeg',bigImagePath:'/nachinka-shokoladnaya-big.jpg', title: 'ШОКОЛАДНАЯ' ,description:'Сочные шоколадные бисквиты с такими знакомыми нотами бельгийского шоколада и нежнейший шоколадный мусс, сделанный из настоящего какао. Сочная, яркая, бесконечно шоколадная и невероятно вкусная начинка, которую однозначно стоит попробовать.',compound:'Мука, сахар,яйцо,сливочное масло, цельное сгущенное молоко, какао-порошок, подсолнечное масло, коньяк, ванилин.'},
        { path: '/nachinka-orekhovaya.jpg',bigImagePath:'/nachinka-orekhovaya-big.jpg', title: 'ОРЕХОВАЯ' ,description:'Мягкий бисквит c обволакивающим сливочным кремом и пропиткой из сиропа. Слой хрупкого дробленного фундука и варенная сгущенка - в этой начинке делят первенство сразу несколько ингредиентов. Подходит всем, кто любит насыщенные сочетания.',compound:'Сливочное масло, Мука, яйца, сахар, орех фундук, сгущённое молоко вареное, коньяк, цельное сгущённое молоко'},
        { path: '/nachinka-snikers.jpg',bigImagePath:'/nachinka-snikers-big.jpg', title: 'СНИКЕРС' ,description:'Влажные шоколадные бисквиты, нежный крем-чиз, прослойка из тягучей карамели и яркий арахис. Ненавязчивая соленая нотка объединяет яркий вкус шоколада и тягучей карамели, не оставляя ни единого шанса остаться равнодушным.',compound:'Сахар, яйцо, сметана, мука, карамель, пищевая сода, какао, шоколад, сливки, творожный сыр, арахис'},
        { path: '/nachinka-klubnichnaya-devochka.jpg',bigImagePath:'/nachinka-klubnichnaya-devochka-big.jpg', title: 'КЛУБНИЧНАЯ ДЕВОЧКА' ,description:'Нежная, тающая во рту начинка с ярким вкусом свежей клубники. Начинка состоит из воздушных бисквитов на основе сгущеного молока и бархатистого сметанного крема. От ощущения невесомости отделяет лишь тонкий намек на клубнику.',compound:'Сахар, яйцо, сметана, мука, молоко сгущенное, клубника, сливки животные'},
        { path: '/nachinka-esterhazi.jpg',bigImagePath:'/nachinka-esterhazi-big.jpg', title: 'ЭСТЕРХАЗИ' ,description:'Начинка, в которой сочетаются ореховые бисквиты,   дробленый фундук и нежная прослойка из заварного крема. Едва уловимый вкус лимонной цедры добавляет нотки свежести в это сочное и яркое сочетание.',compound:'Сахар, яйцо, мука, молоко, сливочное масло, сгущенное молоко, орех фундук, лимон.'},
        { path: '/nachinka-bananovyj-brauni.jpg',bigImagePath:'/nachinka-bananovyj-brauni-big.jpg', title: 'БАНАНОВЫЙ БРАУНИ' ,description:'В этой начинке доминирует вкус бельгийского шоколада в сочетании с кусочками свежего банана, утопающего в натуральных сливках. Завершает этот купаж нежнейший крем на основе сливочного сыра. Такой состав делает эту начинку актуальной в любое время года.',compound:'Сахар, яйцо, мука, бананы, бельгийский шоколад, сливки животные, тростниковый сахар, сливочное масло, творожный сыр, сахарная пудра.'},
        { path: '/nachinka-fistashka-malina.jpg',bigImagePath:'/nachinka-fistashka-malina-big.jpg', title: 'ФИСТАШКА-МАЛИНА',description:'Эта начинка для настоящих гурманов: во вкусе присутствует сочетание фисташкового и малинового крема с ненавязчивой прослойкой из малинового кули и влажного бисквита. Яркая, хрустящая начинка, которая никого не оставит равнодушным.',compound:'Сахар, яйцо, мука, бисквит, шоколад бельгийский, фисташки, пюре малина, пата фисташковая, сыр творожный' },
    ])
    const [selectedFilling,setSelectedFilling]= useState(arr[1])
    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.left_in_left}
                        style={{ background: `url(${window.location.origin}${img})` }}>
                    </div>
                    <div className={styles.left_in_right}>
                        <p className={styles.text}>Арт:00{location.id}</p>
                        <p className={styles.title}>{location.title}</p>
                        <div className={styles.price_info}>
                            <div className={styles.price_wrapper}>
                                <img src={`${window.location.origin}/pages/cake/icon-ruble2.png`} alt="" />
                                <div>
                                    <p className={styles.title_small}>1400 руб/кг до 4 кг</p>
                                    <p className={styles.text_small}>декор и фигурки не входят в цену
                                        <img
                                            className={styles.question_img}
                                            src={`${window.location.origin}/pages/cake/question.png`}
                                            alt="" /></p>
                                </div>
                            </div>
                            <div className={styles.price_border}>
                                <div className={styles.price_border_in}></div>
                            </div>
                            <div className={styles.price_wrapper}>
                                <img src={`${window.location.origin}/pages/cake/icon-ruble3.png`} alt="" />
                                <div>
                                    <p className={styles.title_small}>1400 руб/кг до 4 кг</p>
                                    <p className={styles.text_small}>декор и фигурки входят в цену
                                        <img
                                            className={styles.question_img}
                                            src={`${window.location.origin}/pages/cake/question.png`}
                                            alt="" /></p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.size_block}>
                            <div className={styles.size_top}>
                                <div className={styles.size_text_wrapper}>
                                    <div className={styles.size_title}>
                                        Выберите вес:
                                    </div>
                                    <div
                                        className={styles.size_text}
                                        onClick={() => setTableBool(true)}>
                                        таблица размеров
                                    </div>
                                </div>
                            </div>
                            <div className={styles.size_bottom}>
                                <SizeControl
                                    bool={bool}
                                    setBool={setBool}
                                    imgPath={window.location.origin}
                                    tier={location.tier}
                                    selectedSize={selectedSize}
                                    setSeledSize={setSeledSize} />
                            </div>
                        </div>
                        <div className={styles.choose_filling}>
                            <Choose_filling setFillingPopup={setFillingPopup} setSelectedFilling={setSelectedFilling} bool={fillingPopup} setBool={setFillingPopup} arr={arr} setArr={setArr} />
                        </div>
                        <div className={styles.block_inscription}>
                            <input
                                type="text"
                                className={styles.input}
                                placeholder='Добавте поздравительный надпись'
                                ref={message} />
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <Block_right data={location}/>
                </div>
            </div>
            <div
                className={styles.table_sizes}
                style={{ display: `${tableBool ? 'block' : 'none'}` }}
                onClick={() => setTableBool(false)}>
                <div className={styles.table_sizes_wrapper}>
                    <img
                        className={styles.table_sizes_img}
                        src={`${window.location.origin}/pages/cake/popup-table-sizes.png`}
                        alt="" />
                    <div className={styles.btn_table_close}>
                        <img src={`${window.location.origin}/pages/cake/icons8.png`} alt="" />
                    </div>
                </div>
            </div>
            <div id='btn_close' className={styles.filling_popup}
                style={{ display: `${fillingPopup ? 'block' : 'none'}` }}
                onClick={(e) => e.target.id === 'btn_close' && setFillingPopup(false)}>
                <ChangeFillingPopup arr={arr} setBool={setFillingPopup} setSelectedFilling={setSelectedFilling}/>
            </div>
        </div>
    );
}

export default Cake;

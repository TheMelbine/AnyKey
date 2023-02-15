import {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {setKeyboards} from "../../redux/slices/cart";

function KeyboardBlock({keyboard}) {
    const {title, price, imageUrl, sizes, types} = keyboard

    const typeName = ['Wired', 'Wireless'];
    const [activeSize, setActiveSize] = useState(0);
    const [activeType, setActiveType] = useState(0);
    const [priceKeyboard, setPriceKeyboard] = useState(price)

    const dispatch = useDispatch()
    const handlerOnClickAddButton = () => {
        dispatch(setKeyboards({
         ...keyboard, sizes: activeSize, types: activeType,
        }))
    }

useEffect(() =>{
    console.log({activeSize,activeType})
},[activeSize,activeType])
    return (<div className="keyboard-block--wrapper">
        <div className="keyboard-block">
            <img className="keyboard-block__image" src={imageUrl} alt="lOGO"/>
            <h4 className="keyboard-block__title">{title}</h4>
            <div className="keyboard-block__selector">
                <ul>
                    {types.map((value, index) => {

                        return (<li
                            key={index}
                            onClick={() => setActiveType(value)}
                            className={activeType === index ? 'active' : ''}>
                            {typeName[value]}
                        </li>);
                    })}
                </ul>
                <ul>
                    {sizes.map((value, index) => {

                        return (<li
                            key={index}
                            onClick={() => setActiveSize(index)}
                            className={activeSize === index ? 'active' : ''}>
                            {value}
                        </li>);
                    })}
                </ul>
            </div>
            <div className="keyboard-block__bottom">
                <div className="keyboard-block__price">{priceKeyboard.toLocaleString('ru')}₽</div>
                <button onClick={() => handlerOnClickAddButton()} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Add to Card</span>
                    <i>0</i>
                </button>
            </div>
        </div>
    </div>);
}

export default KeyboardBlock;

import {FC} from "react";
import {CrossIcon, MinusIcon, PlusIcon} from "../../assets/icons";
import {TCartKeyboard} from "../../redux/slices/cart/types";
import {useActions} from "../../redux/hooks";

type Props = {keyboard: TCartKeyboard}

const KeyboardCartBlock: FC<Props> = ({keyboard}) => {
    const {removeKeyboards, setKeyboards} = useActions()
    const {title, price, imageUrl, sizes, types, count} = keyboard

    const onRemoveHandler = () => {
        removeKeyboards(keyboard);
    };

    const onAddHandler = () =>{
        setKeyboards(keyboard)
    }

    return (
        <div className="cart__item">
            <div className="cart__item-img">
                <img className="keyboard-block__image" src={imageUrl} alt="keyboard"/>
            </div>
            <div className="cart__item-info">
                <h3>{title}</h3>
                <p>{`Wire mode:${sizes} Switch:${types}`}</p>
            </div>
            <div className="cart__item-count">
                <div className="button button--outline button--circle cart__item-count-minus" onClick={onRemoveHandler}>
                    <MinusIcon/>
                </div>
                <b>{count}</b>
                <div className="button button--outline button--circle cart__item-count-plus" onClick={onAddHandler}>
                    <PlusIcon/>
                </div>
            </div>
            <div className="cart__item-price">
                <b>{`Price: ${(price * count).toLocaleString('ru')}₽`}</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle button--rotated">
                    <CrossIcon/>
                </div>
            </div>
        </div>

    )
}
export default KeyboardCartBlock;

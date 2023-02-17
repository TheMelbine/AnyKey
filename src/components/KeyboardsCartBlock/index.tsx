import {FC} from "react";
import {CrossIcon, MinusIcon, PlusIcon} from "../../assets/icons";
import {TCartKeyboard} from "../../redux/slices/cart/types";

type Props = Pick<TCartKeyboard, "title" | "price" | "imageUrl" | "sizes" | "types" | "count">

const KeyboardCartBlock: FC<Props> = ({title, price, imageUrl, sizes, types,count}) => {

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
                <div className="button button--outline button--circle cart__item-count-minus">
                    <MinusIcon/>
                </div>
                <b>{count}</b>
                <div className="button button--outline button--circle cart__item-count-plus">
                   <PlusIcon/>
                </div>
            </div>
            <div className="cart__item-price">
                <b>{`Price: ${(price*count).toLocaleString('ru')}₽`}</b>
            </div>
            <div className="cart__item-remove">
                <div className="button button--outline button--circle button--rotated">
                    <CrossIcon />
                </div>
            </div>
        </div>

    )
}
export default KeyboardCartBlock;

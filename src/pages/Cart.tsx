
import {Link} from 'react-router-dom';
import styles from './Cart.module.scss';
import KeyboardCartBlock from "../components/KeyboardsCartBlock";
import {ArrowIcon, CartIcon, TrashcanIcon} from "../assets/icons"
import {selectCartTotalCount, selectCartTotalPrice} from "../redux/slices/cart/selectors";
import {useActions, useAppSelector} from "../redux/hooks";


export default function Cart() {
    const {clearCart} = useActions()
    const keyboards = useAppSelector(state => state.cartSlice.keyboards)
    const totalPrice = useAppSelector(selectCartTotalPrice)
    const totalCount = useAppSelector(selectCartTotalCount)
    const handleEmptyTrash = () => {
        clearCart()
    }
    return (
        <div className="cart">
            <div className="cart__top">
                <h2 className="content__title">
                    <CartIcon/>
                    Cart
                </h2>
                <div className="cart__clear" onClick={() => handleEmptyTrash()}>
                    <TrashcanIcon/>
                    <span>Empty trash</span>
                </div>
            </div>
            <div className={styles.content__items}>
            </div>
            {keyboards.map((obj, index) => <KeyboardCartBlock key={index} {...obj} />)}
            <div className="cart__bottom">
                <div className="cart__bottom-details">
          <span>
            All keyboard: <b>{`${totalCount} pcs.`}</b>
          </span>

                    <span>
            Total sum: <b>{totalPrice.toLocaleString('ru') || '0'}₽</b>
          </span>
                </div>
                <div className="cart__bottom-buttons">
                    <Link to="/" className="button button--outline button--add go-back-btn">
                        <ArrowIcon/>
                        <span>Вернуться назад</span>
                    </Link>
                    <div className="button pay-btn">
                        <span>Оплатить сейчас</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

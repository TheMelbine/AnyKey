import {Link} from 'react-router-dom';

import Search from '../Search';

import logoSvg from '../../assets/img/Frame 38.svg';
import styles from './Header.module.scss';
import {useSelector} from "react-redux";
import {selectCartTotalCount, selectCartTotalPrice} from "../../redux/slices/cart/selectors";
import { ReactComponent as CartIcon } from '../../assets/icons/cart.svg'
function Header() {
    const keyboards = useSelector(state => state.cartSlice.keyboards)
    const totalPrice = useSelector(selectCartTotalPrice)
    const totalCount = useSelector(selectCartTotalCount)
    return (
        <div className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__logo}>
                    <a href="/">
                        <img width="60" src={logoSvg} alt="Pizza logo"/>
                    </a>
                    <div>
                        <Link to="/">
                            <h1>AnyKey</h1>
                            <p>Best Keyboard ever </p>
                        </Link>
                    </div>
                </div>
                <Search/>
                <div className={styles.header__cart}>
                    <Link to="/cart" className={[styles.button, styles.button__cart].join(' ')}>
                        <span>{totalPrice.toLocaleString('ru')} ₽</span>
                        <div className="button__delimiter"></div>
                        <CartIcon/>
                        <span>{totalCount}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;

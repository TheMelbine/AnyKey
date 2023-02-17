import {ChangeEvent, useCallback, useRef, useState} from 'react';
import styles from './Search.module.scss';
import {setSearchValue} from "../../redux/slices/filters/filterSlice";
import debounce from "lodash.debounce";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {CrossIcon} from "../../assets/icons";

const Search = () => {
    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()
    const searchValue = useAppSelector((state) => state.filterSlice.searchValue)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const onClickClear = () => {
        dispatch(setSearchValue(''));
        setValue('');
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const updateSearchValue = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str));
        }, 150),
        [],
    );

    const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    };


    return (
        <div className={styles.root}>
            <input
                ref={inputRef}
                className={styles.input}
                value={value}
                onChange={onChangeInput}
                placeholder="🔎  Find keyboard"
                type="text"
            />
            {searchValue && (
                <CrossIcon onClick={onClickClear} className={styles.input__cross}/>
            )}
        </div>
    );
};
export default Search;

import React from 'react';
import s from "./Form.module.css";
import img from '../../img/visa.png';
import Helpers from "../../helpers/helpers";

type valuesType = {
    cardNumber: number
    expiry: number
    cardCode: number
}

const Form = () => {
    const [values, setValues] = React.useState<valuesType>({} as valuesType);

    const onChangeCardNumberBox = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawText = event.target.value.split(' ').join('');
        // @ts-ignore
        if (!isNaN(rawText) && rawText.length <= 16) {
            setValues({...values, cardNumber: +rawText});
        }
    };
    const onChangeExpiry = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawText = event.target.value.split('/').join('');
        // @ts-ignore
        if (!isNaN(rawText) && rawText.length <= 4) {
            setValues({...values, expiry: +rawText});
        }
    };
    const onChangeCardCode = (event: React.ChangeEvent<HTMLInputElement>) => {
        const rawText = event.target.value;
        // @ts-ignore
        if (!isNaN(rawText) && rawText.length <= 3) {
            setValues({...values, cardCode: +rawText});
        }
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert(JSON.stringify(values, null, 2));
        setValues({} as valuesType);
    }

    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
            <h4>Pay with your credit card via PayPal Website Payments Pro. TEST MODE/SANDBOX ENABLED</h4>

            <div className={s.formInputs}>
                <div className={s.cardNumberBox}>
                    <p>Card number <span>*</span></p>
                    <input value={Helpers.helpCardDisplay(values.cardNumber)}
                           placeholder='**** **** **** ****'
                           onChange={onChangeCardNumberBox}
                           style={values.cardNumber && values.cardNumber.toString().length > 0 ? {backgroundImage: `url(${img})`} : {}}
                           required/>
                </div>
                <div className={s.expiryPlusCardCodeBox}>
                    <div className={s.expiryBox}>
                        <p>Expiry (MM/YY) <span>*</span></p>
                        <input value={Helpers.helpExpiryDisplay(values.expiry)}
                               placeholder='MM/YY'
                               onChange={onChangeExpiry}
                               required/>
                    </div>
                    <div className={s.cardCodeBox}>
                        <p>Card code <span>*</span></p>
                        <input value={Helpers.helpCardCodeDisplay(values.cardCode)}
                               placeholder='CVC'
                               onChange={onChangeCardCode}
                               required/>
                    </div>
                </div>
                <input type="submit" className={s.onSubmitButton}/>
            </div>
        </form>
    )
}
export default Form;
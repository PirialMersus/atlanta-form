import React from 'react'
import s from "./Form.module.css"

type valuesType = {
    cardNumber: number
    expiry: number
    cardCode: number

}

const Form = () => {
    const [error, setError] = React.useState(false)
    const [values, setValues] = React.useState<valuesType>({} as valuesType);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Hello, word! )");
    }

    return (
        <form onSubmit={handleSubmit} className={s.formContainer}>
            <h4>Pay with your credit card via PayPal Website Payments Pro. TEST MODE/SANDBOX ENABLED</h4>

            <div className={s.formInputs}>
                <div className={s.cardNumberBox}>
                    <p>Card nuber <span>*</span></p>
                    <input className={s.cardNumberBox__input} value={values.cardNumber}
                           placeholder='**** **** **** ****'
                           onChange={onChange}
                           required/>
                </div>
                <div className={s.expiryPlusCardCodeBox}>
                    <div className={s.expiryBox}>
                        <p>Expiry (MM/YY) <span>*</span></p>
                        <input value={values.expiry}
                               onChange={onChange}
                               required/>
                    </div>
                    <div className={s.cardCodeBox}>
                        <p>Card code <span>*</span></p>
                        <input value={values.cardCode}
                               onChange={onChange}
                               required/>
                    </div>
                </div>


                {/*<input type="submit"/>*/}
            </div>


        </form>
    )
}
export default Form;
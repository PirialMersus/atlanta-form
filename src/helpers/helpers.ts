const helpCardDisplay = (value: number) => {
    if (!value) return '';
    const stringValue = value.toString();
    // @ts-ignore
    const rawText = [...stringValue.split(' ').join('')];
    const creditCard: any = [];
    rawText.forEach((t, i) => {
        if (i % 4 === 0) creditCard.push(' ');
        creditCard.push(t);
    })
    return creditCard.join('');
}
const helpExpiryDisplay = (value: number) => {
    if (!value) return '';
    const stringValue = value.toString();
    // @ts-ignore
    const rawText = [...stringValue.split('/').join('')];
    const creditCard: any = [];
    rawText.forEach((t, i) => {
        if (i % 2 === 0 && i !== 0) creditCard.push('/');
        creditCard.push(t);
    })
    return creditCard.join('');
}
const helpCardCodeDisplay = (value: number) => {
    if (!value) return '';
    return value.toString();
}
export default {helpCardDisplay, helpExpiryDisplay, helpCardCodeDisplay}
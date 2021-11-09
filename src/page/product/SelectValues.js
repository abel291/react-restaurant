import { fomatCurrency } from "../../helpers/helpers"

const SelectValues = ({ value=1,product, onChange = () => {} }) => {
    const optionValues = []
    for (let i = 0; i < product.max_quantity; i++) {
        let priceForQuantity = ((i + 1) * product.price).toFixed(2)
        optionValues[i] = (
            <option value={i + 1} key={i}>
                {i + 1} - {fomatCurrency(priceForQuantity)}
            </option>
        )
    }
    return (
        <select value={value} className="w-full font-bold" onChange={onChange}>
            {optionValues}
        </select>
    )
}

export default SelectValues

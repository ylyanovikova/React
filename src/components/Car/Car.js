const Car = ({ car }) => {
    const { model, price, year } = car;

    return (
        <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <br />
        </div>
    )
};
export { Car };
function HandleInputChange(event, onchangeFunc) {
    const { name, value} = event.target;
    onchangeFunc(prevState => ({
        ...prevState,
        [name]: value
    }))
}

export default HandleInputChange;
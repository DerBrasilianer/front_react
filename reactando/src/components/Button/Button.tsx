const Button = () => {

    try {

        console.log(invalidVariable)

    } catch (error) {

        console.error(error)

        throw error

    }

    return <button>Click me</button>

}

export default Button
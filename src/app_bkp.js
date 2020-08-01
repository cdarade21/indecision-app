var template = (
    <div>
        <h1>Indescision App!</h1>
        <p>This APP is created by Bunty Darade!</p>
        <p>Most annoying person list in my life!</p>
        <ol>
            <li>Tanvi Rasam</li>
            <li>Digvijay Gole</li>
        </ol>
    </div>
);

let count=0

// const addOne = () => {
//     console.log("Addind One!")
//     count++
//     startState()

// } 
// const minusOne = () => {
//     console.log("MinusOne")
//     count-=1
//     startState()
// }

// const reset = () => {
//     console.log("Reset!")
//     count=0
//     startState()
// }

var appRoot = document.getElementById('app')

const application = {
    options: []
}

const submitForm = (e) => {
    e.preventDefault()
    console.log("Form Submitted")
    const option = e.target.elements.option.value;

    if(option) {
        application.options.push(option)
        e.target.elements.option.value=''
        startForm()
    }
}

const updateCount = () => {
    console.log(options)
    submitForm()
    count = application.options.length
    startForm()
}
// const startState = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count:{count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
           
//         </div>   

//     )
//     ReactDOM.render(templateTwo, appRoot)
// }

const removeOptions = () => {
    application.options = []
    startForm()
}

const startForm = () => {
    const templateThree = (
    <div>
        {application.options.length>0 && <p>{application.options.length}</p>}
        <form onSubmit={submitForm}>   
            <input type="text" name="option" placeholder="input"/>
            <button>Add Option</button>
            <button onClick={removeOptions}>Remove all Option</button>
        </form>
    </div>
    );

    ReactDOM.render(templateThree, appRoot)
}

// startState()

startForm()


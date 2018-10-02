
const app = {
    title: 'JSX Web App',
    content: 'This is a small demo using JSX template',
    options: ['One', 'Two']
};

// JSX - JavaScript XML
const template = (
    <div>
        <h1>{app.title}</h1>
        {app.content && <p>{app.content}</p>}
        {getOptions(app.options)}
    </div>
);

function getOptions(options){

    if(options && options.length > 0){
        return (
            <div>
                <p>These are your options</p>
                <ul>
                    <li>Option {options[0]}</li>
                    <li>Option {options[1]}</li>
                </ul>
            </div>
        );
    }

    return <p>There are no options</p>;
}

function getLocation(city){
    if(city){
        return <p>Location: {city}</p>;
    }
}

const user = {
 name: 'Luis Casas',
 age: 21,
 city: 'Edinburgh'
};

let count = 0;

const addOne = () => {
    count++;
    // console.log('addOne'+ count);
    renderCounter();
} 

const minusOne = () => {
    count--;
    // console.log('minusOne'+ count);
    renderCounter();
}

const reset = () => {
    count = 0;
    // console.log('reset'+ count);
    renderCounter();
}

const appRoot = document.getElementById('app');

const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: <span id="count">{count}</span></h1>
            <button onClick={addOne}> +1</button>
            <button onClick={minusOne}> -1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
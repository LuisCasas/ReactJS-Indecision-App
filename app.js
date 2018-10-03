
const app = {
    title: 'JSX Web App',
    content: 'This is a small demo using JSX template',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderTemplate();
    }
}

function getOptions(options){

    if(options && options.length > 0){
        return (
            <div>
                <p>These are your options</p>
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

const appRoot = document.getElementById('app');

const removeAll = () => {
    app.options = [];
    renderTemplate();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

// JSX - JavaScript XML
const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.content && <p>{app.content}</p>}
            {getOptions(app.options)}
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((option) => <li key={option}>Option {option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();

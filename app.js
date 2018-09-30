
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

const templateTwo = (
    <div>
        <h1>{user.name ? user.name : 'Unknown'}</h1>
        {user.age >= 18 && <p>Age: {user.age} </p>}
        {getLocation(user.city)}
    </div>
);

const appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);
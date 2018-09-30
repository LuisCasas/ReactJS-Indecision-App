
var app = {
    title: 'JSX Web App',
    content: 'This is a small demo using JSX template'
};

// JSX - JavaScript XML
var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.content}</p>
    </div>
);

var user = {
 name: 'Luis Casas',
 age: '?',
 city: 'Edinburgh'
};

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.city}</p>
    </div>
);

var appRoot = document.getElementById('app');


ReactDOM.render(template, appRoot);
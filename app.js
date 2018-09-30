// JSX - JavaScript XML
var template = (
    <div>
        <h1>This is JSX from app.js !!</h1>
        <p>Some text</p>
    </div>
);

var templateTwo = (
    <div>
        <h1>Luis Casas</h1>
        <p>Age: none of your business</p>
        <p>Location: Edinburgh</p>
    </div>
);

var appRoot = document.getElementById('app');


ReactDOM.render(templateTwo, appRoot);
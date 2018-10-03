const appRoot = document.getElementById('app');

const randomText = 'This is some ramdon text';

let buttonAction = 'Show me the hidden text';
let trueFalse = false;

const onToggleAction = () => {

    if(trueFalse){
        trueFalse = false;
        buttonAction = 'Show me the hidden text'
    } else {
        trueFalse = true;
        buttonAction = 'Hide the text below';
    }

    render();
};

const render = () => {

    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleAction}>{buttonAction}</button>
            {(trueFalse) && <p>{randomText}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
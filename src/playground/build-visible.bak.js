const appRoot = document.getElementById('app');

const randomText = 'This is some ramdon text';

let visible = false;

const onToggleAction = () => {

    // visible ? visible = false :  visible = true;
    visible = !visible;

    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleAction}>{visible ? 'Show text' :  'Hide text'}</button>
            {(visible) && <p>{randomText}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();
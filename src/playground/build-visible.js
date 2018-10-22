
const randomText = 'This is some ramdon text';

class VisibilityToggle extends React.Component{

    constructor(props){
        super(props);

        this.onToggleAction = this.onToggleAction.bind(this);

        this.state = {
            visible: false
        };
    }

    onToggleAction(){
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.onToggleAction}>{this.state.visible ?  'Hide text' : 'Show text'}</button>
                {(this.state.visible) && <p>{randomText}</p>}
            </div>       
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));


/*
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
*/
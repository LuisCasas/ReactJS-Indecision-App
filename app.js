/*
    ## command line to run babel react$:
    babel src\app.js --out-file=public/scripts/app.js --presets=env,react --watch

    live-server public
*/


/*
const obj = {
    name: 'John',
    getName(){
        return this.name;
    }
}

const getName = obj.getName.bind(obj);

console.log(getName());

*/

class IndecisionApp extends React.Component{

    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: []
        }
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options: []
            };
        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }   

    handleAddOption(option){

        if(!option){
            return 'Add a valid item!';
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists!'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    render(){

        const title = 'Indecision App!';
        const subtitle = 'Put your life in the hands of a computer';
    
        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />           
            </div>
        )
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    );
}

/*
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}
*/

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
            </button>
        </div>
    );
};

/*
class Action extends React.Component{
    render(){
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                    handledeleteoptions={this.props.handleDeleteOptions}
                    >
                    What should I do?
                </button>
            </div>
        );
    }
}
*/

const Options = (props) => {
    return(
        <div>
            <p><button onClick={props.handleDeleteOptions}>Remove All</button> </p>
            <p>Your options here:</p>
            <p>Number of options: {props.options.length}</p>
            <ul>
                {
                   // this.props.options.map((option) => <li key={option}>{option}</li>)
                    props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </ul>
        </div>
    );
};

/*
class Options extends React.Component{
    render(){
        return(
            <div>
                <p><button onClick={this.props.handleDeleteOptions}>Remove All</button> </p>
                <p>Your options here:</p>
                <p>Number of options: {this.props.options.length}</p>
                <ul>
                    {
                       // this.props.options.map((option) => <li key={option}>{option}</li>)
                        this.props.options.map((option) => <Option key={option} optionText={option} />)
                    }
                </ul>
            </div>
        );
    }
}
*/

const Option = (props) => {
    return(
        <li>{props.optionText}</li>
    );
};

/*
class Option extends React.Component{
    render(){
        return(
            <li>{this.props.optionText}</li>
        );
    }
}
*/

class AddOption extends React.Component{

    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();
        const error =  this.props.handleAddOption(option);

        this.setState(() => {
            return { error };
        });
    }

    render(){
        return(
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption} >
                <input type='text' name='option' />
                <button>Add option</button>
            </form>
             </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/*
const User = (props) => {

    return (
        <div>
            <p>User: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>

    );
};


ReactDOM.render(<User name="John" age={33} />, document.getElementById('app'));
*/
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
        this.state = {
            options: ['Option 1', 'Option 2', 'Option 3']
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
                <AddOption />           
            </div>
        )
    }
}

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

class Option extends React.Component{
    render(){
        return(
            <li>{this.props.optionText}</li>
        );
    }
}

class AddOption extends React.Component{

    handleAddOption(e){
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option){
            // alert(option);
        }
    }

    render(){
        return(
            <div>
            <form onSubmit={this.handleAddOption} >
                <input type='text' name='option' />
                <button>Add option</button>
            </form>
             </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
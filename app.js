/*
    ## command line to run babel react$:
    babel src\app.js --out-file=public/scripts/app.js --presets=env,react --watch

    live-server public
*/

class IndecisionApp extends React.Component{
    render(){

        const title = 'Indecision App!';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['Option 1', 'Option 2', 'Option 3'];

        return(
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
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
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        return(
            <div>
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
    render(){
        return(
            <div>
                <p>Add options here</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
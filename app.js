import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


class OldSyntax{
    constructor(){
        this.name = 'John';
        this.getGreeting = this.getGreeting.bind(this);
    }

    getGreeting(){
        return 'Hello '+this.name;
    }
}

const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax{
    name = 'Mike';
    getGreeting = () => {
        return 'Hello!! '+this.name;
    }
}
const newSyntax = new NewSyntax();
const newGreeting = newSyntax.getGreeting;
console.log(newGreeting());

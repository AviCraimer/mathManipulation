import React from 'react';

class MathElement extends React.Component {
    constructor () {
        super();
    }

    makeScriptElement () {
        const {mathExpression} =  this.props;
        const scriptElement = document.createElement('script');
        scriptElement.type = 'math/asciimath';

        scriptElement.textContent = mathExpression;

        this.divElement.appendChild(scriptElement);
        return scriptElement;
    }

    componentDidMount () {
        this.makeScriptElement();
        MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }

    componentDidUpdate (prevProps ) {
        if (prevProps.mathExpression !== this.props.mathExpression) {
            // console.log(this.divElement);
            Array.from(this.divElement.children).forEach( child => child.remove());
            this.makeScriptElement();
            MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
        }
    }

    render ( ) {
        return (
        <div  className="math-element" ref={el => this.divElement = el}>

        </div>
        )
    }

}
export default MathElement;
import React from 'react';
// import axios from 'axios';

//react-redux
import {connect} from 'react-redux';
// import { } from '../reduxActions/asyncActions';
import {windowResize} from '../reduxActions/syncActions';

//React Components
import MathElement from './MathElement';


class Main extends React.Component {

    constructor() {
        super()

        this.state = {
            mathJaxReady: false,
            mathExpression: 'x + y',
            inputValue: ''
        };

        //Add all the breakpoints that require javascript behaivor here. Pure CSS breakpoints don't need to be added. These determine when the window resize event will update the windowWidth in state.
        this.breakpoints = [];
        //BREAKPOINT USAGE
        //1050
        //970
        //550
            //The map pop up buttons and map pop up mobile CSS class
    }

    componentDidUpdate (prevProps) {


    }





    componentDidMount() {

        this.intervalId = setInterval(() => {
            if (MathJax.Hub !== undefined) {
                this.setState({mathJaxReady: true});
                console.log('mathjax is ready', MathJax);
                clearInterval(this.intervalId );
            } else {
                console.log('Mathjax is not ready', MathJax);
            }
        }, 100);




        //Redux async actions


        //Window resize event listener to update state.windowWidth when a breakpoint has been crossed
        window.addEventListener('resize', (e) => {
            const hasCrossed = fn.hasCrossedBreak(this.breakpoints, this.props.windowWidth, e.target.innerWidth);

            if (hasCrossed === true) {
                windowResize(e.target.innerWidth);
            }
        });

        //initialize windowWidth in store on page load
        windowResize(window.innerWidth);

    }//End of componentDidMount


    componentDidUpdate (prevProps, prevState) {


    }

    render() {
        return (
        <main>
            <h1>Hello World</h1>
            <form action=""
                onSubmit={(e)=>{
                    e.preventDefault();
                    this.setState({
                        mathExpression: this.state.inputValue,
                        inputValue: ''
                     });

                }}
            >
                <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={(e)=> {
                    // console.log(e.target.value)
                    this.setState({inputValue: e.target.value   })
                }   }  />
            </form>
            {
                (this.state.mathJaxReady && this.state.mathExpression)
                ? <MathElement mathExpression={this.state.mathExpression}  />
                : null
            }
        </main>
      )
    }
  }

//React-redux connect
const mapStateToProps = (storeState) =>  {
    const {windowWidth} = storeState.windowData;
    return {
        windowWidth
    }
}

export default connect(
    mapStateToProps
  )(Main);




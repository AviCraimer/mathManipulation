import { stringify } from "querystring";

//Put functions that may need to be shared across multiple components here.

//These functions should not use this.props or this.state since it is unknown what the execution context will be. They should not refer to external libraries or global variables (except for fn itself). They should not be used to setState.

//Pass in props or state as arguments to the function. Return values and use React component methods to setState or pass props.

// fn is added as a global variable so it doesn't need to be imported separately into each component.

const fn = {};

//Use in the contructor to bind class functions by name
fn.bindFunctions = function (_this, funcNamesArr) {
    for (let i = 0; i < funcNamesArr.length; i++) {

        const funcName = funcNamesArr[i];
        // console.log('function', _this[funcName]);
        _this[funcName] = _this[funcName].bind(_this)
    }
}




fn.numberWithCommas = function (x) {
    if(x == null) {
        x = 0;
    }
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

fn.listItemsToStringWithAnd = function (list) {
    const readyToJoin = list.map((item, index, list) => {
        if (index === list.length - 2) {
            return item + ' and ';
        } else if (index === list.length - 1) {
            return item;
        } else {
            return item + ', '
        }
    });

    return readyToJoin.join('');
}

fn.isPostalCode = function (string) { //Tests if a string is a postal code. Works with hypens and spaces.
    const regex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if (string.trim().match(regex)) {
        return true;
    } else {
        return false;
    } ;
}

fn.padNumber = function (num, size) {
    var s = "0000000" + num;
    return s.substr(s.length-size);
}

fn.snakeCaseToCamelCase = function (snakeStr) {
    return snakeStr.split('_').map((word, i) => {
        if (i > 0) {
            return word.charAt(0).toUpperCase() + word.substring(1);
        } else {
            return word;
        }
    })
    .join('');
}



//Get the month abbreviation based on return value of a date object's getMonth() method
fn.getMonthAbbr = function (zeroIndexedMonth) {
    const monthAbbr = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];
    return monthAbbr[zeroIndexedMonth];
}

//Better method of rounding to a given number of decimals. It ensures that edge cases don't round the wrong direction.
fn.roundToXDecimalPlaces = function (number, numberOfDecimalPlaces) {
    return Number(Math.round(number+'e'+numberOfDecimalPlaces)+'e-'+numberOfDecimalPlaces);
}


//Used to test if the resized window width has crossed any of the breakpoints
fn.hasCrossedBreak = function (breakpoints, initWidth, newWidth ) {
    // console.log(breakpoints, initWidth, newWidth);
    const hasCrossedFinal = breakpoints.reduce( (hasCrossed, breakpoint) => {
            if (initWidth <= breakpoint && newWidth >= breakpoint) {
                hasCrossed = true;
            } else if (initWidth >= breakpoint && newWidth <= breakpoint) {
                hasCrossed = true;
            }
            return hasCrossed;
        }, false );
    return hasCrossedFinal;
}

//Returns the dimensions of a specific HTML element
fn.getDimensions = function (element) {
        if (element) {
            const boundingRect = element.getBoundingClientRect();
            const {height,width} =  boundingRect;
            return {height,width};
        } else { //Gives an placeholder object in case element is not initialized yet
            return {width: 0, height: 0}
        }
}

export default fn;
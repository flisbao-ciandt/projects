'use strict';

var templating = {
    title: 'IndecisionApp',
    subtitle: 'My newest App'
};

var options = ['Item One', 'Item Two'];

function getText(text) {
    return text ? text : undefined;
}

var counter = 0;

var addOne = function addOne() {
    counter++;
    renderTemplate();
};

var reset = function reset() {
    counter = 0;
    renderTemplate();
};

var minusOne = function minusOne() {
    counter--;
    renderTemplate();
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        getText(templating.title)
    ),
    templating.subtitle ? React.createElement(
        'h2',
        null,
        templating.subtitle
    ) : undefined,
    options && options.length > 0 && React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            options[0]
        ),
        React.createElement(
            'li',
            null,
            options[1]
        )
    ),
    React.createElement(
        'button',
        { id: 'addOne', onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { id: 'reset', onClick: reset },
        'reset'
    ),
    React.createElement(
        'button',
        { id: 'minusOne', onClick: minusOne },
        '-1'
    )
);

var app = document.getElementById('app');

//ReactDOM.render(template,app);

var renderTemplate = function renderTemplate() {
    var thisTemplate = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Counter: ',
            counter
        ),
        React.createElement(
            'button',
            { id: 'addOne', onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { id: 'reset', onClick: reset },
            'reset'
        ),
        React.createElement(
            'button',
            { id: 'minusOne', onClick: minusOne },
            '-1'
        )
    );
    ReactDOM.render(thisTemplate, app);
};

renderTemplate();

const templating = {
    title: 'IndecisionApp',
    subtitle: 'My newest App'
};

let options = ['Item One', 'Item Two'];

function getText(text) {
    return text ? text : undefined;
}

let counter = 0;

const addOne = () => {
    counter++;
    renderTemplate();
}

const reset = () => {
    counter = 0;
    renderTemplate();
}

const minusOne = () => {
    counter--;
    renderTemplate();
}

const template = (
    <div>
        <h1>{getText(templating.title)}</h1>
        {templating.subtitle ? <h2>{templating.subtitle}</h2> : undefined}
        {(options && options.length>0) && <ol>
            <li>{options[0]}</li>
            <li>{options[1]}</li>
        </ol>}
        <button id="addOne" onClick={addOne}>+1</button>
        <button id="reset" onClick={reset}>reset</button>
        <button id="minusOne" onClick={minusOne}>-1</button>
    </div>
);


const app = document.getElementById('app');

//ReactDOM.render(template,app);

const renderTemplate = () => {
  const thisTemplate = (
      <div>
        <h1>Counter: {counter}</h1>
        <button id="addOne" onClick={addOne}>+1</button>
        <button id="reset" onClick={reset}>reset</button>
        <button id="minusOne" onClick={minusOne}>-1</button>
      </div>
  );
  ReactDOM.render(thisTemplate, app)
};

renderTemplate();
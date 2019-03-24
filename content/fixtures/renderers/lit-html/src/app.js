import { element, renderer } from 'swiss-element';
import { useState } from 'swiss-element/hooks';
import { html, render } from 'lit-html';
import './fullname.js';

function App() {
  const [name, setName] = useState('');

  return html`
    <div class="box">
      <h2 class="title">User Page</h2>
      <h3 class="subtitle">${name}</h3>

      <full-name @change="${ev => ev.detail && setName(ev.detail)}"> </full-name>
    </div>
  `;
}

element('my-app', App, renderer(render));

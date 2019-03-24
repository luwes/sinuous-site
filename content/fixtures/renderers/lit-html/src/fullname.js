import { element, renderer } from 'swiss-element';
import { useState } from 'swiss-element/hooks';
import { html, render } from 'lit-html';

function dispatch(el, first, last) {
  let event = new CustomEvent('change', {
    detail: first + ' ' + last
  });
  el.dispatchEvent(event);
}

function FullName(el) {
  const [first, setFirst] = useState('Leonhard');
  const [last, setLast] = useState('Euler ✍️');

  dispatch(el, first, last);

  return html`
    <div class="field">
      <label class="label">First name</label>
      <div class="control">
        <input class="input"
          value="${first}"
          @keyup="${ev => setFirst(ev.target.value)}">
      </div>
    </div>
    <div class="field">
      <label class="label">Last name</label>
      <div class="control">
        <input class="input"
          value="${last}"
          @keyup="${ev => setLast(ev.target.value)}">
      </div>
    </div>
  `;
}

element('full-name', FullName, renderer(render));

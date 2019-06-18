import { o, h } from 'sinuous';
import { element } from 'swiss';

function Counter() {
  const count = o(0);

  return html`
    <div class="box level">
      <div class="level-item">
        <button class="button" onclick="${() => () => count(count() - 1)}">-</button>
      </div>
      <div class="level-item">
        <h1 class="title">${count}</h1>
      </div>
      <div class="level-item">
        <button class="button" onclick="${() => () => count(count() + 1)}">+</button>
      </div>
    </div>
  `;
}

element('s-counter', Counter);

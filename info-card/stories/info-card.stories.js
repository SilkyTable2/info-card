import { html } from 'lit';
import '../src/info-card.js';

export default {
  title: 'InfoCard',
  component: 'info-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <info-card
      style="--info-card-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </info-card>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};

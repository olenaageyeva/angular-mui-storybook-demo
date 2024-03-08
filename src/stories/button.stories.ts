import { moduleMetadata, type Meta, type StoryObj, Story } from '@storybook/angular';

import { ButtonComponent } from '../app/components/button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ButtonComponent> = {
  title: 'Example/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  decorators: [ 
    moduleMetadata({
      imports: [MatButtonModule, MatIconModule, ButtonComponent],
    }),
  ],
  render: (args: ButtonComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
    options: { control: 'object' },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'primary', 'secondary', 'icon'],
      },
    },
  },
};

export default meta;
const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `<my-button [variant]="variant" [options]="options" (click)="onClick($event)">
  {{options?.label || 'Click me!'}}
  </my-button>`,
});

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  options: { label: 'Click me!', disabled: false, color: 'primary'},
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  options: { label: 'Click me!', disabled: false, color: 'primary'},
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  options: { label: 'Click me!', disabled: false, color: 'primary' },
};

export const Icon = Template.bind({});
Icon.args = {
  variant: 'icon',
  options: { label: 'favorite', icon: 'favorite', disabled: false, color: 'primary'},
};

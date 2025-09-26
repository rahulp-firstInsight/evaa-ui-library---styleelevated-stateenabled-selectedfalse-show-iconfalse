import type { Meta, StoryObj } from '@storybook/react';
import { Chips } from './chips';

const meta: Meta<typeof Chips> = {
  title: 'Components/Chips',
  component: Chips,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    labelText: {
      control: 'text',
      description: 'The text displayed on the chip',
    },
    pressed: {
      control: 'boolean',
      description: 'Whether the chip is in pressed state',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the chip is selected',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show an icon in the chip',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when chip is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: 'Label',
    pressed: false,
    selected: false,
    showIcon: false,
  },
};

export const WithIcon: Story = {
  args: {
    labelText: 'With Icon',
    pressed: false,
    selected: false,
    showIcon: true,
  },
};

export const Selected: Story = {
  args: {
    labelText: 'Selected',
    pressed: false,
    selected: true,
    showIcon: false,
  },
};

export const Pressed: Story = {
  args: {
    labelText: 'Pressed',
    pressed: true,
    selected: false,
    showIcon: false,
  },
};

export const SelectedWithIcon: Story = {
  args: {
    labelText: 'Selected',
    pressed: false,
    selected: true,
    showIcon: true,
  },
};

export const Interactive: Story = {
  args: {
    labelText: 'Click me',
    pressed: false,
    selected: false,
    showIcon: false,
  },
  play: async ({ canvasElement }) => {
    // You can add interaction tests here if needed
  },
};

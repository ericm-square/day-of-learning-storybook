import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { DayOfLearning } from "./DayOfLearning";

const meta = {
  title: "Day of Learning/DayOfLearningCard",
  component: DayOfLearning,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    isLive: {
      control: "boolean",
    },
    attendees: {
      control: { type: "number", min: 0, max: 1000 },
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof DayOfLearning>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Day of Learning",
    speaker: "Ebony Louis", 
    topic: "How to Build an MCP Server",
    attendees: 125,
    isLive: false,
    variant: "primary",
  },
};
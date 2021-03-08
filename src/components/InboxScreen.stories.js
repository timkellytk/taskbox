import React from "react";
import { Provider } from "react-redux";

import { PureInboxScreen } from "./InboxScreen";

import { action } from "@storybook/addon-actions";

import * as TaskListStories from "./TaskList.stories";

const store = {
  getState: () => {
    return {
      tasks: TaskListStories.Default.args.tasks,
    };
  },
  subscribe: () => 0,
  dispatch: action("dispatch"),
};

const story = {
  title: "PureInboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
  component: PureInboxScreen,
};

export default story;

const Template = (args) => <PureInboxScreen {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};

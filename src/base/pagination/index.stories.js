import { html } from "lit-html";
import "./index.ts";

export default {
  title: "base/pagination",
  argTypes: {
    visible: { name: "visible" },
    isNext: { name: "isNext" },
    isPrev: { name: "isPrev" },
  },
  parameters: {
    actions: {
      handles: ["kuc:pagination-click-prev", "kuc:pagination-click-next"],
    },
  },
};

const Template = (args) => {
  return html`
    <kuc-base-pagination
      .visible="${args.visible}"
      .isNext="${args.isNext}"
      .isPrev="${args.isPrev}"
    ></kuc-base-pagination>
  `;
};

export const Base = Template.bind({});
Base.args = {
  visible: true,
  isPrev: true,
  isNext: true,
};

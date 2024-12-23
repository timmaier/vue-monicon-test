import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import Input from "../Input.vue";

describe("Input", () => {
  it("renders properly", () => {
    const wrapper = mount(Input, { props: { placeholder: "Hello Icon" } });
    expect(wrapper.text()).toContain("Hello Icon");
  });
});

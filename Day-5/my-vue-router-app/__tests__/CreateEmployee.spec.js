import { mount } from "@vue/test-utils";
import CreateEmployee from "../src/components/CreateEmployee.vue";

describe("CreateEmployee", () => {
  it("renders form elements correctly", () => {
    const wrapper = mount(CreateEmployee);

    expect(wrapper.find("form").exists()).toBe(true);
    expect(wrapper.find('label[for="name"]').exists()).toBe(true);
    expect(wrapper.find("input#name").exists()).toBe(true);
    expect(wrapper.find('label[for="salary"]').exists()).toBe(true);
    expect(wrapper.find("input#salary").exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  it("calls createEmp method when form is submitted", async () => {
    const wrapper = mount(CreateEmployee);
    const createEmpMock = jest.fn();

    wrapper.vm.createEmp = createEmpMock;
    await wrapper.find("form").trigger("submit.prevent");

    expect(createEmpMock).toHaveBeenCalled();
  });
});

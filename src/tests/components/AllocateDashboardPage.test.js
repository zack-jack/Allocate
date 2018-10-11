import React from "react";
import { shallow } from "enzyme";

import AllocateDashboardPage from "../../components/AllocateDashboardPage";

test("should render AllocateDashboardPage correctly", () => {
  const wrapper = shallow(<AllocateDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});

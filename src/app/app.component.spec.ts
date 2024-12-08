import { AppComponent } from "./app.component";

describe("AppComponent", () => {

  it("should define the title", () => {
    const component = new AppComponent();
    expect(component.title).toBeDefined();
  });

});
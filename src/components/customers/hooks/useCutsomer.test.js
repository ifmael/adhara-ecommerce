import { act } from "react-test-renderer";
import { renderHook } from "@testing-library/react-hooks";
import useCustomers from "./useCustomers";
import { getListOfElements } from "utils/request";

jest.mock("utils/request", () => ({
  ...jest.requireActual("utils/request"),
  getListOfElements: jest.fn().mockReturnValue(
    Promise.resolve([
      {
        id: "d607fc5b-c609-4dd5-ad23-29976f422ada",
        name: "ismael",
        lastName: "rodriguezf",
        email: "isma@harakirimail.com",
        phone: "sdfsdfsdfsdfs",
        address: "santa catalinea",
      },
    ])
  ),
}));

describe("useCustomers test", () => {
  test("useCustomers fuctions", async () => {
    const initialUser = {
      id: "d607fc5b-c609-4dd5-ad23-29976f422ada",
      name: "ismael",
      lastName: "rodriguezf",
      email: "isma@harakirimail.com",
      phone: "sdfsdfsdfsdfs",
      address: "santa catalinea",
    };
    getListOfElements.mockReturnValue(Promise.resolve([initialUser]));

    const newCustomer = {
      id: "d607fc5b-c609-4dd5-3333-29976f422ada",
      name: "Hugo",
      lastName: "Lopez",
      email: "hugo@harakirimail.com",
      phone: "001",
      address: "test address",
    };
    const { result, waitForNextUpdate } = renderHook(() => useCustomers());

    expect(result.current.isLoadingCustomers).toBe(true);

    await waitForNextUpdate();

    expect(result.current.isLoadingCustomers).toBe(false);
    const customers = result.current.customers;
    expect(customers.length).toBe(1);
    expect(customers[0].id).toBe("d607fc5b-c609-4dd5-ad23-29976f422ada");
    expect(customers[0].name).toBe("ismael");
    expect(customers[0].lastName).toBe("rodriguezf");
    expect(customers[0].email).toBe("isma@harakirimail.com");
    expect(customers[0].phone).toBe("sdfsdfsdfsdfs");
    expect(customers[0].address).toBe("santa catalinea");

    act(() => {
      result.current.addCustomerContext(newCustomer);
    });

    expect(result.current.customers.length).toBe(2);
    const hugoCustomer = result.current.customers[1];
    expect(hugoCustomer.id).toBe("d607fc5b-c609-4dd5-3333-29976f422ada");
    expect(hugoCustomer.name).toBe("Hugo");
    expect(hugoCustomer.lastName).toBe("Lopez");
    expect(hugoCustomer.email).toBe("hugo@harakirimail.com");
    expect(hugoCustomer.phone).toBe("001");
    expect(hugoCustomer.address).toBe("test address");

    act(() => {
      result.current.deleteCustomerContext(
        "d607fc5b-c609-4dd5-3333-29976f422ada"
      );
    });

    expect(result.current.customers.length).toBe(1);
    const ismaelCustomer = result.current.customers[0];
    expect(ismaelCustomer.id).toBe("d607fc5b-c609-4dd5-ad23-29976f422ada");
    expect(ismaelCustomer.name).toBe("ismael");
    expect(ismaelCustomer.lastName).toBe("rodriguezf");
    expect(ismaelCustomer.email).toBe("isma@harakirimail.com");
    expect(ismaelCustomer.phone).toBe("sdfsdfsdfsdfs");
    expect(ismaelCustomer.address).toBe("santa catalinea");

    act(() => {
      result.current.updateCustomerContext({ ...initialUser, name: "isma" });
    });

    expect(result.current.customers[0].name).toBe("isma");
  });
});

import { performAction, postGeo, postWeather, postPix } from '../src/client/js/formHandler';

describe("Test that the functions are defined", () => {
  test("performAction should be defined", async () => {
    expect(performAction).toBeDefined();
  });
  test("postGeo should be defined", async () => {
    expect(postGeo).toBeDefined();
  });
  test("postWeather should be defined", async () => {
    expect(postWeather).toBeDefined();
  });
  test("postPix should be defined", async () => {
    expect(postPix).toBeDefined();
  });
});
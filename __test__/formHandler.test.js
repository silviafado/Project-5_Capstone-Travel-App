import { performAction, postGeo, postWeather, postPix } from '../src/client/js/formHandler';

describe("Test that the functions are defined", () => {
  test("performAction should be defined", async (done) => {
    expect(performAction).toBeDefined();
    done();
  });
  test("postGeo should be defined", async (done) => {
    expect(postGeo).toBeDefined();
    done();
  });
  test("postWeather should be defined", async (done) => {
    expect(postWeather).toBeDefined();
    done();
  });
  test("postPix should be defined", async (done) => {
    expect(postPix).toBeDefined();
    done();
  });
});
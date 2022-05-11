const { getLoginNameFromGitHub } = require("../src/services/api");
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
var axiosMock = new MockAdapter(axios);

it("returns the title of the first album", async () => {
  var dataMock = {
      id: 72523657,
      login: 'Mikkaiser',
      node_id: 'MDQ6VXNlcjcyNTIzNjU3'
  };
  axiosMock.onGet().reply(200, dataMock);

  const login = await getLoginNameFromGitHub();
  expect(login).toEqual("Mikkaiser");
});
const axios = require("axios");

async function getLoginNameFromGitHub() {
  const response = await axios.get(
    "https://api.github.com/mikkaiser"
  );

  return response.data.login;
}


exports.getLoginNameFromGitHub = getLoginNameFromGitHub;
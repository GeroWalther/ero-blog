const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Schnecke45",
        mongodb_password: "Schnecke45",
        mongodb_clustername: "cluster0",
        mongodb_databasename: "ero-blog-dev",
      },
    };
  }
  return {
    env: {
      mongodb_username: "Schnecke45",
      mongodb_password: "Schnecke45",
      mongodb_clustername: "cluster0",
      mongodb_databasename: "ero-blog",
    },
  };
};

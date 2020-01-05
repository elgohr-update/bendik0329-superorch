const authResolver = require("./auth");
const orchestraResolver = require("./orchestras");
const inviteResolver = require("./invites");

const rootResolver = {
  Query: {
    login: authResolver.login,
    orchestras: orchestraResolver.orchestras,
    users: authResolver.users,
    invites: inviteResolver.invites
  },
  Mutation: {
    createUser: authResolver.createUser,
    updateUser: authResolver.updateUser,
    createOrchestra: orchestraResolver.createOrchestra,
    sendInvite: inviteResolver.sendInvite,
    acceptInvite: inviteResolver.acceptInvite
  },
  Subscription: {
    userJoined: authResolver.userJoined
  }
};

module.exports = rootResolver;



  
const welcomeMessage = "Welcome to IBM Cloud DevOps using containers. Let\'s go use the Continuous Delivery Service. Test Change!!!";
const portMessage = "Application Running on port. Change port message.";

const getWelcomeMessage = () => {
    return welcomeMessage;
};

const getPortMessage = () => {
    return portMessage;
};

exports.getWelcomeMessage = getWelcomeMessage;
exports.getPortMessage = getPortMessage;

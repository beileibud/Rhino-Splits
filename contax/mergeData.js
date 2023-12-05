import { getUserSend } from "./sendData";
import { getSingleUser } from "./userData";

// In your mergeData.js or wherever viewUserSend is located
const viewUserSend = (userId) => new Promise((resolve, reject) => {
    getUserSend(userId)
      .then((sendObject) => {
        if (!sendObject || !sendObject.userId) {
          resolve({}); // or reject with an appropriate error message
        } else {
          getSingleUser(sendObject.userId)
            .then((userObj) => {
              resolve({ user: userObj, send: sendObject });
            })
            .catch(reject); // Error in getting user data
        }
      })
      .catch(reject); // Error in getting send data
  });
  

export default viewUserSend;
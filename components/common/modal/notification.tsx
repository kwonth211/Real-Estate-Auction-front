import React from "react";
import { Alert, notification } from "antd";

// const notification = () => {
//     debugger
//   return (
//     <Alert
//       message="Error"
//       description="This is an error message about copywriting."
//       type="error"
//       showIcon
//     />
//   );
// };

const openNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export default openNotification;

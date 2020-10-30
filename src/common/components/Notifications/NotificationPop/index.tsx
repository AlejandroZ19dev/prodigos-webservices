import {notification} from 'antd';

const OpenNotificationWithIcon = (type:any, title:string, message:any) => {
    notification.open({
        message: title,
        description: message,
    });
};

export default OpenNotificationWithIcon;

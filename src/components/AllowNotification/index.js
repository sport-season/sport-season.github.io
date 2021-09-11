const AllowNotification = () => {
if (Notification.permission === "granted") {
    return null;
} else if (Notification.permission === "blocked") {
    return <a href={"#"} onClick={() => {
        Notification.requestPermission(function(status) {
            console.log('Notification permission status:', status);
        });
    }}>Разрешить показ уведомлений</a>
} else {
  /* show a prompt to the user */
    return <a href={"#"} onClick={() => {
        Notification.requestPermission(function(status) {
            console.log('Notification permission status:', status);
        });
    }}>Разрешить показ уведомлений</a>
}

return null;
}

export default AllowNotification;

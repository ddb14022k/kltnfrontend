const SOCKET_CHAT_HOST="https://chat-app-socket-cn11.herokuapp.com"

const SOCKET_NAMESPACE={
    USER:"/USER",
    CONVERSATION:"/CONVERSATION",
    NOTIFICATION:"/NOTIFICATION"
}

const SOCKET_ON_ACTIONS = {
    AUTHEN_SUCCESS: "AUTHEN_SUCCESS",
    AUTHEN_FAIL: "AUTHEN_FAIL",
    USER_QUIT_APPLICATION: "USER_QUIT_APPLICATION",
    USER_JOIN_APPLICATION: "USER_JOIN_APPLICATION",
    LIST_FRIEND: "LIST_FRIEND",
    EMIT_MESSAGE: "EMIT_MESSAGE",
    EMIT_NOTIFICATION: "EMIT_NOTIFICATION",
    SOCKET_READY: "SOCKET_READY",
    EMIT_IS_TYPING: "EMIT_IS_TYPING",
    EMIT_STOP_TYPING: "EMIT_STOP_TYPING",
    JOIN_NEW_ROOM:"JOIN_NEW_ROOM"
  };
  
  const SOCKET_EMIT_ACTIONS = {
    ON_DISCONNECT: "ON_DISCONNECT",
    ON_MESSAGE: "ON_MESSAGE",
    ON_STOP_TYPING: "ON_STOP_TYPING",
    ON_TYPING: "ON_TYPING",
    ON_AUTHENTICATE:"ON_AUTHENTICATE"
  };



export {
    SOCKET_CHAT_HOST,
    SOCKET_NAMESPACE,
    SOCKET_ON_ACTIONS,
    SOCKET_EMIT_ACTIONS
}
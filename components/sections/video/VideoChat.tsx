import { useState, useCallback } from "react";
import Lobby from "./Lobby";
import Room from "./Room";

const VideoChat = (props: any) => {
  const [username, setUsername] = useState(props.username);
  const [roomName, setRoomName] = useState("");
  const [token, setToken] = useState(props.token);

  const handleUsernameChange = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  const handleRoomNameChange = useCallback((event) => {
    setRoomName(event.target.value);
  }, []);

  const handleLogout = useCallback(() => {
    setToken(null);
  }, []);

  let render;

  if (token) {
    render = (
      <div>
        <Room roomName={roomName} token={token} handleLogout={handleLogout} />
      </div>
    );
  } else {
    render = (
      <Lobby
        username={username}
        roomName={roomName}
        handleUsernameChange={handleUsernameChange}
        handleRoomNameChange={handleRoomNameChange}
      />
    );
  }
  return render;
};

export default VideoChat;

import { useState, useEffect } from "react";
import {
  connect,
  Room as TwilioRoom,
  Participant as TwilioParticipant,
} from "twilio-video";
import Participant from "./Participants";
import styles from "./styles.module.scss";

type RoomProps = {
  roomName: string;
  token: string;
};

const Room = ({ roomName, token }: RoomProps) => {
  const [room, setRoom] = useState<TwilioRoom>(null);
  const [participants, setParticipants] = useState<TwilioParticipant[]>([]);

  useEffect(() => {
    const participantConnected = (participant: TwilioParticipant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant: TwilioParticipant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };
    connect(token, {
      name: "room",
    }).then((room: TwilioRoom) => {
      setRoom(room);
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
      console.log(room.participants);
    });

    return () => {
      setRoom((currentRoom: TwilioRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map((participant: any) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className="room">
      <h2>Room: {roomName}</h2>
      <div className="remote-participants">{remoteParticipants}</div>
      <div className={`local-participant ${styles.localParticipant}`}>
        {room ? (
          <Participant
            key={room.localParticipant.sid}
            participant={room.localParticipant}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Room;

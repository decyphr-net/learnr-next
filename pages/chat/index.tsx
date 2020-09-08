import { useEffect, useState } from "react";
import { connect, createLocalVideoTrack } from "twilio-video";
import Layout from "../../components/Layout";
import getSessionOrRedirect from "../../utils/auth/session";
import VideoChat from "../../components/sections/video/VideoChat";
const AccessToken = require("twilio").jwt.AccessToken;

const ChatRoom = (props: any) => {
  return (
    <Layout
      crumbs={[{ text: "Chatroom", location: "/", isCurrent: true }]}
      headingText="Chatroom"
      title="Chatroom"
    >
      <main>
        <VideoChat
          username={props.session.user.name}
          token={props.videoToken}
        />
      </main>
    </Layout>
  );
};

export const getServerSideProps = async ({ req, res }: any) => {
  const session: any = await getSessionOrRedirect(req, res);
  const videoGrant = AccessToken.VideoGrant;
  const videoToken = new AccessToken(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_API_KEY_SID,
    process.env.TWILIO_API_KEY_SECRET
  );

  videoToken.identity = session.user.name;
  const grant = new videoGrant();
  videoToken.addGrant(grant);

  const jwtToken = videoToken.toJwt();

  return { props: { session, videoToken: jwtToken } };
};

export default ChatRoom;

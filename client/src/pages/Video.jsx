import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
// import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
// import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
// import AddTaskOutlinedIcon from "@mui/icons-material/AddTaskOutlined";
// import ThumbDownIcon from "@mui/icons-material/ThumbDown";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import Comments from "../components/Comments";
// import Card from "../components/Card";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { dislike, fetchSuccess, like } from "../redux/videoSlice";
import { format } from "timeago.js";
// import { subscription } from "../redux/userSlice";
import Recommendation from "../components/Recommendation";
import { useNavigate } from "react-router-dom";


const baseURL = "http://localhost:4000/";
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;
const VideoWrapper = styled.div``;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.span`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
`;

const ChannelCounter = styled.span`
  margin-top: 5px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.textSoft};
  font-size: 12px;
`;

const Description = styled.p`
  font-size: 14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: max-content;
  padding: 10px 20px;
  cursor: pointer;
`;

const VideoFrame = styled.video`
  max-height: 720px;
  width: 100%;
  object-fit: cover;
`;

const Video = ({video}) => {

  const navigate=useNavigate();
  // const { currentUser } = useSelector((state) => state.user);
  console.log(video)

  const dispatch = useDispatch();
  console.log(useLocation().pathname.split("/")[3]);
  const path = useLocation().pathname.split("/")[3];

  // const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoRes = await axios.get(`${baseURL}api/videos/find/${path}`);

        dispatch(fetchSuccess(videoRes.data));
      } catch (err) {}
    };
    fetchData();
  }, [path, dispatch]);

  // const handleLike = async () => {
  //   await axios.put(`/users/like/${video._id}`);
  //   dispatch(like(currentUser._id));
  // };
  // const handleDislike = async () => {
  //   await axios.put(`/users/dislike/${video._id}`);
  //   dispatch(dislike(currentUser._id));
  // };

  // const handleSub = async () => {
  //   currentUser.subscribedUsers.includes(channel._id)
  //     ? await axios.put(`/users/unsub/${channel._id}`)
  //     : await axios.put(`/users/sub/${channel._id}`);
  //   dispatch(subscription(channel._id));
  // };

  //TODO: DELETE VIDEO FUNCTIONALITY

  return (
    <div>
    <button type="button" onClick={()=>navigate("/dashboard/videos")} class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span class="sr-only">Close menu</span>
              
              <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
    <Container>
      <Content>
        <VideoWrapper>
          <VideoFrame src={video.videoUrl} controls />
        </VideoWrapper>
        <Title>{video.title}</Title>
        
        <Details>
          <Info>
            {video.views} views • {format(video.createdAt)}
          </Info>
        </Details>
        <Hr />
        {/* <Channel>
          <ChannelInfo>
            <Image src={channel.img} />
            <ChannelDetail>
              <ChannelName>{channel.name}</ChannelName>
              <ChannelCounter>{channel.subscribers} subscribers</ChannelCounter>
              <Description>{video.desc}</Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe onClick={handleSub}>
            {currentUser.subscribedUsers?.includes(channel._id)
              ? "SUBSCRIBED"
              : "SUBSCRIBE"}
          </Subscribe>
        </Channel> */}
        <Hr />
        {/* <Comments videoId={video._id} /> */}
      </Content>
      <Recommendation tags={video.tags} />
    </Container>
    </div>
    // <div >
    //   video hellodfsfdafds
    // </div>
  );
};

export default Video;
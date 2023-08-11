import {Profiled,Avatar,Info,StatsList,StatsItem} from "./Profile.styled.js"

export const Profile =({username,tag,location,avatar,stats:{followers,views,likes}})=>(
    <Profiled>
  <div>
    <Avatar
      src={avatar}
      alt="User avatar"
         />
    <Info>{username}</Info>
    <Info>@{tag}</Info>
    <Info>{location}</Info>
  </div>

  <StatsList>
    <StatsItem>
      <span>Followers</span>
      <span>{followers}</span>
    </StatsItem>
    <StatsItem>
      <span>Views</span>
      <span>{views}</span>
    </StatsItem>
    <StatsItem>
      <span>Likes</span>
      <span>{likes}</span>
    </StatsItem>
  </StatsList>
</Profiled>)
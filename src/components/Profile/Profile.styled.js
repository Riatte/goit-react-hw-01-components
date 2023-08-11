import styled from 'styled-components';

export const Profiled = styled.div`
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 400px;
    margin: auto;
    text-align: center;
`;

export const Avatar = styled.img`
width: 50%;
    border-radius: 50%;
    margin-top: 20px;
    border: 1px solid #080808;
`;
export const Info = styled.p`
       color: grey;
    font-size: 18px;
    margin-top: 20px;

    &:nth-child(2){
    color: black;
    font-size: 24px;
    margin-top: 20px;   
    }
`;
export const StatsList = styled.ul`
display: flex;
    justify-content: center;
    padding: 0;
`;
export const StatsItem = styled.li`
display: flex;
    flex-direction: column;
    margin-top: 20px;
    border: none;
    outline: 0;
    padding: 8px;
    color: white;
    background-color: #757373;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
`;

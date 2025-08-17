import React from "react";
import { achievements } from "../../data/constants";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: 1350px;
  width: 100%;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const AchievementCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const AchievementCard = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid ${({ theme }) => theme.orange};
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 24px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 25px 0px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }
`;

const AchievementImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 12px;
`;

const AchievementTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const AchievementDate = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 8px;
`;

const AchievementDescription = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

const AchievementCategory = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: ${({ theme }) => theme.orange};
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
`;

const Achievements = () => {
  return (
    <Container id="achievements">
      <Wrapper>
        <Title>Achievements</Title>
        <Desc>
          Here are some of my notable achievements and recognitions in various competitions and hackathons.
        </Desc>
        <AchievementCards>
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id}>
              <AchievementCategory>{achievement.category}</AchievementCategory>
              <AchievementImage src={achievement.image} alt={achievement.title} />
              <AchievementTitle>{achievement.title}</AchievementTitle>
              <AchievementDate>{achievement.date}</AchievementDate>
              <AchievementDescription>{achievement.description}</AchievementDescription>
            </AchievementCard>
          ))}
        </AchievementCards>
      </Wrapper>
    </Container>
  );
};

export default Achievements;

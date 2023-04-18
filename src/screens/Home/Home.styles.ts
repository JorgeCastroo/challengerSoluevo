import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 22px;
`;

export const Input = styled.TextInput`
  width: 100%;
  font-size: 16px;
  margin-bottom: 20px;
  height: 60px;
  width: 100%;
  background-color: #fff;
  border: 1.5px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  align-items: center;
  flex-direction: row;
  padding-left: 30px;
`;

export const WrappedCountSubstring = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentCount = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  border-bottom-width: 1px;
  padding: 5px;
`;

export const Item = styled.Text``;

import React, { useState } from "react";
import * as S from "./Home.styles";

const Home: React.FC = () => {
  const [onchange, setOnchange] = useState("");

  function countSubstrings(str: string): { value: string; count: number }[] {
    const values = str.split(" ");
    const count = new Map<string, number>();
    for (const value of values) {
      const currentCount = count.get(value);
      if (currentCount) {
        count.set(value, currentCount + 1);
      } else {
        count.set(value, 1);
      }
    }
    return Array.from(count, ([value, count]) => ({ value, count }));
  }

  var counts = countSubstrings(`${onchange}`);

  return (
    <S.Container>
      <S.Title>Contador de Substrings</S.Title>
      <S.Input
        placeholder="digite aqui..."
        onChangeText={(value) => setOnchange(value)}
      />
      <S.WrappedCountSubstring>
        {counts.length > 2 &&
          counts.map((item) => (
            <S.ContentCount>
              <S.Item>{item.value}</S.Item>
              <S.Item>{item.count}</S.Item>
            </S.ContentCount>
          ))}
      </S.WrappedCountSubstring>
    </S.Container>
  );
};

export default Home;

import { Box, Title } from "@mantine/core";
import { WordCloud } from "./coomponents/WordCloud";

function App() {
  return (
    <Box p={50}>
      <Title ta='center' my={40}>
        My Topics challenge
      </Title>
      <WordCloud />
    </Box>
  );
}

export default App;

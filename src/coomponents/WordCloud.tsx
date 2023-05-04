import { useState } from "react";
import { Box, Card, CloseButton, Text, Group, createStyles } from "@mantine/core";
import useUpdateData from "../hooks/useUpdateData";
import TopicData from "../interfaces/TopicData";
const useStyles = createStyles(() => ({
    container: {
        display: "flex",
        justifyContent: "center",
    },
    topic: {
        float: "left",
        position: "static",
        cursor: "pointer",
    },
    wordCloud: {
        width: 700,
    },
    card: {
        width: 400,
        height: 300,
        marginLeft: 100,
    },
    cardSection: {
        padding: 20,
    },
}));
export const WordCloud = () => {
    const { classes } = useStyles();
    const [topicId, setTopicId] = useState<number | null>(null);
    const { updatedData, error } = useUpdateData();

    return (
        <>
            {error ? (
                <Text ta='center' c='red'>
                    {error}
                </Text>
            ) : (
                <Box className={classes.container}>
                    <Box className={classes.wordCloud}>
                        {updatedData.map((data: TopicData, index: number) => (
                            <Box
                                key={`${data.id}-${index}`}
                                className={classes.topic}
                                sx={{
                                    fontSize: data.fontSize,
                                    marginTop: data.top,
                                    marginLeft: data.left,
                                    color: data.color,
                                }}
                                onClick={() => setTopicId(index)}
                            >
                                {data.label}
                            </Box>
                        ))}
                    </Box>
                    {topicId !== null && (
                        <Card className={classes.card} fz='sm' withBorder shadow='md'>
                            <Card.Section withBorder inheritPadding py='xs'>
                                <Group position='apart' mt='md' mb='xs'>
                                    <Text ta='center'>Information on topic: {updatedData[topicId]?.label} </Text>
                                    <CloseButton aria-label='Close modal' onClick={() => setTopicId(null)} />
                                </Group>
                            </Card.Section>
                            <Card.Section className={classes.cardSection}>
                                <Text my={30}>Total Mentions: {updatedData[topicId]?.volume}</Text>
                                <Group>
                                    Positive Mentions:{" "}
                                    {updatedData[topicId]?.sentiment?.positive ? <Text c='green'> {updatedData[topicId].sentiment.positive}</Text> : "N/A"}
                                </Group>
                                <Group>
                                    Neutral Mentions: {updatedData[topicId]?.sentiment?.neutral ? <Text>{updatedData[topicId].sentiment.neutral}</Text> : "N/A"}
                                </Group>
                                <Group>
                                    Negative Mentions:{" "}
                                    {updatedData[topicId]?.sentiment?.negative ? <Text c='red'> {updatedData[topicId].sentiment.negative} </Text> : "N/A"}
                                </Group>
                            </Card.Section>
                        </Card>
                    )}
                </Box>
            )}
        </>
    );
};

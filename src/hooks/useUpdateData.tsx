import { useMemo } from "react";
import useGitHubGistFile from "./useGitHubGistFile";
const useUpdateData = () => {

    const { data, error } = useGitHubGistFile("5d6de0be7caa73dcdd602f61cede1421", "topics.json");

    const updatedData = useMemo(
        () =>
            data.map((topic, index) => {

                const fontSizes = [12, 14, 18, 22, 24, 40];
                const minScore = Math.min(...data.map((value) => value.sentimentScore));
                const maxScore = Math.max(...data.map((value) => value.sentimentScore));
                const gradingValue = (maxScore - minScore) / (fontSizes.length - 1);
                const points = Math.round((topic.sentimentScore - minScore) / gradingValue);

                return {
                    ...topic,
                    fontSize: fontSizes[points],
                    color: topic.sentimentScore > 60 ? "green" : topic.sentimentScore < 40 ? "red" : "gray",
                    top: Math.ceil(Math.random() * (index + 1 * 30)),
                    left: Math.ceil(Math.random() * (index + 1 * 50)),
                };
            }),
        [data]
    );

    return { updatedData, error };
};

export default useUpdateData;

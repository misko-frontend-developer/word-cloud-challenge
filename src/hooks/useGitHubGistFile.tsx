import { useState, useEffect } from "react";
import TopicData from "../interfaces/TopicData";
const useGitHubGistFile = (gistId: string, filename: string) => {
    const [data, setData] = useState<TopicData[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchFile = async () => {
            try {
                const response = await fetch(`https://api.github.com/gists/${gistId}`);
                const gist = await response.json();
                const file = gist.files[filename];

                if (file) {
                    const contentResponse = await fetch(file.raw_url);
                    const content = await contentResponse.json();
                    setData(content[filename.split(".")[0]]);
                } else {
                    setError(`File '${filename}' not found in Gist`);
                }
            } catch (error: any) {
                setError(error?.message);
            }
        };

        fetchFile();
    }, [gistId, filename]);

    return { data, error };
};

export default useGitHubGistFile;


import useGitHubGistFile from "./hooks/useGitHubGistFile";

function App() {


  const { data, error }: any = useGitHubGistFile('5d6de0be7caa73dcdd602f61cede1421', 'topics.json')
  // console.log(data)
  return (
    <div >

      {data.map((d: any) =>
        <div>{d.label}</div>)}
    </div>
  );
}

export default App;

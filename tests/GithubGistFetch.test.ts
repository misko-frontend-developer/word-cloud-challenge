import { renderHook } from '@testing-library/react-hooks';
import useGitHubGistFile from '../src/hooks/useGitHubGistFile';

describe('GithubGistFetch', () => {
  it('returns data', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
    useGitHubGistFile('5d6de0be7caa73dcdd602f61cede1421', 'topics.json')
    );
    await waitForNextUpdate();
    expect(result.current.data.length).toBeGreaterThan(0);
  });
});
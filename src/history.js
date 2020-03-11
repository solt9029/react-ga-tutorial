import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-128421111-1');

export const history = createBrowserHistory();

history.listen(({ pathname }) => {
  ReactGA.set({ page: pathname });
  ReactGA.pageview(pathname);
  console.log({ pathname });
});

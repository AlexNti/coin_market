import React from 'react';
import { __RouterContext as RouterContext, RouteComponentProps, StaticContext } from 'react-router';

function useRouter<
  Params = Record<string, string | number>,
  StateShape = Record<string, unknown>
>(): RouteComponentProps<Params, StaticContext, StateShape> {
  return React.useContext(RouterContext) as RouteComponentProps<Params, StaticContext, StateShape>;
}

export default useRouter;

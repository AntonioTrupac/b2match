import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Countries } from '../../pages/Countries';

export const Routes: FC = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/countries' />
      <Route exact path='/countries' component={Countries} />
    </Switch>
  );
};

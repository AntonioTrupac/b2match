import { FC } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Countries } from '../../pages/Countries';
import { CountryDetails } from '../../pages/CountryDetails';

export const Routes: FC = () => {
  return (
    <Switch>
      <Redirect exact from='/' to='/countries' />
      <Route exact path='/countries' component={Countries} />
      <Route path='/countries/:alpha2Code' component={CountryDetails} />
    </Switch>
  );
};

import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { ApplicationLayout } from '/imports/ui/layouts/application/ApplicationLayout.jsx';
import WelcomePage from '/imports/ui/pages/welcome/WelcomePage.jsx';

FlowRouter.route('/',{
  action(){
    mount(ApplicationLayout,{
      content:(<WelcomePage/>),
    });
  }
});

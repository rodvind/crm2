import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonMenu,
  IonContent,
  IonList,
  IonMenuToggle,
  IonItem,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, list, square, triangle, homeOutline, calendarOutline, cashOutline, personOutline, optionsOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Calls from './pages/Calls';
import Expenses from './pages/Expenses';
import Options from './pages/Options'
import Lookup from './pages/Lookup'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import React from 'react';

const App: React.FC = () => (
  <IonApp>
    <IonMenu contentId="main">
      <IonHeader>
        <IonToolbar>
          <IonTitle>CRM</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonList>
        <IonMenuToggle>
          <IonItem button routerLink="/">
            <IonIcon slot="start" icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonItem>
          <IonItem button routerLink="/calls">
            <IonIcon slot="start" icon={calendarOutline} />
            <IonLabel>Calls</IonLabel>
          </IonItem>
          <IonItem button routerLink="/expenses">
            <IonIcon slot="start" icon={cashOutline} />
            <IonLabel>Expenses</IonLabel>
          </IonItem>
          <IonItem button routerLink="/lookup">
            <IonIcon slot="start" icon={personOutline} />
            <IonLabel>Lookup</IonLabel>
          </IonItem>
          <IonItem button routerLink="/options">
            <IonIcon slot="start" icon={optionsOutline} />
            <IonLabel>Options</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
    </IonMenu>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/calls">
            <Calls />
          </Route>
          <Route path="/expenses">
            <Expenses />
          </Route>
          <Route path="/lookup">
            <Lookup />
          </Route>
          <Route path="/options">
            <Options />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calls" href="/calls">
            <IonIcon icon={calendarOutline} />
            <IonLabel>Calls</IonLabel>
          </IonTabButton>
          <IonTabButton tab="expenses" href="/expenses">
            <IonIcon icon={cashOutline} />
            <IonLabel>Expenses</IonLabel>
          </IonTabButton>
          <IonTabButton tab="lookup" href="/lookup">
            <IonIcon icon={personOutline} />
            <IonLabel>Lookup</IonLabel>
          </IonTabButton>
          <IonTabButton tab="options" href="/options">
            <IonIcon icon={optionsOutline} />
            <IonLabel>Options</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

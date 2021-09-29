import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonItem, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonIcon, IonLabel, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MailDetails from './pages/MailDetails';

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
import MailTabs from './pages/MailTabs';
import { list, warning, settings } from 'ionicons/icons';
import { IonTitle } from '@ionic/react';

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu contentId = 'main'>
          <IonHeader>
            <IonToolbar color = 'warning'>
              <IonTitle>
                Menu Buttons
              </IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList>
              <IonMenuToggle>
                <IonItem button routerLink = '/tabs/mail'>
                  <IonIcon slot = 'start' icon = { list } />
                  <IonLabel> All mail </IonLabel>
                </IonItem>
                <IonItem button routerLink = '/tabs/spam'>
                  <IonIcon slot = 'start' icon = { warning } />
                  <IonLabel> Spam </IonLabel>
                </IonItem>
                <IonItem button routerLink = '/tabs/settings'>
                  <IonIcon slot = 'start' icon = { settings } />
                  <IonLabel> Settings </IonLabel>
                </IonItem>
              </IonMenuToggle>
            </IonList>
          </IonContent>
        </IonMenu>
        {/* <IonTabs> */}
        <IonRouterOutlet id = 'main'>
          <Route path="/tabs" component = { MailTabs } />
          <Route path="/mail/:mailId" component = { MailDetails }/>
          <Redirect exact from = "/" to="/tabs" />
        </IonRouterOutlet>
        {/* 
        <IonTabBar slot = "bottom" >
          <IonTabButton tab = 'mail' href = '/mail' >
            <IonIcon icon = { mailOutline } />
            <IonLabel> Mail </IonLabel>
          </IonTabButton>
          <IonTabButton tab = 'meet' href = '/meet' >
            <IonIcon icon = { videocamOutline } />
            <IonLabel> Meet </IonLabel>
          </IonTabButton>
        </IonTabBar> */}
        {/* </IonTabs> */}
      </IonReactRouter>
    </IonApp>
  );  
}
export default App;

import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useEffect } from 'react';
import axios from 'axios'
import ExploreContainer from '../components/ExploreContainer';
import './Calls.css';
require('dotenv').config()

const Calls: React.FC = () => {
  useEffect(() => {
    const callHome = async () => {
      await axios.get('http://r7development1.eecol.lan/run/crm/Start', {
        // data: {},
        headers: {
          'Content-Type': 'application/json'
        },
        params: {
          mobile: '1',
          version: '1.0',
          session: process.env.API_KEY,
          job: 'Calls',
          subJob: 'ViewDay'
        }
      })
    }
    callHome()
  }, [])
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Calls</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Calls</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Calls page" />
      </IonContent>
    </IonPage>
  );
};

export default Calls;

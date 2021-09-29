import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Settings: React.FC = () => {
    return (
    <IonPage>
        <IonHeader>
            <IonToolbar color = 'warning'>
                <IonButtons slot = 'start' >
                    <IonMenuButton  />
                </IonButtons>
                <IonTitle>
                    Settings
                </IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent class = 'ion-padding'>
            <IonTitle>
                Settings
            </IonTitle>
        </IonContent>
    </IonPage>
    );
}

export default Settings;
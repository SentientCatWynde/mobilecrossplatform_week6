import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";

const Spam: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'warning'>
                    <IonButtons slot = 'start' >
                        <IonMenuButton  />
                    </IonButtons>
                    <IonTitle>
                        Spam
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class = 'ion-padding'>
                <IonTitle>
                    Spam
                </IonTitle>
            </IonContent>
        </IonPage>
    );
}

export default Spam;
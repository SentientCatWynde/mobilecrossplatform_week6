import { IonTitle, IonButtons, IonHeader, IonPage, IonToolbar, IonContent, IonBackButton } from "@ionic/react";
import { useParams } from "react-router";
import { MAIL_DATA } from './Mail';

const MailDetails: React.FC = () => {
    const mId = useParams< { mailId: string } >().mailId;
    const selectedMail = MAIL_DATA.find(m => m.id === mId);
    return ( 
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot = 'start' > 
            <IonBackButton />
            <IonTitle>
              { selectedMail ? selectedMail?.subject : 'No mail found'}
            </IonTitle> 
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className = 'ion-padding'>
          <h2> Mail ID: { mId } </h2>
        </IonContent>
      </IonPage>
    );  
}

export default MailDetails;
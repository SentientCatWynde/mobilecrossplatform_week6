import { IonContent, IonHeader, IonButtons, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonIcon, IonItemSliding, IonItemOptions, IonItemOption } from "@ionic/react";
import { banSharp, createSharp, trash, person } from "ionicons/icons";
import { useRef } from "react";

export const FRIENDS_DATA = [
    {id: 'f1', name: 'John Thor'},
    {id: 'f2', name: 'John Ness'},
    {id: 'f3', name: 'John Doe'}
];

const Meet: React.FC = () => {
    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);

    const callFriendHandler = () => {
        console.log('Calling... ');
    }
    
    const blockFriendHandler = () => {
        
        slidingOptionRef.current?.closeOpened();
        console.log('Blocking...');
        
    }

    const removeFriendHandler = () => {
        console.log('Removing...');
        
    }

    const editFriendHandler = () => {
        console.log('Editing...');
        
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color = 'warning'>
                    <IonButtons slot = 'start' >
                        <IonMenuButton  />
                    </IonButtons>
                    <IonTitle>
                        Ionic Meet
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    {FRIENDS_DATA.map(friend => (
                        
                        <IonItemSliding ref = { slidingOptionRef } key = { friend.id }>
                            <IonItemOptions side = 'start'>
                                <IonItemOption color = 'danger' onClick = { blockFriendHandler } >
                                    <IonIcon icon = { banSharp } slot = 'icon-only' />
                                </IonItemOption>
                                <IonItemOption color = 'warning' onClick = { removeFriendHandler } >
                                    <IonIcon icon = { trash } slot = 'icon-only' />
                                </IonItemOption>
                                <IonItemOption slot = 'end' color = 'warning' onClick = { editFriendHandler }>
                                    <IonIcon icon = { createSharp } />
                                </IonItemOption>
                            </IonItemOptions>
                            <IonItem
                                key = { friend.id } 
                                lines = 'full' 
                                button onClick = { callFriendHandler }>
                                <IonIcon slot = 'start' icon = { person } />
                                <IonLabel > { friend.name } </IonLabel>
                            </IonItem>
                        </IonItemSliding>
                        
                    ) ) }
                </IonList>
            </IonContent>
        </IonPage>
    );
}

export default Meet;
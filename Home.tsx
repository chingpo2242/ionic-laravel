import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonList, IonItem, IonInput, useIonToast } from '@ionic/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";

const Home: React.FC = () => {
  const [present] = useIonToast();
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const history = useHistory();

  async function register() {
    const res = await axios.post("http://127.0.0.1:8000/api/add-student", {
      name,
      course,
      email,
      phone
    });

    if (res.data.status === 200) {
      console.log(res.data.message);
      present({
        message: "Mission Successfully",
        duration: 3000,
        position: "top",
      });

      // Redirect to details page after successful registration
      history.push("/details");
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonTitle>Ionic + Laravel</IonTitle>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonList>
          <IonItem>
            <IonInput
              name="name"
              type="text"
              label="Name"
              labelPlacement='floating'
              placeholder='Enter Name'
              onIonChange={(e: any) => setName(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              name="course"
              type="text"
              label="Course"
              labelPlacement='floating'
              placeholder='Enter Course'
              onIonChange={(e: any) => setCourse(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              name="email"
              type="text"
              label="Email"
              labelPlacement='floating'
              placeholder='Enter Email'
              onIonChange={(e: any) => setEmail(e.target.value)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              name="phone"
              type="text"
              label="Phone"
              labelPlacement='floating'
              placeholder='Enter Phone'
              onIonChange={(e: any) => setPhone(e.target.value)}
            />
          </IonItem>
        </IonList>
        <IonButton onClick={register} expand='full'>
          Register
        </IonButton>
        {/* Button to navigate to the details page */}
        <IonButton onClick={() => history.push("/details")} expand='full'>
          List of Information
        </IonButton>
      </IonContent>
    </IonPage>
  );
}

export default Home;

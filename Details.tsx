  // Details.tsx

  import React, { useState, useEffect } from 'react';
  import axios from 'axios';
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonButtons, IonBackButton, IonIcon, IonCard, IonCardContent } from '@ionic/react';
  import { useHistory } from 'react-router-dom';
  import { arrowBackOutline } from 'ionicons/icons'; // Import Ionicons arrow back icon

  const Details: React.FC = () => {
    const [students, setStudents] = useState([]);
    const history = useHistory(); // Initialize useHistory hook

    useEffect(() => {
      fetchStudents();
    }, []);

    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };


    const navigateToHome = () => {
      history.push('/home');
    };

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar className="details-header"> {/* Add custom class for header */}
            <IonButtons slot="start"> {/* Use slot="start" to position the button on the left */}
              <IonBackButton defaultHref="/home">
                <IonIcon icon={arrowBackOutline} /> {/* Use Ionicons arrow back icon */}
                Back {/* Custom text for the back button */}
              </IonBackButton>
            </IonButtons>
            <IonTitle>Raterta, Bagares, Salvador, Bombeo</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className="details-content green-bg"> {/* Apply linear background here */}
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonList>
            {students.map((student: any) => (
              <IonItem key={student.id}>
                <IonCard className="student-card"> {/* Card-like layout */}
                  <IonCardContent>
                    <IonLabel>{student.name}</IonLabel>
                    <p>Course: {student.course}</p>
                    <p>Email: {student.email}</p>
                    <p>Phone: {student.phone}</p>
                  </IonCardContent>
                </IonCard>
              </IonItem>
            ))}
          </IonList>
        </IonContent>
      </IonPage>
    );
  };

  export default Details;

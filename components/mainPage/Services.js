import React from 'react'
import styles from '../../styles/Services.module.css'
import { db } from '../../firebase'
import {
    getFirestore,
    collection,
    getDocs,getDoc,
    addDoc, doc, deleteDoc, onSnapshot, updateDoc,
    query, where, orderBy
} from 'firebase/firestore'

const Services = () => {
  const [fireData, setFireData] = React.useState([]);
  
  const colRef = collection(db, 'services');
  
  const getData = async () => {
    await getDocs(colRef)
      .then((response) => {
        setFireData(response.docs.map((data) => {
          return { ...data.data(), id: data.id }
        }))
      })
  }

  React.useEffect(() => { 
    getData();
  }, [])

  console.log("fireData = ", fireData);

  return (
    <div className={styles.container}>
      <div className={styles.contents}>



        <div className={styles.divx}>
          <div className={styles.design}>
            <img src="./images/design/rectangle.png" alt="" />
            <img src="./images/design/line.png" alt="" />
          </div>
          <h2>How Can We Help</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, nulla!consectetur adipisicing elit. A, nulla!consectetur adipisicing elit. A, nulla!</p>
        </div>


        {/* {fireData.map((k, indx) => { 
          return <div className={styles.div} key={indx}>
            <img src="./images/services/p_1.png" alt="" />
            
          <div className={styles.text}>
            <div className={styles.title}>
              <div className={styles.line}></div>
                <h3>{k.title}</h3>
            </div>
            <div className={styles.description}>
                <p>{k.details.slice(0, 60)}....</p>
            </div>
            </div>
            
          </div>
        })
          
        } */}

        <div className={styles.div}>
            <img src="./images/services/p_1.png" alt="" />
            
          <div className={styles.text}>
            <div className={styles.title}>
              <div className={styles.line}></div>
                <h3>How Can We Help</h3>
            </div>
            <div className={styles.description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, facilis inventore deleniti rerum fugit velit quos fugiat officia quidem iure?</p>
            </div>
            </div>
            
        </div>
        
        <div className={styles.div}>
            <img src="./images/services/p_1.png" alt="" />
            
          <div className={styles.text}>
            <div className={styles.title}>
              <div className={styles.line}></div>
                <h3>How Can We Help</h3>
            </div>
            <div className={styles.description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, facilis inventore deleniti rerum fugit velit quos fugiat officia quidem iure?</p>
            </div>
            </div>
            
        </div>
        
        <div className={styles.div}>
            <img src="./images/services/p_1.png" alt="" />
            
          <div className={styles.text}>
            <div className={styles.title}>
              <div className={styles.line}></div>
                <h3>How Can We Help</h3>
            </div>
            <div className={styles.description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, facilis inventore deleniti rerum fugit velit quos fugiat officia quidem iure?</p>
            </div>
            </div>
            
        </div>
        
        <div className={styles.div}>
            <img src="./images/services/p_1.png" alt="" />
            
          <div className={styles.text}>
            <div className={styles.title}>
              <div className={styles.line}></div>
                <h3>How Can We Help</h3>
            </div>
            <div className={styles.description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, facilis inventore deleniti rerum fugit velit quos fugiat officia quidem iure?</p>
            </div>
            </div>
            
        </div>
        
        <div className={styles.div}>
            <img src="./images/services/p_1.png" alt="" />
            
          <div className={styles.text}>
            <div className={styles.title}>
              <div className={styles.line}></div>
                <h3>How Can We Help</h3>
            </div>
            <div className={styles.description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, facilis inventore deleniti rerum fugit velit quos fugiat officia quidem iure?</p>
            </div>
            </div>
            
        </div>
        
        <div className={styles.div}>
            <img src="./images/services/p_1.png" alt="" />
            
          <div className={styles.text}>
            <div className={styles.title}>
              <div className={styles.line}></div>
                <h3>How Can We Help</h3>
            </div>
            <div className={styles.description}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita, facilis inventore deleniti rerum fugit velit quos fugiat officia quidem iure?</p>
            </div>
            </div>
            
        </div>
        

      </div>
    </div>
  )
}

export default Services